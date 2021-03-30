import React from "react";
import { useForm } from "react-hook-form";

export const CreateCardForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {
    console.log("done");
  };
  return (
    <form className="form-create" onSubmit={handleSubmit(onSubmit)}>
      <div className="input">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref={register} />
      </div>
      <div className="input">
        <label for="desc">Description</label>
        <input id="desc" name="desc" type="text" ref={register} />
      </div>
      <div className="input">
        <label for="url">Url</label>
        <input id="url" name="url" type="text" ref={register} />
      </div>
      <div className="input">
        <label for="author">Author</label>
        <input id="author" name="author" type="text" ref={register} />
        <button className="add-btn">
          <p>+</p>
        </button>
      </div>
      <div className="input">
        <label for="tag">Tag</label>
        <input id="tag" name="tag" type="text" ref={register} />
        <button className="add-btn">
          <p>+</p>
        </button>
      </div>
      <button>Add Card</button>
    </form>
  );
};
