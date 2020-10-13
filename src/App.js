import React from 'react';
import './style.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Features/>
      <Footer/>
      {/*<Calendar/>*/}
    </>
  );
}

export default App;
