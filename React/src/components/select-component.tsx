import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type BasicSelectType = {
  selectedValue: string;
  setSelectedValue: any;
};

const BasicSelect: React.FC<BasicSelectType> = ({ setSelectedValue, selectedValue }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value as string);
    console.log(selectedValue);
  };

  return (
    <Box sx={{ width: '15vh' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by name:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="a-z">A-Z</MenuItem>
          <MenuItem value="z-a">Z-A</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
