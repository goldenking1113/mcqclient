import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Status from './Status';
import Buttons from './Buttons';
import Render from './Render';

function App() {

  return (
    <>
      <Status />
      <Buttons />
      <Render/>
    </>
  );
}

export default App;