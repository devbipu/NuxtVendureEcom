<template>
  <main class="container relative py-6 xl:max-w-7xl">
    <div
      class="flex text-sm leading-none text-gray-400 gap-1 items-center mb-6"
    >
      <span>
        <a href="/" class="hover:text-primary"> Home </a> <span> /</span></span
      >
      <span>
        <a href="/products" class="hover:text-primary"> Products </a>
        <span> / </span>
      </span>
      <span>
        <a href="/product-category/clothing" class="hover:text-primary">
          Clothing
        </a>
        <span> / </span>
      </span>
      <span> <span class="text-gray-800"> Woo Logo </span> </span>
    </div>
    <div class="flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24">
      <div class="relative flex-1">
        <span class="red-badge absolute text-base top-4 right-4"> -10 % </span>
        <img
          alt="Woo Logo"
          data-nuxt-img=""
          class="rounded-xl object-contain w-full min-w-[350px]"
          title="T_1_front.jpg"
          fetchpriority="high"
          src="https://placehold.co/640x640"
        />
        <img
          alt="Woo Logo"
          loading="lazy"
          data-nuxt-img=""
          class="cursor-pointer rounded-xl"
          title="T_1_back.jpg"
          src="https://placehold.co/200x200"
        />
      </div>
      <div class="lg:max-w-md xl:max-w-lg md:py-2 w-full">
        <div class="flex justify-between mb-4">
          <div class="flex-1">
            <h1
              class="flex flex-wrap items-center gap-2 mb-2 text-2xl font-sesmibold"
            >
              Woo Logo
            </h1>
            <div class="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><span class="text-xs ml-1 text-gray-500">(0)</span>
            </div>
          </div>
          <div class="flex font-semibold text-xl">
            <span class="text-gray-400 line-through font-normal">€20.00</span
            ><span class="ml-2">€18.00</span>
          </div>
        </div>
        <div class="grid gap-2 my-8 text-sm">
          <div class="flex items-center gap-2">
            <span class="text-gray-400">Availability: </span
            ><span class="text-red-600">Out of Stock</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-gray-400">SKU: </span>
            <span>T-SHIRT-WOO-LOGO</span>
          </div>
        </div>
        <div class="mb-8 font-light prose">
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
        </div>
        <hr />
        <form>
          <!---->
          <div
            class="fixed bottom-0 left-0 z-10 flex items-center w-full gap-4 p-4 mt-12 bg-white md:static md:bg-transparent bg-opacity-90 md:p-0"
          >
            <input
              type="number"
              min="1"
              aria-label="Quantity"
              class="bg-white border rounded-lg flex text-left p-2.5 w-20 gap-4 items-center justify-center focus:outline-none"
            /><button
              type="submit"
              class="rounded-lg flex font-bold bg-gray-800 text-white text-center min-w-[150px] p-2.5 gap-4 items-center justify-center focus:outline-none disabled flex-1 w-full md:max-w-xs"
              disabled="true"
            >
              <span>Add to Cart</span>
            </button>
          </div>
        </form>
        <div>
          <div class="grid gap-2 my-8 text-sm">
            <div class="flex items-center gap-2">
              <span class="text-gray-400">Categories:</span>
              <div class="product-categories">
                <a
                  href="/product-category/clothing"
                  class="hover:text-primary"
                  title="Clothing"
                  >Clothing<span class="comma">, </span></a
                ><a
                  href="/product-category/t-shirts"
                  class="hover:text-primary"
                  title="T-shirts"
                >
                  T-shirts<span class="comma">, </span></a
                >
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div class="flex flex-wrap gap-4">
          <button
            type="button"
            class="cursor-pointer flex mt-4 text-sm text-gray-400 gap-2 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="icon"
              width="18px"
              height="18px"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81"
              ></path>
            </svg>
            <span>Add to Wishlist</span>
          </button>
          <button
            type="button"
            class="flex items-center gap-2 mt-4 text-sm text-gray-400 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="18"
              height="18"
            >
              <circle
                cx="128"
                cy="256"
                r="48"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              ></circle>
              <circle
                cx="384"
                cy="112"
                r="48"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              ></circle>
              <circle
                cx="384"
                cy="400"
                r="48"
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
                d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"
              ></path></svg
            ><span>Share</span>
          </button>
        </div>
      </div>
    </div>

    <div class="my-32">
      <div>
        <nav class="border-b flex gap-8 tabs">
          <button type="button" class="active">Description</button
          ><button type="button" class="">Reviews (0)</button>
        </nav>
        <div class="tab-contents">
          <div class="font-light mt-8 prose">
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </div>
          <!---->
        </div>
      </div>
    </div>
    <div class="my-32">
      <div class="mb-4 text-xl font-semibold">You May Also Like</div>
      <div class="grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <div class="relative product-card w-full">
          <a href="/product/woo-ninja-2" class="" title="Woo Ninja">
            <span class="red-badge absolute top-2 right-2">-10 %</span>
            <img
              width="220"
              height="248"
              alt="Woo Ninja"
              loading="eager"
              data-nuxt-img=""
              title="hoodie_2_front.jpg"
              src="https://placehold.co/600x400"
            />
          </a>
          <div class="p-2">
            <div class="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(251, 190, 36)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(251, 190, 36)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(251, 190, 36)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(251, 190, 36)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><span class="text-xs ml-1 text-gray-500">(1)</span>
            </div>
            <a href="/product/woo-ninja-2" class="" title="Woo Ninja"
              ><h2 class="mb-2 font-light leading-tight">Woo Ninja</h2></a
            >
            <div class="flex font-semibold text-sm">
              <span class="text-gray-400 line-through font-normal">€50.00</span
              ><span class="ml-2">€45.00</span>
            </div>
          </div>
        </div>
        <div class="relative product-card w-full">
          <a href="/product/woo-ninja-3" class="" title="Woo Ninja">
            <img
              width="220"
              height="248"
              alt="Woo Ninja"
              loading="eager"
              data-nuxt-img=""
              title="T_6_front.jpg"
              src="https://placehold.co/600x400"
            />
          </a>
          <div class="p-2">
            <div class="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path>
              </svg>
              <span class="text-xs ml-1 text-gray-500"> (0) </span>
            </div>
            <a href="/product/woo-ninja-3" class="" title="Woo Ninja">
              <h2 class="mb-2 font-light leading-tight">Woo Ninja</h2></a
            >
            <div class="flex font-semibold text-sm">
              <span class="">€26.95</span
              ><!---->
            </div>
          </div>
        </div>
        <div class="relative product-card w-full">
          <a href="/product/woo-logo-2" class="" title="Woo Logo">
            <img
              width="220"
              height="248"
              alt="Woo Logo"
              loading="eager"
              data-nuxt-img=""
              title="hoodie_6_front.jpg"
              src="https://placehold.co/600x400"
          /></a>
          <div class="p-2">
            <div class="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(251, 190, 36)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(251, 190, 36)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(251, 190, 36)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(251, 190, 36)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(251, 190, 36)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><span class="text-xs ml-1 text-gray-500">(1)</span>
            </div>
            <a href="/product/woo-logo-2" class="" title="Woo Logo"
              ><h2 class="mb-2 font-light leading-tight">Woo Logo</h2></a
            >
            <div class="flex font-semibold text-sm">
              <span class="">€35.00</span
              ><!---->
            </div>
          </div>
        </div>
        <div class="relative product-card w-full">
          <a href="/product/ship-your-idea-3" class="" title="Ship Your Idea"
            ><!----><img
              width="220"
              height="248"
              alt="Ship Your Idea"
              loading="eager"
              data-nuxt-img=""
              title="T_4_front.jpg"
              src="https://placehold.co/600x400"
          /></a>
          <div class="p-2">
            <div class="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><span class="text-xs ml-1 text-gray-500">(0)</span>
            </div>
            <a href="/product/ship-your-idea-3" class="" title="Ship Your Idea"
              ><h2 class="mb-2 font-light leading-tight">Ship Your Idea</h2></a
            >
            <div class="flex font-semibold text-sm">
              <span class="">€20.00</span
              ><!---->
            </div>
          </div>
        </div>
        <div class="relative product-card w-full hidden lg:block">
          <a href="/product/hoodie" class="" title="Hoodie"
            ><!----><img
              width="220"
              height="248"
              alt="Hoodie"
              loading="lazy"
              data-nuxt-img=""
              title="hoodie-2.jpg"
              src="https://placehold.co/600x400"
          /></a>
          <div class="p-2">
            <div class="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(251, 190, 36)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(251, 190, 36)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(251, 190, 36)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(251, 190, 36)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon mr-[2px]"
                width="14px"
                height="14px"
                viewBox="0 0 512 512"
                style="color: rgb(204, 204, 204)"
              >
                <path
                  fill="currentColor"
                  d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
                ></path></svg
              ><span class="text-xs ml-1 text-gray-500">(1)</span>
            </div>
            <a href="/product/hoodie" class="" title="Hoodie"
              ><h2 class="mb-2 font-light leading-tight">Hoodie</h2></a
            >
            <div class="flex font-semibold text-sm">
              <span class="">€45.00</span
              ><!---->
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.product-categories > a:last-child .comma {
  display: none;
}

input[type="number"]::-webkit-inner-spin-button {
  opacity: 1;
}
</style>
