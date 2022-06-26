import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Footer from './components/Footer.js'
import Nav from './components/Nav.js'
import Header from './components/Header.js'
import HomePage from './components/HomePage.js'
import ExamPage from './components/ExamPage.js'
import LearnPage from './components/LearnPage.js'
import EditPage from './components/EditPage.js'
import Container from '@mui/material/Container';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Router>
      <Container maxWidth="100%" style={{ padding: 0}}>
        <Header/>
        <Nav/>
            <Routes>
              <Route path="/learn" element={<LearnPage text="Tryb nauki"/>}></Route>
              <Route path="/exam" element={<ExamPage text="Tryb egzaminu"/>}></Route>
              <Route path="/edit" element={<EditPage text="Tryb edycji pytan"/>}></Route>
              <Route path="/" element={<HomePage text="Strona glowna"/>}></Route>
            </Routes>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;
