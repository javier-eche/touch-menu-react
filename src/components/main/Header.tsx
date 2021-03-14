/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Icon from "../UI/Icon";
import Logo from "../UI/Logo";

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

const Header = () => {
  return (
    <ContainerHeader>
      <Icon type="menu" fill="#D9310C" size={50} />
      <Logo size={"small"}/>
      <Icon type="notiOff" fill="#D9310C" size={50} />
    </ContainerHeader>
  );
}

export default Header;