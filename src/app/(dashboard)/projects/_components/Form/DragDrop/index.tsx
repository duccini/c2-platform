"use client";

import { DragEvent, useRef, useState } from "react";
import Image from "next/image";
import cloudImg from "public/images/ep_upload-filled.svg";
import imgIcon from "public/images/mdi_image-outline.svg";
import closeIcon from "public/images/material-symbols-light_close.svg";

import styles from "./styles.module.css";

const DragDrop = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = () => {
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      validateFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      validateFile(file);
    }
  };

  const validateFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Por favor, envie apenas arquivos de imagem.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("O arquivo deve ter no máximo 10 MB.");
      return;
    }
    setFile(file);
  };

  const formatFileSize = (size: number) => {
    const kb = size / 1024;
    if (kb < 1024) {
      return `${kb.toFixed(2)}kb`;
    }
    const mb = kb / 1024;
    return `${mb.toFixed(2)}mb`;
  };

  return (
    <>
      <label htmlFor="image" className={styles.label}>
        Imagens do Projeto*
      </label>
      <div
        className={`${styles.uploadBox} ${isDragging ? styles.dragging : ""}`}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="image"
          name="image"
          className={styles.fileInput}
          accept="image/*"
          onChange={handleFileChange}
          hidden
          ref={inputRef}
        />
        <Image
          src={cloudImg}
          alt="Imagem de Upload"
          width={32}
          height={32}
          quality={100}
          priority
        />
        <span className={styles.uploadText}>
          Arraste as imagens para fazer o upload
        </span>
        <p className={styles.uploadInfo}>Tamanho máximo suportado: 10mb</p>
        <button
          type="button"
          className={styles.uploadBtn}
          onClick={() => inputRef.current?.click()}
        >
          Enviar arquivo
        </button>
      </div>

      {!file && (
        <>
          <h2 className={styles.imageGroupTitle}>Seus envios</h2>
          <div className={styles.imageGroup}>
            <Image
              src={imgIcon}
              alt="Icone de Imagem"
              width={20}
              height={20}
              quality={100}
              priority
            />
            <p className={styles.imageName}>Nenhuma imagem selecionada...</p>
          </div>
        </>
      )}

      {file && (
        <>
          <h2 className={styles.imageGroupTitle}>Seus envios</h2>
          <div className={styles.imageGroup}>
            <Image
              src={imgIcon}
              alt="Icone de Imagem"
              width={20}
              height={20}
              quality={100}
              priority
            />
            <p className={styles.imageName}>{file?.name}</p>
            <p className={styles.imageSize}>
              {file ? formatFileSize(file.size) : ""}
            </p>
            <button className={styles.closeIcon} onClick={() => setFile(null)}>
              <Image
                src={closeIcon}
                alt="Icone de X"
                width={15}
                height={15}
                quality={100}
                priority
              />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default DragDrop;
