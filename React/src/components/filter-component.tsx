import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type BasicFilterType = {
  selectedFilterValue: string;
  setSelectedFilterValue: React.Dispatch<React.SetStateAction<string>>;
  filterCitiesByArea: VoidFunction;
};

const BasicFilter: React.FC<BasicFilterType> = ({
  selectedFilterValue,
  setSelectedFilterValue,
  filterCitiesByArea,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedFilterValue(event.target.value as string);
    filterCitiesByArea();
  };

  return (
    <Box sx={{ width: '15vh' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter by:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedFilterValue}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="0">None</MenuItem>
          <MenuItem value="10">Smaller than LT</MenuItem>
          <MenuItem value="20">Are in Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicFilter;
