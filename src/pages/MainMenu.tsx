import React from 'react';
import Header from "../components/main/Header";
import Button from '../components/UI/Button';

const MainMenu = () => {

  return (
    <>
      <Header />
      <Button size={"large"} onClick={undefined}>New Order</Button>
    </>
  );
}

export default MainMenu;