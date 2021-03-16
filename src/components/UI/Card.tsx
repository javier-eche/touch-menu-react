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
    justify-content: space-between;
  }
  & .card-unchecked{
    display: ${(props) => !props.status ? "flex" : "none"};
    justify-content: flex-end;
  }
  & .card-count{
    display: flex;
    align-items: center;
    gap: 5px;
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

  const { currentOrder, setCurrentOrder, changueStatusResume } = useContext(UserContext);
  const [statusChecked, setStatusChecked] = useState(false);
  const [countProduct, setCountProduct] = useState(1)


  function changeChecked(){
    setStatusChecked(!statusChecked);
    changueStatusResume();
    setCurrentOrder([...currentOrder, product])
  }

  const incrementCount = () =>{
    setCountProduct(countProduct + 1)
    setCurrentOrder([...currentOrder, product])
  }

  const decrementCount = () =>{
    if(countProduct > 1)setCountProduct(countProduct - 1)
  }

  return (
    <StyledCard src={product.image} status={statusChecked}>
      <div onClick={changeChecked} className="card-image"></div>
      <div className="card-info">
        <p>{product.name}</p>
        <p>{product.type_product}</p>
        <p>S./ {product.price}</p>
        <div className="card-checked">
          <div className="card-count">
            <Icon onClick={decrementCount} type="minus" fill={colors.secondary} size={30} />
            <p>{countProduct}</p>
            <Icon onClick={incrementCount} type="plus" fill={colors.secondary} size={30} />
          </div>
          <Icon onClick={undefined} type="checked" fill={colors.secondary} size={30} />
        </div>
        <div className="card-unchecked">
          <Icon onClick={undefined} type="unchecked" fill={colors.secondary} size={30} />
        </div>      
      </div>

    </StyledCard>
  );
}

export default Card;