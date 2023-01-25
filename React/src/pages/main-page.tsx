import * as React from 'react';
import { Container, Paper, Box } from '@mui/material';
import BasicSelect from 'components/select-component';
import BasicFilter from 'components/filter-component';
import TableWithPagination from 'components/table-component';
import get from 'functions/http';

const MainPage: React.FC = () => {
  const { REACT_APP_API_URL } = process.env;
  const AREA_OF_LITHUANIA: number = 65300;
  const [countryData, setCountryData] = React.useState<CountryType[]>([]);
  const [sortedCities, setSortedCities] = React.useState<CountryType[]>([]);
  const [selectedValue, setSelectedValue] = React.useState<string>('a-z');
  const [filteredCitiesByArea, setFilteredCitiesByArea] = React.useState<CountryType[]>([]);
  const [filteredByOceania, setFilteredByOceania] = React.useState<CountryType[]>([]);
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
      .filter((city) => city.area < AREA_OF_LITHUANIA)
      .sort((a, b) => b.area - a.area);
    setFilteredCitiesByArea(filteredCitiesFunction);
  };

  const filterAreaInOceania = () => {
    const filteredOceaniaRegion = [...countryData].filter((city) => city.region.includes('Oceania'));
    setFilteredByOceania(filteredOceaniaRegion);
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
            filterCitiesByArea={() => [filterCitiesByArea(), filterAreaInOceania()]}
          />
        </Box>
        {(() => {
          if (selectedValue === 'z-a') {
            return <TableWithPagination countryData={sortedCities} />;
          }
          if (selectedFilterValue === '10') {
            return <TableWithPagination countryData={filteredCitiesByArea} />;
          }
          if (selectedFilterValue === '20') {
            return <TableWithPagination countryData={filteredByOceania} />;
          }
          return <TableWithPagination countryData={countryData} />;
        })()}
      </Paper>
    </Container>
  );
};
export default MainPage;
