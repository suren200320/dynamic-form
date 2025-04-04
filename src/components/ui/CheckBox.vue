<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  defineProps<{
    modelValue?: boolean;
    disabled?: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
  }>();

  const handleChange = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).checked);
  };
</script>

<template>
  <label class="flex items-center cursor-pointer">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="handleChange"
      class="hidden"
    />
    <div
      :class="[
        'w-5 h-5 border border-primary rounded-md flex items-center justify-center transition-all',
        modelValue ? 'bg-primary' : 'bg-white',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      ]"
    >
      <img
        v-if="modelValue"
        src="../../assets/icons/check.svg"
        alt=""
      />
    </div>
  </label>
</template>
