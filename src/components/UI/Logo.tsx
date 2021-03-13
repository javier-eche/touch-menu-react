import styled from '@emotion/styled';
import urlLogo from './../../assets/images/flame-logo.png'

const sizes: any = {
  "small" : {width: "40px", height:"40px "},
  "default": {width: "120px", height:"120px "},
}


interface Props{
  size: string;
}

const StyleLogo = styled.div<Props>`
  width: ${(props) => sizes[props.size] ? sizes[props.size].width : sizes.default.width};
  height: ${(props) => sizes[props.size] ? sizes[props.size].height : sizes.default.height};
  border-radius: 50%;
  background-image: url(${urlLogo});
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

const Logo: React.FC<Props> = ({size}) => {
  return <StyleLogo size={size}></StyleLogo>
}
  
export default Logo;