import React, { FC } from "react";
import styles from "./BlogContent.module.css";

interface Props {
  post: { translation: { content: string } };
}

export const BlogContent: FC<Props> = ({ post }) => {
  return (
    <div
      className={`${styles.blogContent} text-primary flex flex-col gap-2`}
      dangerouslySetInnerHTML={{ __html: post?.translation.content }}
    />
  );
};
