<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  withDefaults(
    defineProps<{
      modelValue: string;
      placeholder?: string;
      disabled?: boolean;
      rows?: number;
    }>(),
    {
      rows: 1,
    }
  );

  interface IEmits {
    (e: 'update:modelValue', value: string): void;
  }

  const emit = defineEmits<IEmits>();

  const handleChange = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLTextAreaElement).value);
  };
</script>

<template>
  <textarea
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :rows="rows"
    @input="handleChange"
    class="w-full px-2 py-1 border border-light rounded-md focus:outline-none focus:border-primary bg-white text-primary disabled:bg-light disabled:cursor-not-allowed"
  ></textarea>
</template>
