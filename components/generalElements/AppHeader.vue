<template>
  <header class="sticky top-0 z-40 bg-white shadow-sm shadow-light-500">
    <div class="container flex items-center justify-between py-4">
      <div class="flex items-center">
        <Logo class="md:w-[160px]" />
      </div>
      <MainMenu
        class="items-center hidden gap-6 text-sm text-gray-500 lg:flex lg:px-4"
      />
      <div
        class="flex justify-end items-center md:w-[160px] flex-1 ml-auto gap-4 md:gap-6"
      >
        <ProductSearch class="hidden sm:inline-flex max-w-[320px] w-[60%]" />
        <SearchTrigger />
        <div class="flex gap-4 items-center">
          <NuxtLink
            to="/my-account"
            class="hidden sm:inline-flex aspect-square items-center"
            title="Sign In"
          >
            <Icon
              name="ion:person-outline"
              size="22"
              class="border border-transparent"
            />
          </NuxtLink>
          <CartTrigger />
        </div>
      </div>
    </div>
  </header>
</template>
