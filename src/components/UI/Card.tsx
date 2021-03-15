/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";
import Icon from "./Icon";
import { useContext } from 'react';
import { UserContext } from './../../assets/contexts/contexts';

const StyledCard = styled.div<PropStyle>`
  width: 360px;
  height: 100%;
  border-radius: 15px;
  border: 1px solid #000;
  display: flex;
  & .card-image{
    width: 150px;
    height: 140px;
    border-radius: 15px 0px 0px 15px;
    background-image: url(${(props) => (props.src)});
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
  }
  & .card-checked{
    display: ${(props) => !props.status ? "none" : "flex"};
  }
`;

interface Props{
  product: any;
}

interface PropStyle{
  src: string;
  status: any;
}

const Card: React.FC<Props> = ({product}) => {

  const { currentOrder, setCurrentOrder } = useContext(UserContext);
  const [statusChecked, setStatusChecked] = useState(false);


  const changeChecked = () => {
    setStatusChecked(!statusChecked);
    setCurrentOrder([...currentOrder, product])
  }

  return (
    <StyledCard src={product.image} status={statusChecked}>
      <div onClick={changeChecked} className="card-image"></div>
      <p>{product.name}</p>
      <div className="card-checked">
        <Icon onClick={() => console.log("")} type="checked" fill="#D9310C" size={20} />
      </div>
    </StyledCard>
  );
}

export default Card;