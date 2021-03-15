import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from "../components/main/Header";
import Button from '../components/UI/Button';
import Swal from 'sweetalert2'
import { UserContext } from '../assets/contexts/contexts';

let history;

const MainMenu = () => {
  const { setCurrentClient } = useContext(UserContext);
  history = useHistory();

  const goToHome = () => {
    Swal.fire({
      icon: 'question',
      title: 'Client Name',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Accept',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        if(login){
          setCurrentClient(login);
          history.push("/home")
        }

      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  };

  return (
    <>
      <Header />
      <Button size={"large"} onClick={goToHome}>New Order</Button>
    </>
  );
}

export default MainMenu;