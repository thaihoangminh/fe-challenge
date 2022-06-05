import { InputHTMLAttributes, ReactElement } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  startAdornment?: ReactElement;
  endAdornment?: ReactElement;
}

export type { TextFieldProps };
