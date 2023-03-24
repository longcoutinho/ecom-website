import { useFormContext, Controller } from 'react-hook-form';
import { Switch, FormControlLabel } from '@mui/material';
import { isUndefined } from 'lodash';

export enum Label {
  bottom = 'bottom',
  end = 'end',
  start = 'start',
  top = 'top',
}

type ILabel = keyof typeof Label;

interface IRHFSwitch {
  name: string;
  disabled?: boolean;
  label: string;
  labelPlacement: ILabel;
  sx?: object;
}

export default function RHFSwitch({ name, disabled, label, sx, ...other }: IRHFSwitch) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      label={label}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Switch
              sx={!isUndefined(sx) ? sx : {}}
              {...field}
              checked={field.value}
              disabled={!isUndefined(disabled) ? disabled : false}
            />
          )}
        />
      }
      {...other}
    />
  );
}
