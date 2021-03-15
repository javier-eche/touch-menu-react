/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Icon from "../UI/Icon";
import Logo from "../UI/Logo";
import { useContext } from 'react';
import { UserContext } from './../../assets/contexts/contexts';

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border: 1px solid #D9310C;
`;

const Header = () => {
  const { changueStatusResume } = useContext(UserContext);
  return (
    <ContainerHeader>
      <Icon onClick={() => console.log("")} type="menu" fill="#D9310C" size={50} />
      <Logo size={"small"}/>
      <Icon onClick={changueStatusResume} type="notiOff" fill="#D9310C" size={50} />
    </ContainerHeader>
  );
}

export default Header;