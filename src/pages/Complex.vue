<template>
  <div class="flex min-h-screen items-center justify-center bg-light p-6">
    <div class="w-full max-w-md rounded-lg bg-secondary p-6 shadow-md">
      <h2 class="mb-6 text-center text-2xl font-bold text-dark">
        Complex Form
      </h2>
      <Form
        :schema="complexFormSchema"
        :data="complexFormData"
        @submit="handleSubmit"
        @reset="handleReset"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Form from '@/components/Form.vue';
  import type { TForm, TFormData } from '@/types/form';

  const complexFormSchema: TForm = {
    name: {
      component: 'Input',
      label: 'Name',
      validator(value) {
        return value.length > 0 ? '' : 'This field is required';
      },
    },
    email: {
      component: 'Input',
      label: 'Email',
      validator(value) {
        return value.includes('@') ? '' : 'Invalid email';
      },
    },
    age: {
      component: 'Input',
      label: 'Age',
      validator(value) {
        return value > 0 ? '' : 'Age must be a positive number';
      },
    },
    bio: {
      component: 'TextArea',
      label: 'Bio',
      validator(value) {
        return value.length > 0 ? '' : 'This field is required';
      },
    },
    gender: {
      component: 'Select',
      label: 'Gender',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ],
      validator(value) {
        return value.length > 0 ? '' : 'Please select a gender';
      },
    },
    country: {
      component: 'Select',
      label: 'Country',
      options: [
        { label: 'USA', value: 'usa' },
        { label: 'Canada', value: 'canada' },
        { label: 'UK', value: 'uk' },
      ],
      validator(value) {
        return value.length > 0 ? '' : 'Please select your country';
      },
    },
    terms: {
      component: 'CheckBox',
      label: 'I agree to the terms and conditions',
      fieldVariant: 'horizontal',
      validator(value) {
        return value ? '' : 'You must agree to the terms';
      },
    },
  };

  const complexFormData = ref<TFormData>({
    name: '',
    email: '',
    age: '',
    bio: '',
    gender: '',
    terms: false,
    country: '',
  });

  const handleSubmit = (data: Record<string, any>) => {
    console.log('Form data:', data);
  };

  const handleReset = (data: TFormData) => {
    complexFormData.value = data;
  };
</script>
