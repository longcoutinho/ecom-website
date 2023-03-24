import { forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Avatar as MUIAvatar } from '@mui/material';

const Avatar = forwardRef(({ color = 'default', children, sx, ...other }: any, ref: any) => {
  const theme: any = useTheme();

  if (color === 'default') {
    return (
      <MUIAvatar ref={ref} sx={sx} {...other}>
        {children}
      </MUIAvatar>
    );
  }

  return (
    <MUIAvatar
      ref={ref}
      sx={{
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette[color].contrastText,
        backgroundColor: theme.palette[color].main,
        ...sx,
      }}
      {...other}
    >
      {children}
    </MUIAvatar>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
