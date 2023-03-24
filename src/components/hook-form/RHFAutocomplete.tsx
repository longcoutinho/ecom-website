import { useFormContext, Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';
import { isUndefined } from 'lodash';

interface IRHFAutoCompleteProps {
  name: string;
  label: string;
  disabled?: boolean;
  multiple?: boolean;
  option: Array<any>;
  onChangeProps?: (e: any, value: any) => void;
}

const RHFAutocomplete = ({
  name,
  option,
  label,
  disabled,
  multiple,
  onChangeProps,
  ...other
}: IRHFAutoCompleteProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <Autocomplete
            multiple={!isUndefined(multiple) ? multiple : false}
            disabled={!isUndefined(disabled) ? disabled : false}
            fullWidth
            options={option}
            getOptionLabel={(option) => option.name}
            defaultValue={value}
            value={value}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            renderInput={(param) => (
              <TextField {...param} label={label} fullWidth error={!!error} helperText={error?.message} />
            )}
            onChange={(e, value) => {
              if (onChangeProps) {
                return onChangeProps(e, value);
              } else {
                onChange(value);
                return value;
              }
            }}
          />
        );
      }}
    />
  );
};
export default RHFAutocomplete;
