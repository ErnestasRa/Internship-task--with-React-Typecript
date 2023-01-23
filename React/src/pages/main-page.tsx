import * as React from 'react';
import { Container, Paper } from '@mui/material';
import get from 'functions/http';
import BasicTable from 'components/table-component';
import BasicSelect from 'components/select-component';

const MainPage: React.FC = () => {
  const { REACT_APP_API_URL } = process.env;
  const [countryData, setCountryData] = React.useState<CountryType[]>([]);
  const [selectedValue, setSelectedValue] = React.useState('a-z');
  const [sortedCities, setSortedCities] = React.useState<CountryType[]>([]);

  const fetchAPIData = async () => {
    const res = await get(REACT_APP_API_URL);
    if (res !== undefined) setCountryData(res);
    else throw new Error('no cities found');
  };

  const sortCitiesAlphabetically = () => {
    const sortCitiesFunction = countryData.reverse();
    setSortedCities(sortCitiesFunction);
  };

  React.useEffect(() => {
    fetchAPIData();
    sortCitiesAlphabetically();
  }, []);

  return (
    <Container>
      <Paper>
        <BasicSelect selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
        <BasicTable countryData={selectedValue === 'a-z' ? countryData : sortedCities} />
      </Paper>
    </Container>
  );
};
export default MainPage;
