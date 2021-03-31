import React from "react";
import { useForm } from "react-hook-form";

//Utilities
import { isEmptyOrSpaces } from "./utilities";

export const CreateCardForm = ({ setUserInput }) => {
  const { register, handleSubmit } = useForm();

  const handleChange = (data) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [data.target.id]: isEmptyOrSpaces(data.target.value)
          ? data.target.id
          : data.target.value,
      };
    });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const key = e.currentTarget.parentNode.childNodes[1].id;
    const value = e.currentTarget.parentNode.childNodes[1].value;

    setUserInput((prevState) => {
      console.log(prevState);
      return {
        ...prevState,
        [key]: [...prevState[key], value],
      };
    });
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="form-create" onSubmit={handleSubmit(onSubmit)}>
      <div className="input">
        <label for="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          ref={register}
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <label for="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          ref={register}
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <label for="url">Url</label>
        <input
          id="url"
          name="url"
          type="text"
          ref={register}
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <label for="author">Author</label>
        <input id="author" name="author" type="text" ref={register} />
        <button className="add-btn" onClick={handleAdd}>
          <p>+</p>
        </button>
      </div>
      <div className="input">
        <label for="tag">Tag</label>
        <input id="tag" name="tag" type="text" ref={register} />
        <button className="add-btn" onClick={handleAdd}>
          <p>+</p>
        </button>
      </div>
      <button type="submit">Add Card</button>
    </form>
  );
};
