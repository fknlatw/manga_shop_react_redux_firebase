import { ReactNode } from "react";
import "./Button.scss";

interface Props {
    children: string | ReactNode,
    classValue?: string,
    onClickFunction?: () => void
  }


const Button = ({children, classValue, onClickFunction}: Props) => {
  return (
    <button 
      className={classValue}
      onClick={onClickFunction}
    >
      {children}
    </button>
  )
}

export default Button