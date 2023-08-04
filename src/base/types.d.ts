export type FormInputProps<
  C extends { value?: any; onChange?: (value: any, data: any) => void },
  T,
  K extends keyof T
> = C & Omit<T, K>;
