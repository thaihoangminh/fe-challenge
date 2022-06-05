import { ReactNode, ButtonHTMLAttributes } from 'react';

enum ButtonVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export { ButtonVariant };

export type { ButtonProps };
