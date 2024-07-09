<template>
  <header
    class="sticky top-0 z-40 bg-white shadow-sm shadow-light-500"
    data-v-inspector="woonuxt_base/app/components/generalElements/AppHeader.vue:6:3"
  >
    <div
      class="container flex items-center justify-between py-4"
      data-v-inspector="woonuxt_base/app/components/generalElements/AppHeader.vue:7:5"
    >
      <div
        class="flex items-center"
        data-v-inspector="woonuxt_base/app/components/generalElements/AppHeader.vue:8:7"
      >
        <div
          data-v-inspector="woonuxt_base/app/components/generalElements/MenuTrigger.vue:6:3"
          class="lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="icon mr-4 cursor-pointer"
            style=""
            width="26px"
            height="26px"
            viewBox="0 0 512 512"
            data-v-44f01d82=""
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M80 160h352M80 256h352M80 352h352"
            ></path>
          </svg>
        </div>
        <a
          aria-current="page"
          href="/"
          class="router-link-active router-link-exact-active md:w-[160px]"
          ><img
            src="https://paystone.ekopiidev.com/wp-content/uploads/2024/05/client-logo-1.png"
            alt="Logo"
            class="object-contain h-10"
            data-v-inspector="woonuxt_base/app/components/generalElements/Logo.vue:12:5"
        /></a>
      </div>
      <nav
        data-v-inspector="woonuxt_base/app/components/generalElements/MainMenu.vue:2:3"
        class="items-center hidden gap-6 text-sm text-gray-500 lg:flex lg:px-4"
      >
        <a
          aria-current="page"
          href="/"
          class="router-link-active router-link-exact-active"
          >Home</a
        >
        <!-- <a href="/products" class="">Products</a>
        <a href="/categories" class="">Categories</a>
        <a href="/contact" class="">Contact</a>
        <a href="/wishlist" class="lg:hidden">Wishlist</a>
        <a href="/my-account" class="lg:hidden">My Account</a> -->
      </nav>
      <div
        class="flex justify-end items-center md:w-[160px] flex-1 ml-auto gap-4 md:gap-6"
        data-v-inspector="woonuxt_base/app/components/generalElements/AppHeader.vue:13:7"
      >
        <form
          class="relative items-center flex-1 -space-x-px rounded-md shadow-sm hidden sm:inline-flex max-w-[320px] w-[60%]"
          data-v-inspector="woonuxt_base/app/components/shopElements/ProductSearch.vue:16:3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="icon absolute z-10 opacity-50 pointer-events-none left-2"
            style=""
            width="20px"
            height="20px"
            viewBox="0 0 512 512"
            data-v-44f01d82=""
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"
            ></path>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M338.29 338.29L448 448"
            ></path></svg
          ><input
            type="text"
            placeholder="Search Products..."
            class="z-0 inline-flex items-center w-full p-2 pl-10 text-sm text-gray-500 border border-gray-300 rounded-md shadow-inner outline-none bg-gray-50 shadow-gray-200"
            data-v-inspector="woonuxt_base/app/components/shopElements/ProductSearch.vue:18:5"
          /><!---->
        </form>
        <div
          class="relative cursor-pointer inline-flex sm:hidden"
          title="Cart"
          data-v-inspector="woonuxt_base/app/components/generalElements/SearchTrigger.vue:6:3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="icon mr-1 md:mr-0"
            style=""
            width="20px"
            height="20px"
            viewBox="0 0 512 512"
            data-v-44f01d82=""
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"
            ></path>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M338.29 338.29L448 448"
            ></path>
          </svg>
        </div>
        <div
          class="flex gap-4 items-center"
          data-v-inspector="woonuxt_base/app/components/generalElements/AppHeader.vue:16:9"
        >
          <a
            href="/my-account"
            class="hidden sm:inline-flex aspect-square items-center"
            title="Sign In"
            data-v-f44dced4=""
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="icon border border-transparent"
              data-v-f44dced4=""
              style=""
              width="22px"
              height="22px"
              viewBox="0 0 512 512"
              data-v-44f01d82=""
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96"
              ></path>
              <path
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304Z"
              ></path></svg
          ></a>
          <div
            class="relative cursor-pointer inline-flex"
            title="Cart"
            data-v-inspector="woonuxt_base/app/components/cartElements/CartTrigger.vue:6:3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="icon mr-1 md:mr-0"
              style=""
              width="22px"
              height="22px"
              viewBox="0 0 512 512"
              data-v-44f01d82=""
            >
              <circle
                cx="176"
                cy="416"
                r="16"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              ></circle>
              <circle
                cx="400"
                cy="416"
                r="16"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              ></circle>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M48 80h64l48 272h256"
              ></path>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
              ></path></svg
            ><!--v-if-->
          </div>
        </div>
      </div>
    </div>
    <!---->
  </header>
</template>
