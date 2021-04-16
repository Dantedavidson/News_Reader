import React from "react";
import uuid from "react-uuid";

export const InputComponent = ({
  children,
  className,
  id,
  error,
  label,
  register,
  ...inputProps
}) => (
  <div className={className}>
    <label htmlFor={id}>{label}</label>
    <input ref={register} id={id} {...inputProps}></input>
    {children}
    {error && <p className="error">{error.message}</p>}
  </div>
);

export const SelectComponent = ({
  className,
  options,
  id,
  label,
  register,
}) => (
  <div className={className}>
    <label htmlFor={id}>{label}</label>
    <select name={id} id={id} ref={register}>
      {options.map((option) => (
        <option value={option} key={uuid()}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
