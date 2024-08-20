"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DragDrop from "./DragDrop";
import Tags from "./Tags";
import { Input } from "./Input";

import styles from "./styles.module.css";

const schema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  description: z.string().min(1, "A descrição é obrigatória"),
  leader: z.string().min(1, "O líder é obrigatório"),
  team: z.string().min(1, "A equipe é obrigatória"),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const handleCancel = () => {
    reset();
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <section className={styles.imageSection}>
        <DragDrop />

        <Tags />
      </section>

      <section className={styles.inputSection}>
        <Input
          htmlFor="name"
          label="Nome do Projeto"
          type="text"
          name="name"
          id="name"
          error={errors.name?.message}
          register={register}
        />

        <Input
          htmlFor="description"
          label="Descrição"
          type="textarea"
          name="description"
          id="description"
          error={errors.description?.message}
          register={register}
          className={styles.descriptionInput}
        />

        <Input
          htmlFor="leader"
          label="Líder"
          type="text"
          name="leader"
          id="leader"
          error={errors.leader?.message}
          register={register}
        />

        <Input
          htmlFor="team"
          label="Equipe"
          type="text"
          name="team"
          id="team"
          error={errors.team?.message}
          register={register}
        />

        <div className={styles.buttonGroup}>
          <button
            type="button"
            className={styles.cancelBtn}
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button className={styles.saveBtn} type="submit">
            Salvar
          </button>
        </div>
      </section>
    </form>
  );
};

export default Form;
