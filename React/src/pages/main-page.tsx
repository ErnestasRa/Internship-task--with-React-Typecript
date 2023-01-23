import * as React from 'react';
import { Container, Paper, Box } from '@mui/material';
import get from 'functions/http';

const MainPage: React.FC = () => {
  const { REACT_APP_API_ADDRESS } = process.env;
  const [countryData, setCountryData] = React.useState<string[]>([]);

  const fetchAPIData = async () => {
    const res = await get(REACT_APP_API_ADDRESS);
    setCountryData(res);
  };

  React.useEffect(() => {
    fetchAPIData();
  }, []);

  return (
    <Container>
      <Paper>
        <Box>MainPage</Box>
      </Paper>
    </Container>
  );
};
export default MainPage;
