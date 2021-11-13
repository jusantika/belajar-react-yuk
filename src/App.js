import React from 'react';
import Header from './Components/Header';
import { OuterLayout } from './styles/Layouts';

export default function App() {
  return (
    <div className="App">
      <OuterLayout>
        <Header />
      </OuterLayout>
    </div>
  );
}
