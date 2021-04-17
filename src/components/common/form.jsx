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
      {options.length > 0
        ? options.map((option) => (
            <option value={option} key={uuid()}>
              {option}
            </option>
          ))
        : ""}
    </select>
  </div>
);

export const TextAreaComponent = ({
  className,
  id,
  label,
  register,
  error,
}) => {
  const increaseHeight = (e) => {
    e.target.style.height = "auto";
    const newHeight = e.target.scrollHeight > 34 ? e.target.scrollHeight : 34;
    e.target.style.height = newHeight.toString() + "px";
  };
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <textarea
        onKeyUp={(e) => {
          increaseHeight(e);
        }}
        id={id}
        name={id}
        ref={register}
      ></textarea>
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

export const InputSelectComponent = ({
  className,
  id,
  listId,
  label,
  options,
  register,
  error,
}) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} list={listId} ref={register} type="text"></input>
      <datalist id={listId}>
        {options.map((option) => (
          <option key={uuid()} value={option}>
            {option}
          </option>
        ))}
      </datalist>
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

export const FieldArrayComponent = ({
  className,
  options,
  id,
  array,
  label,
  register,
}) => (
  <div className={className}>
    <label htmlFor={id}>{label}</label>
    <select name={id} id={id} ref={register}>
      {options.length > 0
        ? options.map((option, index) => {
            console.log(options, option);
            return (
              <option
                key={option.id}
                name={`${array}[${index}].value`}
                ref={register()}
                defaultValue={option.value}
              >
                {option.value}
              </option>
            );
          })
        : ""}
    </select>
  </div>
);
