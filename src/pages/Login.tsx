/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Logo from "../components/UI/Logo";

const ContainerLogin = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  & .form-logo{
    padding-bottom: 150px;
  }

  & .form-login{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

let history;

const handleSubmit = (e:React.FormEvent) => {
  e.preventDefault();
  const fetchData = async() => {
    const { data } = await Axios({
      method: 'post',
      url: "https://touchmenuscreen.herokuapp.com/api_generate_token/",
      headers: {},
      data:{
        username: 'admin',
        password: 'admin2021@',
      }
    });
    sessionStorage.setItem('token', data.token);
    history.push("/mainmenu");
  };
  fetchData();
}

const Login = () => {
  
  history = useHistory();

  return (
    <ContainerLogin onSubmit={handleSubmit}>
      <div className="form-logo">
        <Logo size={"default"}/>
      </div>
      <div className="form-login">
        <Input type={"text"}/>
        <Input type={"password"}/>
        <Button size={"large"} onClick={undefined}>Iniciar Sesión</Button>
      </div>
    </ContainerLogin>
  );
}

export default Login;