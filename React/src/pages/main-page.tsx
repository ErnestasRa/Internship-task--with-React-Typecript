import * as React from 'react';
import { Container, Paper, Box } from '@mui/material';
import get from 'functions/http';
import BasicTable from 'components/table-component';
import BasicSelect from 'components/select-component';
import BasicFilter from 'components/filter-component';

const MainPage: React.FC = () => {
  const { REACT_APP_API_URL } = process.env;
  const [countryData, setCountryData] = React.useState<CountryType[]>([]);
  const [sortedCities, setSortedCities] = React.useState<CountryType[]>([]);
  const [selectedValue, setSelectedValue] = React.useState<string>('a-z');

  const fetchAPIData = async () => {
    const res = await get(REACT_APP_API_URL);
    if (res !== undefined) setCountryData(res);
    else throw new Error('no cities found');
  };

  const sortCitiesAlphabetically = () => {
    const sortCitiesFunction = [...countryData].sort((a, b) => {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
    setSortedCities(sortCitiesFunction);
  };

  React.useEffect(() => {
    fetchAPIData();
  }, []);

  return (
    <Container sx={{ mt: '3vh' }}>
      <Paper>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <BasicSelect
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            sortCitiesAlphabetically={() => sortCitiesAlphabetically()}
          />
          <BasicFilter />
        </Box>
        <BasicTable countryData={selectedValue === 'a-z' ? countryData : sortedCities} />
      </Paper>
    </Container>
  );
};
export default MainPage;
