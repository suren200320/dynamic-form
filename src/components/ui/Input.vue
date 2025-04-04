<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  defineProps<{
    modelValue: string | number;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
  }>();

  interface IEmits {
    (e: 'update:modelValue', value: string): void;
  }

  const emit = defineEmits<IEmits>();

  const handleChange = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value);
  };
</script>

<template>
  <input
    :type="type || 'text'"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="handleChange"
    class="w-full px-2 py-1 border border-light rounded-lg outline-none focus:border-primary bg-white text-dark disabled:bg-light disabled:cursor-not-allowed"
  />
</template>
