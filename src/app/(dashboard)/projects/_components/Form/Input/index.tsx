import { RegisterOptions, UseFormRegister } from "react-hook-form";
import styles from "./styles.module.css";

type InputProps = {
  type: string;
  id: string;
  name: string;
  htmlFor: string;
  label: string;
  error?: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  className?: string;
};

export function Input({
  type,
  id,
  name,
  htmlFor,
  label,
  error,
  register,
  rules,
  className,
}: InputProps) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={htmlFor}>{label}</label>
      {type === "textarea" ? (
        <textarea
          className={`${styles.input} ${
            error ? styles.inputError : ""
          } ${className}`}
          id={id}
          {...register(name, rules)}
          name={name}
        />
      ) : (
        <input
          className={`${styles.input} ${
            error ? styles.inputError : ""
          } ${className}`}
          type={type}
          id={id}
          {...register(name, rules)}
          name={name}
        />
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
