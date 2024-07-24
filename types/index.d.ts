import { CurrencyCode } from "#gql";
type Product = import("#gql").GetProductQuery["product"];
type Collection = import("#gql").GetCollectionQuery["collection"];
type Search = import("#gql").GetCollectionProductsQuery["search"];

interface VendureNuxtSEOItem {
  provider: string;
  url?: string;
  handle?: string;
}

interface Cart {
  id: string;
  totalPrice: number;
  products: Product[];
}

type Asset = {
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  type: AssetType;
  fileSize: number;
  mimeType: string;
  width: number;
  height: number;
  source: string;
  preview: string;
};

interface Variation {
  id: number | string;
  productId: number | string;
  createdAt: string;
  updatedAt: string;
  languageCode: string;
  sku: string;
  name: string;
  price: number;
  currencyCode: string;
  priceWithTax: number;
  stockLevel: number | string;
  customFields?: Record<string, any>;
}

// interface Collection {
//   id: string;
//   createdAt: any;
//   updatedAt: any;
//   languageCode?: LanguageCode | null;
//   name: string;
//   slug: string;
//   position: number;
//   description: string;
//   parentId: string;
// }

interface SearchProduct {
  productName: string;
  slug: string;
  productId: string;
  currencyCode: CurrencyCode;
  productAsset?: { id: string; preview: string } | null;
  priceWithTax: { min: any; max: any } | { value: any };
}

export type { SearchProduct, Variation, Collection, Search, Asset, Product };
