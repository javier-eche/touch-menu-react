/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";
import Icon from "./Icon";
import { useContext } from 'react';
import { UserContext } from './../../assets/contexts/contexts';
import { colors } from './../../assets/Ui';

const StyledCard = styled.div<PropStyle>`
  width: 360px;
  height: 100%;
  border-radius: 15px;
  border: 1px solid ${colors.secondary};
  display: flex;
  & .card-image{
    width: 150px;
    height: 140px;
    border-radius: 15px 0px 0px 15px;
    background-image: url(${(props) => (props.src)});
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 150px 140px;
  }
  & .card-info{
    width: 210px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
  }
  & .card-checked{
    display: ${(props) => !props.status ? "none" : "flex"};
    justify-content: flex-end;
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


  function changeChecked(){
    setStatusChecked(!statusChecked);
    setCurrentOrder([...currentOrder, product])
  }

  return (
    <StyledCard src={product.image} status={statusChecked}>
      <div onClick={changeChecked} className="card-image"></div>
      <div className="card-info">
        <p>{product.name}</p>
        <p>{product.type_product}</p>
        <p>S./ {product.price}</p>
        <div className="card-checked">
          <Icon onClick={() => console.log("")} type="checked" fill={colors.secondary} size={20} />
        </div>      
      </div>

    </StyledCard>
  );
}

export default Card;