import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContext from 'context/main-context';
import MainPage from './pages/main-page';

const App: React.FC = () => (
  <MainContext.Provider value={undefined}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </MainContext.Provider>
  );
export default App;
