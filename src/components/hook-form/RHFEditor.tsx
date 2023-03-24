import { useFormContext, Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
import Editor from '../editor';
import { isUndefined } from 'lodash';

export default function RHFEditor({ name, readOnly, ...other }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Editor
          id={name}
          value={field.value}
          onChange={field.onChange}
          error={!!error}
          readOnly={!isUndefined(readOnly) ? readOnly : false}
          helperText={
            <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
              {error?.message}
            </FormHelperText>
          }
          {...other}
        />
      )}
    />
  );
}
