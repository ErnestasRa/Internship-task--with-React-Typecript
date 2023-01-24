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
  const [filteredCitiesByArea, setFilteredCitiesByArea] = React.useState<CountryType[]>([]);
  const [selectedFilterValue, setSelectedFilterValue] = React.useState<string>('0');

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

  const filterCitiesByArea = () => {
    const filteredCitiesFunction = [...countryData]
      .filter((city) => city.area < 65300)
      .sort((a, b) => b.area - a.area);
    setFilteredCitiesByArea(filteredCitiesFunction);
  };

  React.useEffect(() => {
    fetchAPIData();
  }, []);

  return (
    <Container sx={{ mt: '3vh' }}>
      <Paper>
        <Box className="selectors">
          <BasicSelect
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            sortCitiesAlphabetically={() => sortCitiesAlphabetically()}
          />
          <BasicFilter
            selectedFilterValue={selectedFilterValue}
            setSelectedFilterValue={setSelectedFilterValue}
            filterCitiesByArea={() => filterCitiesByArea()}
          />
        </Box>
        {selectedValue === 'a-z' ?? <BasicTable countryData={countryData} />}
      </Paper>
    </Container>
  );
};
export default MainPage;
// finish doing conditional rendering
