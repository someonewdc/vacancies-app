import React from 'react';
import { Header } from './components/Header';
import { ContentWrapper } from './components/ContentWrapper';

function App() {
  return (
    <div className="App">
      <Header>
        <div className="container">
        </div>
      </Header>
      <ContentWrapper />
    </div>
  );
}

export default App;
