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

import * as yup from "yup";

//regex
import { urlRegex, dateRegex } from "./regex";
// import { userCardSchema } from "./schema";

export const CreateCardForm = ({
  setUserInput,
  userInput,
  tags,
  setTags,
  savedStories,
  setSavedStories,
}) => {
  const userCardSchema = yup.object().shape({
    title: yup.string().max(100).required(),
    description: yup.string().max(250),
    url: yup.string().matches(urlRegex, { excludeEmptyString: true }),
    // tag: yup.mixed().notOneOf(userInput.tag),
  });
  const { register, handleSubmit, errors, clearErrors, setError } = useForm({
    resolver: yupResolver(userCardSchema),
    reValidateMode: "onChange",
  });

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
    console.log(errors);
    const key = e.currentTarget.parentNode.childNodes[1].id;
    const value = e.currentTarget.parentNode.childNodes[1].value;
    if (userInput[key].includes(value)) {
      setError("tag", {
        message: "Tags must be unique",
        type: "notOneOf",
      });
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
        <div className="input">
          <label for="author">Author</label>
          <input id="author" name="author" type="text" ref={register} />

          <FontAwesomeIcon
            onClick={handleAdd}
            className="add-btn"
            icon={faPlus}
          ></FontAwesomeIcon>
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

          <FontAwesomeIcon
            onClick={handleAdd}
            className="add-btn"
            icon={faPlus}
          ></FontAwesomeIcon>
        </div>
        <p className="error below">{errors.tag && errors.tag.message}</p>
      </form>

      <button
        onClick={() => {
          console.log(errors);
          console.log(`${userInput["tag"]} is ${typeof userInput["tag"]}`);
        }}
      >
        test
      </button>
      <button className="create" onClick={handleSubmit(onSubmit)}>
        Add Card
      </button>
    </React.Fragment>
  );
};
