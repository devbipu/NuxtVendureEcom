// import type Product from "../types";
import type { SearchProduct } from "@/types";

let allProducts = [] as SearchProduct[];

export function useProducts() {
  const { productsPerPage } = useHelpers();
  // Declare the state variables and the setter functions
  const products = useState<SearchProduct[]>("products");
  const totalProducts = useState<number>("totalProducts");
  const currentPage = useState<number>("currentPage");

  /**
   * Sets the products state variable and the allProducts variable.
   * @param {Product[]} newProducts - The new products to set.
   */
  function setProducts(newProducts: SearchProduct[]): void {
    if (!Array.isArray(newProducts))
      throw new Error("Products must be an array.");
    products.value = newProducts ?? [];
    allProducts = JSON.parse(JSON.stringify(newProducts));
  }

  const updateProductList = async (): Promise<void> => {
    const { scrollToTop } = useHelpers();
    // const { isSortingActive, sortProducts } = useSorting();
    // const { isFiltersActive, filterProducts } = useFiltering();
    // const { isSearchActive, searchProducts } = useSearching();

    // scroll to top of page
    scrollToTop();

    // return all products if no filters are active
    // if (
    //   !isFiltersActive.value &&
    //   !isSearchActive.value &&
    //   !isSortingActive.value
    // ) {
    //   products.value = allProducts;
    //   return;
    // }

    // // otherwise, apply filter, search and sorting in that order
    // try {
    //   let newProducts = [...allProducts];
    //   if (isFiltersActive.value) newProducts = filterProducts(newProducts);
    //   if (isSearchActive.value) newProducts = searchProducts(newProducts);
    //   if (isSortingActive.value) newProducts = sortProducts(newProducts);

    //   products.value = newProducts;
    // } catch (error) {
    //   console.error(error);
    // }
  };

  function setTotalProduct(data: number): void {
    totalProducts.value = data;
  }

  function setCurrentPage(data: number): void {
    currentPage.value = data;
  }

  return {
    products,
    allProducts,
    setProducts,
    totalProducts,
    updateProductList,
    setTotalProduct,
    setCurrentPage,
    currentPage,
  };
}
