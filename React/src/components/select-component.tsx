import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
 Box, InputLabel, MenuItem, FormControl,
} from '@mui/material';

type BasicSelectType = {
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
  sortCitiesAlphabetically: VoidFunction;
};

const BasicSelect: React.FC<BasicSelectType> = ({
  setSelectedValue,
  selectedValue,
  sortCitiesAlphabetically,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value as string);
    sortCitiesAlphabetically();
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
