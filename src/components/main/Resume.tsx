import React from 'react';
import styled from "@emotion/styled";
import Logo from "../UI/Logo";
import { useContext } from 'react';
import { UserContext } from './../../assets/contexts/contexts';


interface StyledProps{
  display: string;
}

const ContainerResume = styled.div<StyledProps>`
  width: 100%;
  height: 300px;
  border: 1px solid #D9310C;
  position: fixed;
  bottom: 0;
  display: ${(props) => props.display === "false"? "none" : "flex"}
`;

const Resume = () => {
  const { statusResume } = useContext(UserContext);
  return (
    <ContainerResume display={statusResume.toString()} >
      <Logo size={"small"}/>
    </ContainerResume>
  );
}

export default Resume;