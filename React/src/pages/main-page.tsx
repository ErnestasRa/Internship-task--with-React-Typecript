import * as React from 'react';
import { Container, Paper } from '@mui/material';
import get from 'functions/http';
import BasicTable from 'components/table-component';

const MainPage: React.FC = () => {
  const { REACT_APP_API_URL } = process.env;
  const [countryData, setCountryData] = React.useState<CountryType[]>([]);

  const fetchAPIData = async () => {
    const res = await get(REACT_APP_API_URL);
    if (res !== undefined) setCountryData(res);
    else throw new Error('no cities found');
  };

  React.useEffect(() => {
    fetchAPIData();
  }, []);

  return (
    <Container>
      <Paper>
        <BasicTable countryData={countryData} />
      </Paper>
    </Container>
  );
};
export default MainPage;
