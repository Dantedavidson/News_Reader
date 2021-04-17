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
  const [userInput, setUserInput] = useState(initial);
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
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "authors",
    // unique name for your Field Array
    // keyName: "id", default to "id", you can change the key name
  });

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
    const card = userCard(userInput);
    setModal({
      inspect: true,
      current: card,
    });
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

  const deleteAuthor = () => {
    let filtered = authorFields.filter(
      (author) => author.value === getValues("remove-author")
    );
    removeAuthor(filtered.index);
  };
  //Takes form data. Handles submit
  const onSubmit = (data) => {
    console.log(data, authorFields);
    // const card = userCard(userInput);
    // const cardInDb = savedStories.find((story) => story.id === card.id) || {};
    // cardInDb.story = card.story;
    // cardInDb.id = card.id;
    // cardInDb.like = card.like;
    // cardInDb.tags = card.tags;
    // if (!cardInDb.id) {
    //   cardInDb.id = uuid();
    //   setSavedStories([...savedStories, cardInDb]);
    // }
    // setUserInput(initial);
    // reset();
    // if (match.url.includes("/edit")) return history.push("/stories");
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
    console.log(authorFields);
  };
  // ({ control, index, field }) => {
  //   const value = useWatch({
  //     name: "test",
  //     control
  //   });

  //   return (
  //     <Controller
  //       control={control}
  //       name={`test.${index}.firstName`}
  //       render={({ field }) =>
  //         value?.[index]?.checkbox === "on" ? <input {...field} /> : null
  //       }
  //       defaultValue={field.firstName}
  //     />
  //   );
  // };

  // const handleUserSelection = (val) => {
  //   console.log(val);
  //   const userObj = [];
  //   let userData = [];
  //   userData = customerList.filter(item => item.cid === val[0].value) ? customerData.filter(item => item.cid === val[0].value) : [];
  //   console.log(userData);
  //   if (userData && userData.length > 0) {
  //     setEmail(userData[0].cemail);
  //     setPhone(userData[0].cph);

  //   } else {
  //     setCName(val[0].value);
  //   }
  // };

  //Set form fields and backup if user is on edit route
  useEffect(() => {
    if (match.url === "/create") return;
    const paramId = match.params.id;
    const current = savedStories.filter((story) => story.id === paramId)[0];
    console.log(current);
    setUserInput({
      title: current.story.title,
      description: current.story.lead,
      imgUrl: current.story.imgUrl,
      url: current.story.url,
      tag: current.tags,
      author: stringToArray(current.story.byline),
      id: current.id,
    });
  }, []);

  return (
    <React.Fragment>
      <form className="form-create">
        <h2>{title}</h2>
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

        {/* Remove Author */}

        <FieldArray
          options={authorFields}
          id="remove-author"
          array="authors"
          label="Remove Authors"
          register={register}
        ></FieldArray>
        <FontAwesomeIcon
          onClick={() => {
            deleteAuthor();
          }}
          icon={faTimes}
        ></FontAwesomeIcon>

        {/* {authorFields.map((author, index) => {
          <Controller
            key={author.id}
            control={control}
            onChange={([selected]) => {
              // React Select return object instead of value for selection
              return { value: selected };
            }}
            name={`authors[${index}].name`}
            defaultValue={{ value: "chocolate" }}
            as={<Select options={authorFields} />}
          ></Controller>;
        })} */}

        {/* <div>
          <label htmlFor="remove-author">Remove Author</label>
          <select name="remove-author" id="remove-author">
            {authorFields.length > 0
              ? authorFields.map((author, index) => {
                  return (
                    <option
                      key={author.id} // important to include key with field's id
                      //ref={register()}
                      name={`authors[${index}].value`}
                      defaultValue={author.value} // make sure to include defaultValue
                    ></option>
                  );
                })
              : ""}
          </select>
        </div> */}

        <Select
          id="remove-tag"
          label="Remove Tag"
          options={userInput.tag}
        ></Select>
        <div>
          <FormButton
            text={"Preview Card"}
            onClick={handlePreview}
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
