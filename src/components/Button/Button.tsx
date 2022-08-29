import React from "react";

import classNames from "classnames";

import { Loader } from "../Loader";

/** Возможные раскраски кнопки */
export enum ButtonColor {
  /** Основная, акцентная кнопка */
  primary = "primary",
  /** Второстепенная кнопка */
  secondary = "secondary",
}

/** Пропсы, который принимает компонент Button */
export type ButtonProps = React.PropsWithChildren<{
  //onClick?: (e: React.MouseEvent) => void;
  /**
   * Если true, то внутри кнопки вместе с children отображается компонент Loader
   * Также кнопка должна переходить в состояние disabled
   * По умолчанию - false
   */
  loading?: boolean;
  /** Цвет кнопки, по умолчанию -  ButtonColor.primary*/
  color?: ButtonColor;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  color = ButtonColor.primary,
  loading = false,
  ...props
}) => {
  let clNames: string = classNames(
    "button",
    `button_color-${color}`,
    { button_disabled: loading || props.disabled },
    props.className
  );

  return (
    <button disabled={loading} {...props} className={clNames}>
      {loading && <Loader />}
      {props.children}
    </button>
  );
};

//export default Button;
