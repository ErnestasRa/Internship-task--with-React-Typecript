import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const BasicFilter = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ width: '15vh' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter by:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Smaller than LT</MenuItem>
          <MenuItem value={20}>Are in Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicFilter;
