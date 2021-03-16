/** @jsxImportSource @emotion/react */
import { TiThMenu } from 'react-icons/ti';
import { RiCheckboxCircleFill, RiCheckboxCircleLine } from 'react-icons/ri';
import { MdNotificationsActive, MdNotificationsNone } from 'react-icons/md';
import { TiPlusOutline, TiMinusOutline } from 'react-icons/ti';
import { FaTrashAlt } from 'react-icons/fa'
import { css } from "@emotion/react";
import { IconType } from 'react-icons';

const iconSet:any = {
  menu: TiThMenu,
  notiOn: MdNotificationsActive,
  notiOff: MdNotificationsNone,
  checked: RiCheckboxCircleFill,
  unchecked: RiCheckboxCircleLine,
  plus: TiPlusOutline,
  minus: TiMinusOutline,
  trash: FaTrashAlt,
};

interface Props{
  onClick: any;
  type: string;
  size: number;
  fill: string;
}

const Icon: React.FC<Props> = ({onClick, type, fill, size}) => {
  const IconComponent:IconType = iconSet[type];
  return(
    <IconComponent
      css={css`
      fill:${fill};
      font-size:${size}px;
      `}
      onClick={onClick}
    />
  )
}

export default Icon;