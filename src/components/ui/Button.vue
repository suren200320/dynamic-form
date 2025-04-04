<script setup lang="ts">
  import { computed, defineProps } from 'vue';

  type Variant = 'filled' | 'outlined' | 'text';

  const props = withDefaults(
    defineProps<{
      variant?: Variant;
      disabled?: boolean;
    }>(),
    {
      variant: 'filled',
    }
  );

  const className = computed(() => [
    'px-4 rounded-xl font-semibold transition-all duration-200 cursor-pointer active:scale-90',
    {
      'bg-primary text-white hover:bg-khaki py-1': props.variant === 'filled',
      'border-2 border-primary text-primary hover:bg-primary hover:text-white py-0.5':
        props.variant === 'outlined',
      'text-primary hover:text-khaki': props.variant === 'text',
      'opacity-50 cursor-not-allowed': props.disabled,
    },
  ]);
</script>

<template>
  <button
    :class="className"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped></style>
