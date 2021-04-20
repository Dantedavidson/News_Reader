import React, { useEffect } from "react";

//Components
import { Button } from "../common/ui/ui";
import { Input, InputSelect, TextArea, FieldArray } from "../common/ui/form";
import { Form } from "./ui";

//Libraries
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

//Utilities
import { setLocalStorage, userCard } from "../Utility/utilities";

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

  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    reset,
    getValues,
    setValue,
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

  const onPreview = () => {
    const card = userCard(getValues());
    setModal({
      inspect: true,
      current: card,
    });
  };

  const handleTagError = (value, array) => {
    array.some(
      (obj) => obj.value.toLowerCase().trim() === value.toLowerCase().trim()
    )
      ? setError("tag", { type: "notOneOf", message: "Tags must be unique" })
      : clearErrors("tag");
  };

  const deleteAuthor = () => {
    let filtered = authorFields.filter(
      (author) => author.value === getValues("remove-author")
    );
    let index = authorFields.indexOf(filtered[0]);
    if (index === -1) return;
    removeAuthor(index);
  };
  const deleteTag = () => {
    let filtered = tagFields.filter(
      (tag) => tag.value === getValues("remove-tag")
    );
    let index = tagFields.indexOf(filtered[0]);
    if (index === -1) return;
    removeTag(index);
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

  //Updates saved tags
  useEffect(() => {
    setLocalStorage(tags, "Tags");
  }, [tags]);

  return (
    <React.Fragment>
      <Form>
        <h2>{title}</h2>

        {/* Register Id for Edit  */}

        <input type="hidden" name="id" id="id" ref={register} />

        {/* Add Title */}

        <TextArea
          id="title"
          label="Title"
          register={register}
          error={errors.title}
        ></TextArea>

        {/* Add Description */}

        <TextArea
          id="description"
          label="Description"
          register={register}
          error={errors.description}
        ></TextArea>

        {/* Add Image Url */}

        <Input
          id="imgUrl"
          label="Image Url"
          error={errors.imgUrl}
          register={register}
          name="imgUrl"
          type="text"
        ></Input>

        {/* Add Url */}

        <Input
          id="url"
          label="Url"
          error={errors.url}
          register={register}
          name="url"
          type="text"
        ></Input>

        {/* Add Author */}

        <Input
          id="author"
          label="Author"
          error={errors.author}
          register={register}
          name="author"
          controls={
            <FontAwesomeIcon
              className={errors.author ? "controls control-error" : "controls"}
              onClick={() => {
                appendAuthor({
                  value: getValues("author"),
                  index: authorFields.length,
                });
              }}
              icon={faPlus}
            ></FontAwesomeIcon>
          }
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

        {/* Add Tag */}

        <InputSelect
          id="tag"
          label="Tag"
          listId="tags"
          controls={
            <FontAwesomeIcon
              className={errors.tag ? "controls control-error" : "controls"}
              onClick={() => {
                if (errors.tag) return;
                appendTag({
                  value: getValues("tag"),
                  index: tagFields.length,
                });
                setTags([...tags, getValues("tag")]);
                setValue("tag", "");
              }}
              icon={faPlus}
            ></FontAwesomeIcon>
          }
          handler={(e) => handleTagError(e.currentTarget.value, tagFields)}
          options={tags}
          register={register}
          error={errors.tag}
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

        {/* Remove Author */}

        <FieldArray
          options={authorFields}
          id="remove-author"
          array="authors"
          label="Remove Authors"
          controls={
            <FontAwesomeIcon
              className="controls"
              onClick={() => {
                deleteAuthor();
              }}
              icon={faTimes}
            ></FontAwesomeIcon>
          }
          register={register}
        ></FieldArray>

        {/* Remove Tag */}
        <FieldArray
          options={tagFields}
          id="remove-tag"
          array="tags"
          label="Remove Tags"
          controls={
            <FontAwesomeIcon
              className="controls"
              onClick={() => {
                deleteTag();
              }}
              icon={faTimes}
            ></FontAwesomeIcon>
          }
          register={register}
        ></FieldArray>

        <div>
          <Button text={"Preview Card"} handler={onPreview}></Button>
          <Button text={"Add Card"} handler={handleSubmit(onSubmit)}></Button>
        </div>
      </Form>
    </React.Fragment>
  );
};
