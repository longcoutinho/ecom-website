import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { isUndefined } from 'lodash';

export default function RHFSelect({ name, children, onChangeProps, ...other }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, name }, fieldState: { error } }) => (
        <TextField
          // size="small"
          value={value}
          defaultValue={value}
          onChange={!isUndefined(onChangeProps) ? onChangeProps : onChange}
          select
          fullWidth
          SelectProps={{ native: true }}
          error={!!error}
          helperText={error?.message}
          {...other}
          name={name}
        >
          {children}
        </TextField>
      )}
    />
  );
}
