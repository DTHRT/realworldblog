import styles from "./CreateArticlePage.module.scss";
import Form from "../../components/Form";
import InputText from "../../components/InputText";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Api from "../../services/api";
import Textarea from "../../components/Textarea";
import Tags from "../../components/Tags";

const CreateArticlePage = () => {
  const api = new Api();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tags: [{ tag: "" }],
      text: "",
      short_description: "",
      title: "",
    },
  });

  const onSubmit = async (data: any) => {
    console.log({ data });

    return;
    const { username, email, password } = data;

    const response = await api.register({ username, email, password });

    const { errors, user } = response;

    if (errors) {
      const errorMessages = Object.entries(errors)
        .map(([key, value]) => `${key}: ${value}`)
        .join(" ");

      return toast.error(errorMessages);
    }

    toast.success("User created successfully");
    // history.push("/");
  };

  return (
    <div className={styles.CreateArticlePage}>
      <Form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className={styles.CreateArticlePage__form}
        title="Create new article"
        submitButtonClassName={styles.CreateArticlePage__formSubmitButton}
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

        <InputText
          label="Short description"
          name="short_description"
          placeholder="Short description"
          register={{
            ...register("short_description", {
              required: "Short description is required",
            }),
          }}
          error={errors["short_description"]}
        />

        <Textarea
          label="Text"
          name="text"
          placeholder="Text"
          register={{
            ...register("text", {
              required: "Text is required",
            }),
          }}
          error={errors["text"]}
        />

        <Tags register={register} errors={errors} control={control} />
      </Form>
    </div>
  );
};

export default CreateArticlePage;
