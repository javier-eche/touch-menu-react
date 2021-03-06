import React, { useContext } from 'react';
import styled from "@emotion/styled";
import { useHistory } from 'react-router-dom';
import Header from "../components/main/Header";
import { UserContext } from '../assets/contexts/contexts';
import Button from '../components/UI/Button';
import { ContentLarge } from '../components/UI/Content';
import Icon from '../components/UI/Icon';
import { colors } from './../assets/Ui';

let history;

const StyledResume = styled.div`
& .resume-list{
  width: 100%;
  border: 1px solid #D9310C;
  position: fixed;
  bottom: 0;
}
& .resume-item{
  width: 80%;
  display: flex;
  border: 1px solid #D9310C;
  border-radius: 8px;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
}
& .resume-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
}
& .resume-item-name{
  width: 45%;
}
& .resume-item-price{
  width: 25%;
}
& .resume-item-trash{
  width: 10px;
}
`;

const NewOrder = () => {
  const { currentOrder } = useContext(UserContext);
  history = useHistory();
  const goToMain = () => history.push("/mainmenu");
  return (
    <StyledResume>
      <Header />
      <div className="resume-container">
        {/* <div className="resume-item">
          <div className ="resume-item-name"><ContentLarge>Producto</ContentLarge></div>
          <div className ="resume-item-price"><ContentLarge>Precio</ContentLarge></div>
          <div className ="resume-item-price"><ContentLarge>Eliminar</ContentLarge></div>
        </div> */}
        {currentOrder.map( (order:any) => {
          return (
            <div key={Date.now() + Math.random()} className="resume-item">
              <div className ="resume-item-name"><ContentLarge>{order.name}</ContentLarge></div>
              <div className ="resume-item-price"><ContentLarge>{order.price}</ContentLarge></div>
              <div className ="resume-item-trash"><Icon onClick={undefined} type="trash" fill={colors.secondary} size={30} /></div>              
            </div>
          );
        })}
      </div>
      <div className="resume-list">
        <Button size={"maximun"} onClick={goToMain}>A cocina</Button>
      </div>
    </StyledResume>
  );
}

export default NewOrder;