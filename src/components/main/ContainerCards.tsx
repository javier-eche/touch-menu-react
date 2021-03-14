/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Card from "../UI/Card";
import { useContext } from 'react';
import { UserContext } from './../../assets/contexts/contexts';

const GridCards = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const ContainerCards: React.FC = () => {
  const { products } = useContext(UserContext);
  return (
    <GridCards>
      {products.map( (product:any) => {
        console.log(product)
        return <Card key={product.id} src={product.image} title={product.name} />
      })}
    </GridCards>
  );
}

export default ContainerCards;