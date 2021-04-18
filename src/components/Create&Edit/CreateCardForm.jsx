import React, { useState, useEffect } from "react";

//Components
import { FormButton } from "../UI/FormButton.style";
import { Input, InputSelect, Select, TextArea, FieldArray } from "../UI/form";

//Libraries
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

//Utilities
import {
  isEmptyOrSpaces,
  setLocalStorage,
  userCard,
  stringToArray,
} from "../Utility/utilities";

//Schema
import { userCardSchema } from "../Utility/schema";
import uuid from "react-uuid";

export const CreateCardForm = ({
  title,
  tags,
  setModal,
  setTags,
  savedStories,
  setSavedStories,
  preload,
  props,
}) => {
  const { history, match } = props;
  const initial = {
    title: "",
    description: "",
    imgUrl: "",
    url: "",
    author: [],
    tag: [],
    id: null,
  };

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
    control,
  } = useForm({
    resolver: yupResolver(userCardSchema),
    reValidateMode: "onChange",
    defaultValues: preload,
  });

  const {
    fields: authorFields,
    append: appendAuthor,
    remove: removeAuthor,
  } = useFieldArray({
    control,
    name: "authors",
  });
  const {
    fields: tagFields,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray({
    control,
    name: "tags",
  });

  // Takes data from input field and updates state on change.
  // const handleChange = (data) => {
  //   setUserInput((prevState) => {
  //     return {
  //       ...prevState,
  //       [data.target.id]: isEmptyOrSpaces(data.target.value)
  //         ? ""
  //         : data.target.value,
  //     };
  //   });
  // };
  //Takes event. Sets errors for tag
  // const handleTag = (e) => {
  //   if (userInput.tag.includes(e.target.value)) {
  //     setAddError((prevState) => ({
  //       ...prevState,
  //       tag: ["Tag must be unique"],
  //     }));
  //   } else if (e.target.value.trim() === "") {
  //     setAddError((prevState) => ({
  //       ...prevState,
  //       tag: ["Cannot be empty"],
  //     }));
  //   } else {
  //     setAddError((prevState) => ({
  //       ...prevState,
  //       tag: [],
  //     }));
  //   }
  //   return;
  // };

  //Takes event. Handles adding of author or tag.
  // const handleAdd = (e) => {
  //   const key = e.currentTarget.parentNode.childNodes[1].id;
  //   const value = e.currentTarget.parentNode.childNodes[1].value;
  //   if (value === "") {
  //     setAddError((prevState) => ({
  //       ...prevState,
  //       [key]: [`Cannot add ${key} that is empty.`],
  //     }));
  //     return;
  //   }
  //   if (errors[key]) {
  //     return;
  //   }

  //   setUserInput((prevState) => {
  //     return {
  //       ...prevState,
  //       [key]: [...prevState[key], value],
  //     };
  //   });

  //   e.currentTarget.parentNode.childNodes[1].value = "";

  //   if (key === "tag" && !tags.includes(value)) {
  //     setTags([...tags, value]);
  //   }
  // };

  //Handles preview
  // const handlePreview = (e) => {
  //   const card = userCard(userInput);
  //   setModal({
  //     inspect: true,
  //     current: card,
  //   });
  //   e.preventDefault();
  // };
  //Takes event. Handles deleting author or tag
  // const handleDelete = (e) => {
  //   const key = e.currentTarget.parentNode.childNodes[1].dataset.key;
  //   const value = e.currentTarget.parentNode.childNodes[1].value;
  //   if (!value) return;
  //   const filter = userInput[key].filter((item) => item !== value);

  //   setUserInput((prevState) => ({
  //     ...prevState,
  //     [key]: filter,
  //   }));
  // };
  const deleteAuthor = () => {
    let filtered = authorFields.filter(
      (author) => author.value === getValues("remove-author")
    );

    removeAuthor(filtered[0].index);
  };
  const deleteTag = () => {
    let filtered = tagFields.filter(
      (tag) => tag.value === getValues("remove-tag")
    );
    removeTag(filtered[0].index);
  };
  //Takes form data. Handles submit
  const onSubmit = (data) => {
    const card = userCard(data);
    const cardInDb = savedStories.find((story) => story.id === card.id) || {};
    cardInDb.story = card.story;
    cardInDb.id = card.id;
    cardInDb.like = card.like;
    cardInDb.tags = card.tags;
    console.log(cardInDb);
    if (!cardInDb.id) {
      cardInDb.id = uuid();
      setSavedStories([...savedStories, cardInDb]);
    }
    reset();
    if (match.url.includes("/edit")) return history.push("/read");
  };
  //Updates saved stories
  // useEffect(() => {
  //   setLocalStorage(savedStories, "Stories");
  // }, [savedStories]);

  //Updates saved tags
  // useEffect(() => {
  //   setLocalStorage(tags, "Tags");
  // }, [tags]);

  const test = (e) => {
    e.preventDefault();
    console.log(authorFields, tagFields);
  };

  return (
    <React.Fragment>
      <form className="form-create">
        <h2>{title}</h2>
        <input type="hidden" name="id" id="id" ref={register} />
        <TextArea
          id="title"
          label="Title"
          register={register}
          error={errors.title}
        ></TextArea>
        <TextArea
          id="description"
          label="Description"
          register={register}
          error={errors.description}
        ></TextArea>
        <Input
          id="imgUrl"
          label="Image Url"
          error={errors.imgUrl}
          register={register}
          name="imgUrl"
          type="text"
        ></Input>

        <Input
          id="url"
          label="Url"
          error={errors.url}
          register={register}
          name="url"
          type="text"
        ></Input>

        <Input
          id="author"
          label="Author"
          error={errors.author}
          register={register}
          name="author"
          type="text"
        ></Input>
        {authorFields.map((author, index) => {
          return (
            <input
              key={author.id}
              ref={register()}
              type="hidden"
              name={`authors[${index}].value`}
              defaultValue={author.value}
            />
          );
        })}
        <FontAwesomeIcon
          onClick={() => {
            appendAuthor({
              value: getValues("author"),
              index: authorFields.length,
            });
          }}
          icon={faPlus}
        ></FontAwesomeIcon>

        <InputSelect
          id="tag"
          label="Tag"
          listId="tags"
          options={tags}
          register={register}
          error={addError.tag}
        ></InputSelect>
        {tagFields.map((tag, index) => {
          return (
            <input
              key={tag.id}
              ref={register()}
              type="hidden"
              name={`tags[${index}].value`}
              defaultValue={tag.value}
            />
          );
        })}
        <FontAwesomeIcon
          onClick={() => {
            appendTag({
              value: getValues("tag"),
              index: tagFields.length,
            });
          }}
          icon={faPlus}
        ></FontAwesomeIcon>

        {/* Remove Author */}

        <FieldArray
          options={authorFields}
          id="remove-author"
          array="authors"
          label="Remove Authors"
          //defaultValue={authorFields}
          register={register}
        ></FieldArray>
        <FontAwesomeIcon
          onClick={() => {
            deleteAuthor();
          }}
          icon={faTimes}
        ></FontAwesomeIcon>
        {/* Remove Tag */}
        <FieldArray
          options={tagFields}
          id="remove-tag"
          array="tags"
          label="Remove Tags"
          //defaultValue={authorFields}
          register={register}
        ></FieldArray>
        <FontAwesomeIcon
          onClick={() => {
            deleteTag();
          }}
          icon={faTimes}
        ></FontAwesomeIcon>

        <div>
          <FormButton
            text={"Preview Card"}
            //onClick={handlePreview}
          ></FormButton>
          <FormButton
            text={"Add Card"}
            handler={handleSubmit(onSubmit)}
          ></FormButton>
          <button onClick={test}>test</button>
        </div>
      </form>
    </React.Fragment>
  );
};
