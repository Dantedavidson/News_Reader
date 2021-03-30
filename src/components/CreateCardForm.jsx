import React from "react";
import { useForm } from "react-hook-form";

//Utilities
import { isEmptyOrSpaces } from "./utilities";

export const CreateCardForm = ({ setUserInput }) => {
  const { register, handleSubmit } = useForm();
  // onChange={e => {
  //   const val = e.target.value;
  //   setMessage(prevState => {
  //     return { ...prevState, message: val }
  //   });
  // }}

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
        <input
          id="author"
          name="author"
          type="text"
          ref={register}
          onChange={handleChange}
        />
        <button className="add-btn">
          <p>+</p>
        </button>
      </div>
      <div className="input">
        <label for="tag">Tag</label>
        <input
          id="tag"
          name="tag"
          type="text"
          ref={register}
          onChange={handleChange}
        />
        <button className="add-btn">
          <p>+</p>
        </button>
      </div>
      <button type="submit">Add Card</button>
    </form>
  );
};
