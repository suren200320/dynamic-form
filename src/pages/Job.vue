<template>
  <div class="flex min-h-screen items-center justify-center bg-khaki p-6">
    <div class="w-full max-w-md rounded-lg bg-light p-6 shadow-md">
      <h2 class="mb-6 text-center text-2xl font-bold text-dark">
        Job Application
      </h2>
      <Form
        :schema="jobApplicationSchema"
        :data="jobApplicationData"
        @submit="handleJobApplicationSubmit"
        @reset="handleReset"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Form from '@/components/Form.vue';
  import type { TForm, TFormData } from '@/types/form';

  const jobApplicationSchema: TForm = {
    fullName: {
      component: 'Input',
      label: 'Full Name',
      validator(value) {
        return value.length > 0 ? '' : 'Full Name is required';
      },
    },
    email: {
      component: 'Input',
      label: 'Email',
      validator(value) {
        return value.includes('@') ? '' : 'Invalid email address';
      },
    },
    phone: {
      component: 'Input',
      label: 'Phone Number',
      validator(value) {
        return value.length >= 10 ? '' : 'Enter a valid phone number';
      },
    },
    coverLetter: {
      component: 'TextArea',
      label: 'Cover Letter',
      validator(value) {
        return value.length > 10
          ? ''
          : 'Cover letter must be at least 10 characters';
      },
    },
    position: {
      component: 'Select',
      label: 'Position Applying For',
      options: [
        { label: 'Frontend Developer', value: 'frontend' },
        { label: 'Backend Developer', value: 'backend' },
        { label: 'Full Stack Developer', value: 'fullstack' },
        { label: 'UI/UX Designer', value: 'design' },
      ],
      validator(value) {
        return value.length > 0 ? '' : 'Please select a position';
      },
    },
    javascript: {
      component: 'CheckBox',
      label: 'JavaScript',
      fieldVariant: 'horizontal',
    },
    vue: {
      component: 'CheckBox',
      label: 'Vue.js',
      fieldVariant: 'horizontal',
    },
    css: {
      component: 'CheckBox',
      label: 'CSS',
      fieldVariant: 'horizontal',
    },
    remote: {
      component: 'CheckBox',
      label: 'Open to Remote Work',
      fieldVariant: 'horizontal',
    },
  };

  const jobApplicationData = ref<TFormData>({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    position: '',
    skills: false,
    skill1: false,
    skill2: false,
    skill3: false,
    remote: false,
  });

  const handleJobApplicationSubmit = (data: Record<string, any>) => {
    console.log('Job Application Submitted:', data);
  };

  const handleReset = (data: TFormData) => {
    jobApplicationData.value = data;
  };
</script>

<style scoped>
  .bg-light {
    background-color: #dbdbdb;
  }
  .bg-khaki {
    background-color: #a08963;
  }
  .text-dark {
    color: #5c593d;
  }
  .font-bold {
    font-family: 'Roboto', sans-serif;
  }
</style>
