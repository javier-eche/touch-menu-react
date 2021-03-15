import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "./../../assets/Ui";
const sizes:any = {
  maximun: {width:"100%", height:"100%", fontSize:"60px", fontWeight:"700"},
  large: {width:"200px", height:"50px", fontSize:"20px", fontWeight:"700"},
  standar: {width:"150", height:"45px", fontSize:"20px", fontWeight:"700"},
  small: {width:"100px", height:"40px", fontSize:"20px", fontWeight:"700"},
};
const StyledButton = styled.button<StyledProps>(
  (props) => css`
    width: ${sizes[props.size] ? sizes[props.size].width : sizes.standar.width};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid transparent;
    font-size: ${sizes[props.size] ? sizes[props.size].fontSize: sizes.standar.fontSize};
    font-weight: ${sizes[props.size] ? sizes[props.size].fontWeight: sizes.standar.fontWeight};
    gap: 4px;
    background-color: ${colors.secondary};
    color: ${colors.white};
    cursor: pointer;
    &:hover {
      background: ${colors.primary};
      color: ${colors.secondary};
    }
    &:active {
      background: ${colors.primary};
    }
    &:focus {
      outline: none;
    }
    &:disabled {
      background-color: transparent; 
      border: 1px solid ${colors.gray5};
      color: ${colors.gray5};
    }
    transition: all 300ms;
  `
);
interface StyledProps{
  size: string;
}
interface Props{
  size: string;
  onClick: any;
}
const Button: React.FC<Props> = ({ children, size = "medium", onClick}) => {
  return (
    <StyledButton size={size} onClick={onClick} >
      {children}
    </StyledButton>
  );
}
export default Button;