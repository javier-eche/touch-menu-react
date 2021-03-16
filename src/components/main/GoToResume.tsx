import React from 'react';
import styled from "@emotion/styled";
import { useContext } from 'react';
import { UserContext } from '../../assets/contexts/contexts';
import Button from '../UI/Button';
import { useHistory } from 'react-router-dom';

let history;

interface StyledProps{
  display: string;
}

const ContainerResume = styled.div<StyledProps>`
  width: 100%;
  height: 120px;
  border: 1px solid #D9310C;
  position: fixed;
  bottom: 0;
  display: ${(props) => props.display === "false"? "none" : "flex"}
`;

const GoToResume = () => {
  const { statusResume } = useContext(UserContext);
  history = useHistory();

  const goToResume = () => history.push("/resume");

  return (
    <ContainerResume display={statusResume.toString()} >
      <Button size={"maximun"} onClick={goToResume}>Finish</Button>
    </ContainerResume>
  );
}

export default GoToResume;