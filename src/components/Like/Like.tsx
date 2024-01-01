import React from "react";
import styles from "./Like.module.scss";
import classNames from "classnames";
import Api from "../../services/api";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setArticles } from "../../features/articles/articlesSlice";
import { useState } from "react";

interface Props {
  className?: string;
  active?: boolean;
  likes?: number;
  disabled?: boolean;
  slug: string;
  onClick?: () => void;
}
const Like: React.FC<Props> = ({
  active,
  className,
  likes = 0,
  disabled,
  slug,
  onClick = () => {},
}) => {
  const api = new Api();
  const { token } = useSelector((state: any) => state.user);
  const { articles } = useSelector((state: RootState) => state.articles);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const likePost = async () => {
    if (!token) {
      return toast.error("Please sign in");
    }

    const response = await api.likePost(slug, token);

    const { errors } = response;

    if (errors) {
      const errorMessages = Object.entries(errors)
        .map(([key, value]) => `${key}: ${value}`)
        .join(" ");

      return toast.error(errorMessages);
    }

    toast.success("Add to favorites");
    return response;
  };

  const dislikePost = async () => {
    if (!token) {
      return toast.error("Please sign in");
    }

    const response = await api.dislikePost(slug, token);

    const { errors } = response;

    if (errors) {
      const errorMessages = Object.entries(errors)
        .map(([key, value]) => `${key}: ${value}`)
        .join(" ");

      return toast.error(errorMessages);
    }

    toast.success("Remove from favorites");
    return response;
  };

  const onClickHeart = async () => {
    setLoading(true);

    try {
      const { article: updatedArticle } = active
        ? await dislikePost()
        : await likePost();
      const { slug: updatedSlug } = updatedArticle;

      const updatedArticles = articles.map((article) => {
        if (article.slug === updatedSlug) {
          return updatedArticle;
        }

        return article;
      });

      dispatch(setArticles(updatedArticles));
    } catch (e) {
      toast.error("Something went wrong");
      console.error(e);
    } finally {
      setLoading(false);
      onClick();
    }
  };

  return (
    <p className={classNames(styles.Like, className)}>
      <button
        className={classNames(styles.Like__button, {
          [styles.Like__buttonActive]: active,
        })}
        disabled={disabled || loading}
        onClick={disabled || loading ? () => {} : () => onClickHeart()}
      />

      <span className={styles.Like__counter}>{likes}</span>
    </p>
  );
};

export default Like;
