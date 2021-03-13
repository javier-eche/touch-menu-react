/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Logo from "../components/UI/Logo";

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  margin-top: 25%;
  gap: 20px
`;

const Login = () => {
  return (
    <ContainerLogin>
      <Logo size={"default"}/>
      <Input type={"text"}/>
      <Input type={"password"}/>
      <Button>Iniciar Sesión</Button>
    </ContainerLogin>
  );
}

export default Login;