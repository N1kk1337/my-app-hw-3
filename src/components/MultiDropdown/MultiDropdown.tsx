import { useState } from "react";

import classes from "./MultiDropdown.module.scss";

/** Вариант для выбора в фильтре */
export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, массив может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
  pluralizeOptions: (value: Option[]) => string;
};
//options, value, onChange, disabled, pluralizeOptions, ...
export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  onChange,
  disabled,
  pluralizeOptions,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.dataset.key;
    const optionByKey = options.find((option) => option.key === key) as Option;
    const optionIndexInList = value.findIndex((option) => option.key === key);
    let valueStateUpdated;
    if (optionIndexInList !== -1) {
      valueStateUpdated = value.filter((option) => option.key !== key);
    } else {
      valueStateUpdated = [...value, optionByKey];
    }

    return valueStateUpdated;
  };

  return (
    <div className={classes.dropdown}>
      <button
        className={classes.input_btn}
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
      >
        {pluralizeOptions(value) || ""}
      </button>
      {isOpen &&
        !disabled &&
        options.map((option) => (
          <label key={option.key}>
            <input
              type="checkbox"
              className="invisible"
              data-key={option.key}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const valueUpdated = updateValue(e);
                onChange(valueUpdated);
              }}
            />
            {option.value}
          </label>
        ))}
    </div>
  );
};
