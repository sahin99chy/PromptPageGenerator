export interface LandingPageData {
  headline: string;
  subheadline: string;
  features: Feature[];
  cta: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface ExportData {
  html: string;
  json: LandingPageData;
}