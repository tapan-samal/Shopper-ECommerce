import React from 'react';
import Main from '../Components/Main/Main';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollection from '../Components/NewCollection/NewCollection';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
  return (
    <>
        <Main />
        <Popular />
        <Offers/>
        <NewCollection />
        <NewsLetter />
    </>
  );
};

export default Shop;