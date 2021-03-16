import React, { useContext } from 'react';
import styled from "@emotion/styled";
import { useHistory } from 'react-router-dom';
import Header from "../components/main/Header";
import Button from '../components/UI/Button';
import Swal from 'sweetalert2'
import { UserContext } from '../assets/contexts/contexts';

let history;

const StyledMainMenu = styled.div`
& .mainmenu-options{
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
`;

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
    <StyledMainMenu>
      <Header />
      <div className="mainmenu-options">
        <Button size={"large"} onClick={goToHome}>Nueva Orden</Button>
        <Button size={"large"} onClick={undefined}>Ordenes Pendientes</Button>
        <Button size={"large"} onClick={undefined}>Historial</Button>
      </div>
    </StyledMainMenu>
  );
}

export default MainMenu;