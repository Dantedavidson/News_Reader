import React, { useState, useEffect } from "react";

//Libraries
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

//Utilities
import { isEmptyOrSpaces, setLocalStorage, userCard } from "./utilities";

//Schema
import { userCardSchema } from "./schema";
import uuid from "react-uuid";

export const CreateCardForm = ({
  title,
  tags,
  setModal,
  setTags,
  savedStories,
  setSavedStories,
  match,
}) => {
  const initial = {
    title: "",
    description: "",
    imgUrl: "",
    url: "",
    author: [],
    tag: [],
    id: null,
  };
  const [userInput, setUserInput] = useState(initial);
  const [backup, setBackup] = useState();
  const [addError, setAddError] = useState({
    author: [],
    tag: [],
  });
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(userCardSchema),
    reValidateMode: "onChange",
  });
  //Text area resize
  function increaseHeight(e) {
    e.target.style.height = "auto";
    const newHeight = e.target.scrollHeight > 34 ? e.target.scrollHeight : 34;
    e.target.style.height = newHeight.toString() + "px";
  }
  // Takes data from input field and updates state on change.
  const handleChange = (data) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [data.target.id]: isEmptyOrSpaces(data.target.value)
          ? ""
          : data.target.value,
      };
    });
  };
  //Takes event. Sets errors for tag
  const handleTag = (e) => {
    if (userInput.tag.includes(e.target.value)) {
      setAddError((prevState) => ({
        ...prevState,
        tag: ["Tag must be unique"],
      }));
    } else if (e.target.value.trim() === "") {
      setAddError((prevState) => ({
        ...prevState,
        tag: ["Cannot be empty"],
      }));
    } else {
      setAddError((prevState) => ({
        ...prevState,
        tag: [],
      }));
    }
    return;
  };

  //Takes event. Handles adding of author or tag.
  const handleAdd = (e) => {
    const key = e.currentTarget.parentNode.childNodes[1].id;
    const value = e.currentTarget.parentNode.childNodes[1].value;
    if (value === "") {
      setAddError((prevState) => ({
        ...prevState,
        [key]: [`Cannot add ${key} that is empty.`],
      }));
      return;
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

  //Handles preview
  const handlePreview = (e) => {
    console.log(e);
    console.log(userInput);
    const card = userCard(userInput);
    setModal({
      inspect: true,
      current: card,
    });
    console.log(card);

    e.preventDefault();
  };
  //Takes event. Handles deleting author or tag
  const handleDelete = (e) => {
    const key = e.currentTarget.parentNode.childNodes[1].dataset.key;
    const value = e.currentTarget.parentNode.childNodes[1].value;
    if (!value) return;
    const filter = userInput[key].filter((item) => item !== value);

    setUserInput((prevState) => ({
      ...prevState,
      [key]: filter,
    }));
  };
  //Takes form data. Handles submit
  const onSubmit = (data) => {
    console.log(userInput);
    const card = userCard(userInput);
    console.log(card.id);
    const cardInDb = savedStories.find((story) => story.id === card.id) || {};
    console.log(cardInDb);
    cardInDb.story = card.story;
    cardInDb.id = card.id;
    cardInDb.like = card.like;
    cardInDb.tags = card.tags;
    if (!cardInDb.id) {
      cardInDb.id = uuid();
      setSavedStories([...savedStories, cardInDb]);
    }
    setUserInput(initial);
    reset();
  };
  //Updates saved stories
  useEffect(() => {
    setLocalStorage(savedStories, "Stories");
  }, [savedStories]);

  //Updates saved tags
  useEffect(() => {
    setLocalStorage(tags, "Tags");
  }, [tags]);

  //Set form fields and backup if user is on edit route
  useEffect(() => {
    if (match.url === "/custom") return;
    const paramId = match.params.id;
    const current = savedStories.filter((story) => story.id === paramId)[0];
    console.log(current);
    setUserInput({
      title: current.story.title,
      description: current.story.lead,
      imgUrl: current.story.imgUrl,
      url: current.story.url,
      tag: current.tags,
      author: [],
      id: current.id,
    });
    setBackup(current);
  }, []);

  return (
    <React.Fragment>
      <form className="form-create">
        <h2>{title}</h2>

        {/* Add Title */}
        <div className={errors.title ? "input error" : "input"}>
          <label for="title">Title</label>
          <textarea
            onKeyUp={(e) => {
              increaseHeight(e);
            }}
            id="title"
            name="title"
            type="text"
            value={userInput.title}
            ref={register}
            onChange={handleChange}
          />
        </div>
        <p className="error below">
          {errors.title && "Please include a title."}
        </p>
        {/* Add Description */}
        <div className={errors.description ? "input error" : "input"}>
          <label for="description">Description</label>
          <textarea
            onKeyUp={(e) => {
              increaseHeight(e);
            }}
            id="description"
            name="description"
            value={userInput.description}
            type="text"
            ref={register}
            onChange={handleChange}
          />
        </div>
        <p className="error below">
          {errors.description &&
            "Please enter a valid description that is less than 250 characters."}
        </p>
        {/* Add Image URL */}
        <div className={errors.imgUrl ? "input error" : "input"}>
          <label for="url">Image Url</label>
          <input
            id="imgUrl"
            name="imgUrl"
            type="text"
            value={userInput.imgUrl}
            ref={register}
            onChange={handleChange}
          />
        </div>
        <p className="error below">{errors.imgUrl && errors.imgUrl.message}</p>

        {/* Add URL */}
        <div className={errors.url ? "input error" : "input"}>
          <label for="url">Url</label>
          <input
            id="url"
            name="url"
            type="text"
            value={userInput.url}
            ref={register}
            onChange={handleChange}
          />
        </div>
        <p className="error below">
          {errors.url && "Please enter a valid URL."}
        </p>

        {/* Add Author */}
        <div className={addError.author.length > 0 ? "input warning" : "input"}>
          <label for="author">Author</label>
          <input
            id="author"
            data-key="author"
            name="author"
            type="text"
            ref={register}
            onChange={() => {
              setAddError((prevState) => ({
                ...prevState,
                author: [],
              }));
            }}
          />

          <FontAwesomeIcon
            onClick={handleAdd}
            className={
              addError.author.length > 0 ? "add-btn warning" : "add-btn"
            }
            icon={faPlus}
          ></FontAwesomeIcon>
        </div>
        <p className="warning below">
          {addError.author.length > 0 && addError.author[0]}
        </p>

        {/* Add Tag */}
        <div className={addError.tag.length > 0 ? "input warning" : "input"}>
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
            {tags.map((tag) => (
              <option key={uuid()} value={tag}>
                {tag}
              </option>
            ))}
          </datalist>

          <FontAwesomeIcon
            onClick={handleAdd}
            className={addError.tag.length > 0 ? "add-btn warning" : "add-btn"}
            icon={faPlus}
          ></FontAwesomeIcon>
        </div>
        <p className="warning below">
          {addError.tag.length > 0 && addError.tag[0]}
        </p>

        {/* Remove Author */}
        <div className="input">
          <label for="remove-author" data-key="author">
            Remove Author
          </label>
          <select type="text" data-key="author" name="remove-author">
            {userInput.author.map((author) => (
              <option key={uuid()} value={author}>
                {author}
              </option>
            ))}
          </select>
          <FontAwesomeIcon
            onClick={handleDelete}
            className="add-btn"
            icon={faTimes}
          ></FontAwesomeIcon>
        </div>

        {/* Remove Tag */}
        <div className="input">
          <label>Remove Tag</label>
          <select data-key="tag">
            {userInput.tag.map((tag) => (
              <option key={uuid()} value={tag}>
                {tag}
              </option>
            ))}
          </select>

          <FontAwesomeIcon
            onClick={handleDelete}
            className="add-btn"
            icon={faTimes}
          ></FontAwesomeIcon>
        </div>
        <div>
          <button className="create" onClick={handlePreview}>
            Preview Card
          </button>
          <button className="create" onClick={handleSubmit(onSubmit)}>
            Add Card
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};
