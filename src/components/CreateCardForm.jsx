import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//Utilities
import { isEmptyOrSpaces, setLocalStorage, userCard } from "./utilities";

export const CreateCardForm = ({
  setUserInput,
  userInput,
  tags,
  setTags,
  savedStories,
  setSavedStories,
}) => {
  const { register, handleSubmit } = useForm();

  const handleChange = (data) => {
    console.log(userInput[data.target.id]);
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
    if (userInput[key].includes(value)) {
      console.log(`${key} must be unique`);
      return;
    }

    setUserInput((prevState) => {
      return {
        ...prevState,
        [key]: [...prevState[key], value],
      };
    });
    e.currentTarget.parentNode.childNodes[1].value = "";
    if (key === "tag" && !tags.includes(value)) {
      setTags([...tags, value]);
    }
  };
  const onSubmit = () => {
    const card = userCard(userInput);
    setSavedStories([...savedStories, card]);
    setUserInput({
      title: "Title",
      description: "Description",
      author: [],
      tag: [],
    });
  };
  useEffect(() => {
    setLocalStorage(savedStories, "Stories");
    console.log("i went off");
  }, [savedStories]);
  useEffect(() => {
    setLocalStorage(tags, "Tags");
    console.log("i went off");
  }, [tags]);
  return (
    <React.Fragment>
      <form className="form-create">
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
          <input id="tag" name="tag" list="tags" type="text" ref={register} />
          <datalist id="tags">
            <option value="world">World</option>
            {tags.map((tag) => (
              <option value={tag}>{tag}</option>
            ))}
          </datalist>
          <button className="add-btn" onClick={handleAdd}>
            <p>+</p>
          </button>
        </div>
      </form>
      <button className="create" onClick={handleSubmit(onSubmit)}>
        Add Card
      </button>
    </React.Fragment>
  );
};
