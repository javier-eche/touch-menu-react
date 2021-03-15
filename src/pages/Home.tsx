import React, { useEffect, useState } from 'react';
import Header from "../components/main/Header";
import Axios from 'axios';
import ContainerCards from '../components/main/ContainerCards';

const Home = () => {

  const token = "55e9c69d315d44bf61e7763a72a9eb5c85b4dcad";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const { data } = await Axios({
        method: 'get',
        url: "https://touchmenuscreen.herokuapp.com/api/v1/products/",
        headers: {
          'Authorization': `Token ${token}`,
        },
      });
      setProducts(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async() => {
      const { data } = await Axios({
        method: 'get',
        url: "https://touchmenuscreen.herokuapp.com/api/v1/orders/",
        headers: {
          'Authorization': `Token ${token}`,
        },
      });
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <ContainerCards allProducts={products}/>
    </>
  );
}

export default Home;