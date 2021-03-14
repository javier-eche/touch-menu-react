import React, { useEffect, useState } from 'react';
import Header from "../components/main/Header";
import Axios from 'axios';
import { UserContext } from './../assets/contexts/contexts';

const Home = () => {

  const token = "8e6ec09ea003ae1decb5555da023e76325a7d3b2";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const { data } = await Axios({
        method: 'get',
        url: "http://localhost:8000/api/v1/products/",
        headers: {
          'Authorization': `Token ${token}`,
        },
      });
      setProducts(data);
    };
    fetchData();
  }, []);
  
  return (
    <UserContext.Provider value={{ products }} >
      <Header />
    </UserContext.Provider>
  );
}

export default Home;