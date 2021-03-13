/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";

const StyledButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 8px 16px;
height: 36px;
background: #2D9CDB;
box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
border-radius: 4px;
font-family: Source Code Pro;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
border: none;
outline: none;
cursor:pointer;
&:hover{
    background: #2db2db;
}`;

interface Props{
    children: string;
}

const Button: React.FC<Props> =({children}) => {
   return (
      <StyledButton>{children}</StyledButton>
    )
}

export default Button;