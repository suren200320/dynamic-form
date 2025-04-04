<template>
  <label class="flex flex-col gap-0.5">
    <div
      :class="['flex', variant === 'vertical' ? 'flex-col gap-0.5' : 'gap-2 flex-row-reverse items-center justify-end']"
    >
      <div class="font-roboto">{{ label }}</div>
      <slot />
    </div>
    <span
      v-if="errorMessage"
      class="text-xs text-[red] font-roboto"
    >
      {{ errorMessage }}
    </span>
  </label>
</template>

<script setup lang="ts">
import type { TFormFieldVariant } from '@/types/form';

  interface IProps {
    label?: string;
    errorMessage?: string;
    variant?: TFormFieldVariant;
  }

  withDefaults(defineProps<IProps>(), {
    variant: 'vertical',
  });
</script>

<style scoped></style>
