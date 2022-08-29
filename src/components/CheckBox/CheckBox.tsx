/** Пропсы, которые принимает компонент CheckBox */
export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  onChange,
  checked,
  disabled,
  ...props
}) => {
  return (
    <input
      id={id}
      {...props}
      type="checkbox"
      onChange={(event) => onChange(event.target.checked)}
      disabled={disabled}
      checked={checked}
    />
  );
};

//export default CheckBox;
