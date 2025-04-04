import type { ISelectOption } from './select';

export type TFormFieldType = 'Input' | 'TextArea' | 'CheckBox' | 'Select';

export type TFormFieldVariant = 'vertical' | 'horizontal';

export interface IFormField {
  label?: string;
  component: TFormFieldType;
  class?: string;
  options?: ISelectOption[];
  rows?: number;
  fieldVariant?: TFormFieldVariant;
  validator?: (value: any) => string;
}

export type TForm = Record<string, IFormField>;

export type TFormData = Record<string, string | number | boolean>;
