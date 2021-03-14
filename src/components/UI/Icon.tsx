/** @jsxImportSource @emotion/react */
import { TiThMenu } from 'react-icons/ti';
import { MdNotificationsActive, MdNotificationsNone } from 'react-icons/md';
import { css } from "@emotion/react";
import { IconType } from 'react-icons';

const iconSet:any = {
  menu: TiThMenu,
  notiOn: MdNotificationsActive,
  notiOff: MdNotificationsNone,
};

interface Props{
  type: string;
  size: number;
  fill: string;
}

const Icon: React.FC<Props> = ({type, fill, size}) => {
  const IconComponent:IconType = iconSet[type];
  return(
    <IconComponent
      css={css`
      fill:${fill};
      font-size:${size}px;
      `}
    />
  )
}

export default Icon;