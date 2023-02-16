import React from 'react';
import Button from '../Button/Button';
import dog from "./img/dog.png";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="home__left">
        <h1 className="home__left__title">
          Не лише люди <br /> потребують дім
        </h1>
        <p className="home__left__subtitle">
          На даний момент багато собак <br /> потребують евакувації з зони бойових <br /> дій. цим якраз займаємося ми Green Shelter.
        </p>

        <Button
          content="Знайти друга"
        />
      </div>
      <div className="home__right">
        <img 
          src={dog} 
          alt="Dog image" 
          className='home__right__image'
        />
      </div>
    </section>
  );
}

export default Home;
