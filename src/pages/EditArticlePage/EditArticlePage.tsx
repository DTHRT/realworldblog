import React from "react";
import styles from "./EditArticlePage.module.scss";
import Form from "../../components/Form";
import InputText from "../../components/InputText";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Api from "../../services/api";
import Textarea from "../../components/Textarea";
import Tags from "../../components/Tags";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditArticlePage = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const history = useHistory();
  const api = new Api();
  const params: { slug: string } = useParams();
  const { slug } = params;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({});

  useEffect(() => {
    api.getPost(slug).then((data) => {
      const { title, description, tagList } = data.article;

      reset({
        title,
        description,
        tags: tagList.map((tag: { tag: string }) => {
          return { tag };
        }),
      });
    });
  }, []);

  const onSubmit = async (data: FieldValues) => {
    if (!token) {
      return toast.error("Please sign in");
    }

    const { title, description, tags } = data;

    const tagList = tags.map((tag: { tag: string }) => tag.tag);

    const response = await api.updatePost(
      slug,
      { title, description, tagList },
      token,
    );

    const { errors } = response;

    if (errors) {
      const errorMessages = Object.entries(errors)
        .map(([key, value]) => `${key}: ${value}`)
        .join(" ");

      return toast.error(errorMessages);
    }

    toast.success("Article created successfully");
    history.push("/");
  };

  return (
    <div className={styles.EditArticlePage}>
      <Form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className={styles.EditArticlePage__form}
        title="Edit article"
        submitButtonClassName={styles.EditArticlePage__formSubmitButton}
        submitText="Send"
      >
        <InputText
          label="Title"
          name="title"
          placeholder="Title"
          register={{
            ...register("title", {
              required: "Title is required",
            }),
          }}
          error={errors["title"]}
        />

        <Textarea
          label="Text"
          name="description"
          placeholder="Text"
          register={{
            ...register("description", {
              required: "Text is required",
            }),
          }}
          error={errors["description"]}
        />

        <Tags register={register} errors={errors} control={control} />
      </Form>
    </div>
  );
};

export default EditArticlePage;
