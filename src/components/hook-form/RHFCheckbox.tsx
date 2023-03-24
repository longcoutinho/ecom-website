import { useFormContext, Controller } from 'react-hook-form';
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { isUndefined } from 'lodash';

export function RHFCheckbox({ name, disabled, ...other }: any) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox {...field} disabled={!isUndefined(disabled) ? disabled : false} checked={field.value} />
          )}
        />
      }
      {...other}
    />
  );
}

export function RHFMultiCheckbox({ name, options, ...other }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onSelected = (option: any) =>
          field.value.includes(option)
            ? field.value.filter((value: any) => value !== option)
            : [...field.value, option];

        return (
          <FormGroup>
            {options.map((option: any) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={field.value.includes(option)}
                    onChange={() => field.onChange(onSelected(option))}
                  />
                }
                label={option}
                {...other}
              />
            ))}
          </FormGroup>
        );
      }}
    />
  );
}
