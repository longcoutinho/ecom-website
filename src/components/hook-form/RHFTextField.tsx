import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

export default function RHFTextField({ name, inputRef, ...other }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} fullWidth error={!!error} helperText={error?.message} {...other} />
      )}
    />
  );
}
