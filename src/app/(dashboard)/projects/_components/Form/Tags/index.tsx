"use client";

import { useState } from "react";

import styles from "./styles.module.css";

const Tags = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tags = [
    "Front-End",
    "Back-End",
    "UX/UI Design",
    "QA",
    "Mobile",
    "DevOps",
    "Dados",
  ];

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <>
      <h2 className={styles.tagsTitle}>Modalidade*</h2>
      <p className={styles.chooseTag}>Escolha tags do projeto:</p>

      <div className={styles.tagsContainer}>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`${styles.tag} ${
              selectedTags.includes(tag) ? styles.tagSelected : ""
            }`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </>
  );
};

export default Tags;
