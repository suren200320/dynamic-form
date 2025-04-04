<template>
  <form
    class="flex flex-col gap-3"
    @submit.prevent="handleSubmit"
  >
    <FormField
      v-for="(field, key) in schema"
      :key="key"
      :variant="field.fieldVariant"
      :label="field.label"
      :error-message="validation?.[key]"
    >
      <component
        :is="components[field.component]"
        v-bind="field"
        :model-value="localData[key]"
        @update:model-value="(value: any) => handleChange(key, value)"
      />
    </FormField>
    <div class="flex items-center gap-4 pt-2">
      <Button type="submit">Save</Button>
      <Button
        variant="outlined"
        type="button"
        @click="handleReset"
      >
        Reset
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits, ref, toRaw } from 'vue';
  import type { TForm } from '@/types/form';
  import FormField from './ui/FormField.vue';
  import Input from './ui/Input.vue';
  import CheckBox from './ui/CheckBox.vue';
  import TextArea from './ui/TextArea.vue';
  import Select from './ui/Select.vue';
  import Button from './ui/Button.vue';

  interface IProps {
    schema: TForm;
    data: Record<string, string | number | boolean>;
  }

  const components = {
    Input,
    CheckBox,
    TextArea,
    Select,
  } as const;

  const props = defineProps<IProps>();
  const emit = defineEmits(['submit', 'reset']);

  const nulledData = props.data;
  const localData = ref(props.data);
  const validation = ref<Record<string, string>>({});

  const handleChange = (key: string, value: any) => {
    localData.value[key] = value;
    handleValidateField(key, value);
  };

  const handleValidateField = (key: string, value: any) => {
    validation.value[key] = props.schema[key].validator?.(value) || '';
  };

  const handleValidate = () => {
    validation.value = {};
    Object.keys(localData.value).forEach((key) => {
      handleValidateField(key, localData.value[key]);
    });
  };

  const handleSubmit = () => {
    handleValidate();
    if (Object.values(validation.value).some((msg) => msg)) return;
    emit('submit', localData.value);
  };

  const handleReset = () => {
    Object.keys(props.data).forEach((key) => {
      if (typeof localData.value[key] === 'boolean') {
        localData.value[key] = false;
      } else {
        localData.value[key] = '';
      }
    });
    emit('reset', toRaw(nulledData));
  };
</script>

<style scoped></style>
