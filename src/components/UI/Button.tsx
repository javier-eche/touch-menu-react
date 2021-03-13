/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";

interface Props {
  children: string;
  type:any;
}

const StyledButton = styled.button<Props>`
display: flex;
justify-content: center;
align-items: center;
padding: 8px 16px;
height: 70px;
background: #2D9CDB;
box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
border-radius: 15px;
font-family: Source Code Pro;
font-style: normal;
font-weight: bold;
font-size: 30px;
color: #FFFFFF;
border: none;
outline: none;
cursor:pointer;
&:hover{
    background: #2db2db;
}`;


const Button: React.FC<Props> = ({ children, type }) => {
  return (
    <StyledButton type={type}>{children}</StyledButton>
  )
}

export default Button;