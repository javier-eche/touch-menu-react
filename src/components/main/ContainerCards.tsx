/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Card from "../UI/Card";

const GridCards = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

interface Props{
  allProducts: any;
}

const ContainerCards: React.FC<Props> = ({ allProducts }) => {
  return (
    <GridCards>
      {allProducts.map( (product:any) => {
        return <Card key={product.id} product={product} />
      })}
    </GridCards>
  );
}

export default ContainerCards;