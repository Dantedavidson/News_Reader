import React, { useEffect } from "react";

//Libraries
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//Utilities
import { isEmptyOrSpaces, setLocalStorage, userCard } from "./utilities";

//Schema
import { userCardSchema } from "./schema";
import uuid from "react-uuid";

export const CreateCardForm = ({
  setUserInput,
  userInput,
  tags,
  setTags,
  savedStories,
  setSavedStories,
}) => {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    getValues,
  } = useForm({
    resolver: yupResolver(userCardSchema),
    reValidateMode: "onChange",
  });
  // Takes data from input field and updates state on change.
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
  //Takes event. Sets errors for tag
  const handleTag = (e) => {
    if (userInput.tag.includes(e.target.value)) {
      setError("tag", {
        message: "Tags must be unique",
        type: "notOneOf",
      });
    } else if (e.target.value.trim() === "") {
      setError("tag", {
        message: "Tag cannot be empty",
        type: "notOneOf",
      });
    } else {
      clearErrors("tag");
    }
    return;
  };
  //Takes event. Handles adding of author or tag.
  const handleAdd = (e) => {
    const key = e.currentTarget.parentNode.childNodes[1].id;
    const value = e.currentTarget.parentNode.childNodes[1].value;
    if (value === "") {
      setError(key, {
        message: `Can't add ${key} with no value.`,
        type: "required",
      });
      setTimeout(() => {
        clearErrors(key);
      }, 5000);
    }
    if (errors[key]) {
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
  //Takes form data. Handles submit
  const onSubmit = (data) => {
    console.log(data);
    const card = userCard(userInput);
    setSavedStories([...savedStories, card]);
    setUserInput({
      title: "Title",
      description: "Description",
      author: [],
      tag: [],
    });
  };
  //Updates saved stories
  useEffect(() => {
    setLocalStorage(savedStories, "Stories");
  }, [savedStories]);

  //Updates saved tags
  useEffect(() => {
    setLocalStorage(tags, "Tags");
  }, [tags]);
  return (
    <React.Fragment>
      <form className="form-create">
        <div className={errors.title ? "input error" : "input"}>
          <label for="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            ref={register}
            onChange={handleChange}
          />
        </div>
        <p className="error below">
          {errors.title && "Please include a title."}
        </p>
        <div className={errors.description ? "input error" : "input"}>
          <label for="description">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            ref={register}
            onChange={handleChange}
          />
        </div>
        <p className="error below">
          {errors.description &&
            "Please enter a valid description that is less than 250 characters."}
        </p>
        <div className={errors.url ? "input error" : "input"}>
          <label for="url">Url</label>
          <input
            id="url"
            name="url"
            type="text"
            ref={register}
            onChange={handleChange}
          />
        </div>
        <p className="error below">
          {errors.url && "Please enter a valid URL."}
        </p>
        <div className={errors.author ? "input error" : "input"}>
          <label for="author">Author</label>
          <input id="author" name="author" type="text" ref={register} />

          <FontAwesomeIcon
            onClick={handleAdd}
            className={errors.author ? "add-btn error" : "add-btn"}
            icon={faPlus}
          ></FontAwesomeIcon>
        </div>
        <p className="error below">{errors.author && errors.author.message}</p>
        <div className={errors.tag ? "input error" : "input"}>
          <label for="tag">Tag</label>
          <input
            id="tag"
            name="tag"
            list="tags"
            type="text"
            ref={register}
            onChange={(e) => handleTag(e)}
          />
          <datalist id="tags">
            <option value="world">World</option>
            {tags.map((tag) => (
              <option key={uuid()} value={tag}>
                {tag}
              </option>
            ))}
          </datalist>

          <FontAwesomeIcon
            onClick={handleAdd}
            className={errors.tag ? "add-btn error" : "add-btn"}
            icon={faPlus}
          ></FontAwesomeIcon>
        </div>
        <p className="error below">{errors.tag && errors.tag.message}</p>
      </form>
      <button className="create" onClick={handleSubmit(onSubmit)}>
        Add Card
      </button>
    </React.Fragment>
  );
};
