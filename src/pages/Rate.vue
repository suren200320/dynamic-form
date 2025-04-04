<template>
  <div class="flex min-h-screen items-center justify-center bg-light p-6">
    <div class="w-full max-w-md rounded-lg bg-secondary p-6 shadow-md">
      <h2 class="mb-6 text-center text-2xl font-bold text-white">
        Feedback Form
      </h2>
      <Form
        :schema="feedbackFormSchema"
        :data="feedbackFormData"
        @submit="handleFeedbackSubmit"
        @reset="handleReset"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Form from '@/components/Form.vue';
  import type { TForm, TFormData } from '@/types/form';

  const feedbackFormSchema: TForm = {
    name: {
      component: 'Input',
      label: 'Name',
      validator(value) {
        return value.length > 0 ? '' : 'Name is required';
      },
    },
    email: {
      component: 'Input',
      label: 'Email',
      validator(value) {
        return value.includes('@') ? '' : 'Invalid email';
      },
    },
    feedback: {
      component: 'TextArea',
      label: 'Feedback',
      rows: 5,
      validator(value) {
        return value.length > 0 ? '' : 'Feedback cannot be empty';
      },
    },
    rating: {
      component: 'Select',
      label: 'Rating',
      options: [
        { label: '1 Star', value: '1' },
        { label: '2 Stars', value: '2' },
        { label: '3 Stars', value: '3' },
        { label: '4 Stars', value: '4' },
        { label: '5 Stars', value: '5' },
      ],
      validator(value) {
        return value.length > 0 ? '' : 'Please select a rating';
      },
    },
    subscribe: {
      component: 'CheckBox',
      label: 'Subscribe to newsletter',
    },
  };

  const feedbackFormData = ref<TFormData>({
    name: '',
    email: '',
    feedback: '',
    rating: '',
    subscribe: false,
  });

  const handleFeedbackSubmit = (data: Record<string, any>) => {
    console.log('Feedback submitted:', data);
  };

  const handleReset = (data: TFormData) => {
    feedbackFormData.value = data;
  };
</script>
