import type { AdditiveManufacturingRepository } from "./types";

export const nih3d: AdditiveManufacturingRepository = {
  name: "NIH 3D",
  website: "https://3d.nih.gov",
  wikipedia: null,
  email: null,
  location: "Bethesda, Maryland, USA",
  socialMedia: {
    twitter: null,
    facebook: null,
    linkedin: "https://www.linkedin.com/company/national-institutes-of-health",
    instagram: null,
    bluesky: null,
    telegram: null,
    discord: null,
  },
  apiEndpoints: [],
  foundingDate: "2013 (NIH 3D Print Exchange); relaunched as NIH 3D in 2023",
  modelsSpecializeIn: ["Biomedical models", "Molecular structures", "Anatomy", "Medical visualization", "Open-source labware", "STEM education"],
  fileTypeSupport: ["GLB", "STL", "X3D", "WRL", "CIF", "PDB", "SDF", "MOL", "MOL2", "MAP", "OMAP", "MAE", "ENT", "TIFF", "TIF", "DICOM ZIP"],
  membershipCost: "Free to browse, download, and register; operated by NIH/NIAID.",
};
