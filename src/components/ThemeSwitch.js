import * as React from 'react';
import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';
import { themeReducer } from '@/slice/theme-slice';
import { MaterialUISwitch } from '@/ui/switch';

const CustomizedSwitches = () => {
  const dispatch = useDispatch();

  const selectedColor = useSelector((state) => state.theme.themeColor);
  const [isDarkMode, setIsDarkMode] = useState(selectedColor === 'dark');
  const toggleTheme = () => {
    // Toggle theme correctly based on isDarkMode state
    if (isDarkMode) {
      setIsDarkMode(false);
      dispatch(themeReducer('light'));
    } else {
      setIsDarkMode(true);
      dispatch(themeReducer('dark'));
    }
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            sx={{ m: 1 }}
            checked={isDarkMode}
            onChange={toggleTheme}
            id="switch"
          />
        }
      />
    </FormGroup>
  );
};
export default CustomizedSwitches;
