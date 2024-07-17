/**
 * @name useWishlist
 * @description A composable that handles the wishlist in local storage
 */

export function useWishlist() {
  const theList = useState<Product[]>("wishlist", () => []);
  /**
   * Add an item to the list
   * @param {Product} item
   * @example addToWishlist({ id: 123, name: 'My Product' })
   */
  function addToWishlist(item: Product): void {
    theList.value.push(item);
    localStorage.setItem("wishlist", JSON.stringify(theList.value));
  }

  /**
   * Remove an item from the list
   * @param {number} id
   * @example removeFromWishlist(123) - Removes the product with the databaseId of 123
   */
  function removeFromWishlist(id: number): void {
    theList.value = theList.value.filter((item) => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(theList.value));
  }

  /**
   *  Check if an item is in the list
   * @param { number } id - The id of the item to check
   * @returns { boolean } - Returns true if the item is in the list
   */
  const isInList = (id?: number) =>
    id ? theList.value.some((item) => item.id === id) : false;

  /**
   * Check if the list is empty
   * @returns {boolean} - Returns true if the list is empty
   */
  const isEmpty = computed(() => theList.value.length === 0);

  /**
   * Get the list from local storage
   */
  function getFromLocalStorage(): void {
    const wishlist = localStorage.getItem("wishlist");
    if (wishlist) theList.value = JSON.parse(wishlist);
  }

  /**
   * Clear the list and remove it from local storage
   */
  function clearWishlist(): void {
    theList.value = [];
    localStorage.removeItem("wishlist");
  }

  onMounted(() => {
    getFromLocalStorage();
  });

  return {
    theList,
    addToWishlist,
    removeFromWishlist,
    isInList,
    isEmpty,
    clearWishlist,
  };
}
