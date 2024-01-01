import React from "react";
import styles from "./Tags.module.scss";
import InputText from "../InputText";
import Button from "../Button";
import { useFieldArray } from "react-hook-form";

interface TagsProps {
  register: any;
  errors: any;
  control: any;
}

const Tags: React.FC<TagsProps> = ({ register, errors, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  return (
    <div className={styles.Tags}>
      <span className={styles.Tags__label}>Tags</span>
      <ul className={styles.Tags__list}>
        {fields.map((field, index) => {
          return (
            <li className={styles.Tags__item} key={field.id}>
              <InputText
                placeholder="Tag"
                name={`tag${index}`}
                register={{
                  ...register(`tags.${index}.tag`, {
                    required: "Tag is required",
                  }),
                }}
                error={errors.tags?.[index]?.tag}
              />
              <Button
                className={styles.Tags__deleteBtn}
                onClick={remove}
                type="button"
              >
                Delete
              </Button>

              {fields.length - 1 === index && (
                <Button
                  className={styles.Tags__addBtn}
                  onClick={() => append({ tag: "" })}
                  type="button"
                >
                  Add tag
                </Button>
              )}
            </li>
          );
        })}

        {fields.length === 0 && (
          <Button
            className={styles.Tags__addBtn}
            onClick={() => append({ tag: "" })}
            type="button"
          >
            Add tag
          </Button>
        )}
      </ul>
    </div>
  );
};

export default Tags;
