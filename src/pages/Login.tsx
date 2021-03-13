/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Logo from "../components/UI/Logo";

const ContainerLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  margin-top: 20%;
  gap: 20px
`;

const handleSubmit = (e:React.FormEvent) => {
  e.preventDefault();
  console.log("oli")
}

const Login = () => {
  return (
    <ContainerLogin onSubmit={handleSubmit}>
      <Logo size={"default"}/>
      <Input type={"text"}/>
      <Input type={"password"}/>
      <Button type={"submit"}>Iniciar Sesión</Button>
    </ContainerLogin>
  );
}

export default Login;