/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

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
`;

interface Props{
  src: string;
  title:string;
}

interface PropStyle{
  src: string;
}

const Card: React.FC<Props> = ({src, title}) => {

  return (
    <StyledCard src={src}>
      <div className="card-image"></div>
      <p>{title}</p>
    </StyledCard>
  );
}

export default Card;