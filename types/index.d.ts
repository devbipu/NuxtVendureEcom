type Product = {
  id: string;
  name: string;
  slug: string;
  featuredAsset?: {
    preview: string;
    mimeType: string;
    width: number;
    height: number;
  };
};

interface VendureNuxtSEOItem {
  provider: string;
  url?: string;
  handle?: string;
}
