type ProductBase = import("#gql").GetProductQuery["product"];

type Product = ProductBase;

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
