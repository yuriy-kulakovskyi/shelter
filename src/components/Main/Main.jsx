import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      {/* Container */}
      <div className="main__container container">
        {/* Header */}
        <Header />

        {/* Home section */}
        <Home />
      </div>
    </main>
  );
}

export default Main;
