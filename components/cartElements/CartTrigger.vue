<template>
  <div class="relative cursor-pointer inline-flex" title="Cart">
    <Icon name="ion:cart-outline" size="22" class="mr-1 md:mr-0" />
    <ClientOnly>
      <Transition name="popIn" mode="out-in">
        <span
          class="bg-primary rounded-full text-white leading-none min-w-[16px] p-[3px] -top-1 -right-1 md:-right-2 text-[10px] absolute inline-flex justify-center items-center"
        >
          0
        </span>
      </Transition>
    </ClientOnly>
  </div>
</template>

<style lang="postcss">
  /* popIn */
  .popIn-enter-active,
  .popIn-leave-active {
    transition: all 200ms cubic-bezier(0, 0, 0.57, 1.61);
  }

  .popIn-enter-from,
  .popIn-leave-to {
    transform: scale(0);
  }
</style>
