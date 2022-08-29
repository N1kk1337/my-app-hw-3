import classNames from "classnames";

/** Пропсы, которые принимает компонент Input */
export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({ onChange, ...props }) => {
  let clNames: string = classNames(
    { input_disabled: props.disabled },
    props.className
  );
  return (
    <div>
      <input
        type="text"
        {...props}
        className={clNames}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

//export default Input;
