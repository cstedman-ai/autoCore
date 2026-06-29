#!/usr/bin/env python3
import urllib.request, urllib.error, ssl, re, html
from urllib.parse import urlparse
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

root = Path('/Users/cstedman/Workspace/autoCore/src/lib/autoCore/partsDistributors')
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36'

SOCIAL_PATTERNS = {
  'youtube': re.compile(r'https?://(?:www\.)?(?:youtube\.com|youtu\.be)/[^\s"\'<>\\]+', re.I),
  'linkedin': re.compile(r'https?://(?:[a-z]+\.)?linkedin\.com/(?:company|in)/[^\s"\'<>\\]+', re.I),
  'facebook': re.compile(r'https?://(?:www\.)?facebook\.com/[^\s"\'<>\\]+', re.I),
  'instagram': re.compile(r'https?://(?:www\.)?instagram\.com/[^\s"\'<>\\]+', re.I),
  'twitter': re.compile(r'https?://(?:www\.)?(?:twitter\.com|x\.com)/[^\s"\'<>\\]+', re.I),
  'reddit': re.compile(r'https?://(?:www\.)?reddit\.com/[^\s"\'<>\\]+', re.I),
}
NOISE = ('share', 'intent/', 'sharer', 'login', 'plugins', 'dialog', 'search?', 'hashtag', '/privacy', '/terms', 'facebook.com/tr?', 'youtube.com/embed/', 'reddit.com/submit')

def clean_url(u):
    u = html.unescape(u).strip().rstrip(').,;#')
    u = re.sub(r'[?&](utm_[^=&]+|fbclid|gclid|trk|trkInfo|hl|sub_confirmation)=[^&]+', '', u)
    return u.rstrip('?&')

def fetch_site(p, website):
    found = {'email': None, 'social': {k: None for k in SOCIAL_PATTERNS}, 'url_valid': False}
    if not website: return p, found
    urls = [website.rstrip('/'), website.rstrip('/')+'/about', website.rstrip('/')+'/contact']
    host = urlparse(website).netloc.lower().replace('www.','')
    domain_part = host.split(':')[0].split('.')[-2] if '.' in host else host
    for url in urls:
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA})
            with urllib.request.urlopen(req, timeout=8, context=ctx) as resp:
                found['url_valid'] = True
                body = resp.read(300000).decode(resp.headers.get_content_charset() or 'utf-8', errors='ignore')
        except urllib.error.HTTPError as e:
            if e.code in (403, 405, 429, 999, 400): found['url_valid'] = True
            continue
        except Exception:
            continue
            
        if not found['email']:
            mails = re.findall(r'mailto:([^?"\'<>]+)', body, re.I) or re.findall(r'[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}', body, re.I)
            for m in mails:
                m = html.unescape(m).strip().lower()
                if any(x in m for x in ('example.com','domain.com','yourname','sentry.io','email.com','wixpress.com','schema.org', 'sentry')): continue
                if domain_part in m or len(mails) == 1:
                    found['email'] = m
                    break
        for k, pat in SOCIAL_PATTERNS.items():
            if found['social'][k]: continue
            for raw in pat.findall(body):
                cu = clean_url(raw); low = cu.lower()
                if any(n in low for n in NOISE): continue
                found['social'][k] = cu; break
    return p, found

def q(v): return 'null' if not v else '"'+str(v).replace('\\','\\\\').replace('"','\\"')+'"'

files = [p for p in root.glob('*.ts') if p.name not in ('types.ts', 'index.ts')]
site_inputs = []
for p in files:
    t = p.read_text()
    m = re.search(r'website: "([^"]+)"', t)
    site_inputs.append((p, m.group(1) if m else None))

with ThreadPoolExecutor(max_workers=16) as ex:
    futs = [ex.submit(fetch_site, p, w) for p, w in site_inputs]
    for fut in as_completed(futs):
        p, data = fut.result()
        t = p.read_text()
        if data['email']:
            t = re.sub(r'email: null,', f'email: {q(data["email"])},', t)
        for k, v in data['social'].items():
            if v:
                t = re.sub(rf'{k}: null,', f'{k}: {q(v)},', t)
        if not data['url_valid']:
            print(f"WARN: website {site_inputs[[x[0] for x in site_inputs].index(p)][1]} might be invalid for {p.name}")
        p.write_text(t)
print("Enrichment done.")
