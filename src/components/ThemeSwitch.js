import * as React from 'react';
import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from 'next-themes';
import { useDispatch, useSelector } from 'react-redux';
import { themeReducer } from '@/slice/theme-slice';
import { MaterialUISwitch } from '@/ui/switch';

const CustomizedSwitches = () => {
  const { setTheme, themes } = useTheme();

  const selectedColor = useSelector((state) => state.theme.value.themeColor);
  const [value, setValue] = useState(selectedColor === 'dark' ? true : false);
  const dispatch = useDispatch();

  const toggleTheme = (e) => {
    setValue(e.target.checked);
    if (e.target.checked) {
      setTheme('dark');
      dispatch(
        themeReducer({
          themeColor: 'dark',
        })
      );
    } else {
      setTheme('light');
      dispatch(
        themeReducer({
          themeColor: 'light',
        })
      );
    }
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            sx={{ m: 1 }}
            checked={value}
            onChange={toggleTheme}
            id="switch"
          />
        }
      />
    </FormGroup>
  );
};
export default CustomizedSwitches;
