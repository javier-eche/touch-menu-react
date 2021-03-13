import styled from "@emotion/styled";

interface Props{
    type: string;
}


const StyledInput = styled.input<Props>`
  width: 500px;
  height: 70px;
  padding: 4px 8px;
  background: white;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  border: 1px solid transparent;
  transition: border 200ms;
  &:focus{
    outline:none;
    border: 1px solid #2d9cdb;
  }
`;

const Input: React.FC<Props> = ({type}) => {
  return (
    <StyledInput type={type}/>
  )
}
export default Input;