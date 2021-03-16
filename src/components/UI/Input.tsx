import styled from "@emotion/styled";
import { colors } from './../../assets/Ui';

interface Props{
    type: string;
}


const StyledInput = styled.input<Props>`
  width: 500px;
  height: 70px;
  padding: 4px 8px;
  background: white;
  border-radius: 8px;
  border: 1px solid ${colors.secondary};
  font-weight: normal;
  font-size: 35px;
  text-align: center;
  transition: border 200ms;
  &:focus{
    outline:none;
    border: 1px solid ${colors.secondary};
  }
`;

const Input: React.FC<Props> = ({type}) => {
  return (
    <StyledInput type={type}/>
  )
}
export default Input;