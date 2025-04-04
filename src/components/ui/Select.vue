<template>
  <div class="flex flex-col gap-1">
    <div
      class="relative w-full"
      v-click-outside="closeDropdown"
    >
      <div
        :class="[
          'w-full px-2 py-1 border-1 rounded-lg text-primary bg-white cursor-pointer flex justify-between items-center relative duration-200',
          isOpen ? 'border-primary' : 'border-light',
        ]"
        @click="toggleDropdown"
      >
        <span>{{ selectedLabel || placeholder }}</span>
        <img
          src="../../assets/icons/arrow-down.svg"
          alt=""
          :class="[
            'absolute right-2 duration-200 w-3',
            isOpen ? 'rotate-180' : '',
          ]"
        />
      </div>

      <ul
        v-if="isOpen"
        class="absolute w-full bg-white border border-khaki mt-1 rounded-lg shadow-lg max-h-48 overflow-auto z-10"
      >
        <li
          v-for="option in convertedOptions"
          :key="option.value"
          @click="selectOption(option)"
          :class="[
            'px-2 py-1 cursor-pointer transition duration-200',
            option.value === modelValue
              ? 'bg-khaki text-white'
              : 'hover:bg-secondary hover:text-white',
          ]"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { ISelectOption } from '@/types/select';
  import { ref, computed } from 'vue';

  const props = withDefaults(
    defineProps<{
      modelValue?: string | number;
      options?: ISelectOption[];
      placeholder?: string;
      defaultOptionLabel?: string;
    }>(),
    {
      modelValue: '',
      defaultOptionLabel: 'Select',
    }
  );

  const emit = defineEmits(['update:modelValue']);
  const isOpen = ref(false);

  const convertedOptions = computed((): ISelectOption[] => [
    {
      label: props.defaultOptionLabel,
      value: '',
    },
    ...(props.options || []),
  ]);

  const selectedLabel = computed(() => {
    const selectedOption = convertedOptions.value?.find(
      (option) => option.value === props.modelValue
    );
    return selectedOption ? selectedOption.label : '';
  });

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };

  const selectOption = (option: ISelectOption) => {
    emit('update:modelValue', option.value);
    isOpen.value = false;
  };

  const closeDropdown = () => {
    isOpen.value = false;
  };
</script>
