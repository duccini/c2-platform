'use client'

import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa"; 
import logoCodigoCerto from "public/images/codigocerto.svg";
import BackgroundStyle from "@/components/ContainerLogin/page";
import Link from "next/link";
import api from "../../../utils/api";
import { useRouter } from "next/navigation";
import Error from "@/components/Validation";

export default function RecuperarSenha() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorToken, setErrorToken] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setInput: React.Dispatch<React.SetStateAction<string>>) => {
    const value = e.target.value;
    setInput(value);

    // Move o foco para o próximo campo se o valor tiver 1 caractere
    if (value.length === 1) {
      const nextInput = e.target.nextElementSibling;
      if (nextInput) {
        (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const nextInput = (e.target as HTMLElement).nextElementSibling;
      if (nextInput) {
        (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorToken(false);
    const token = `${input1}${input2}${input3}${input4}${input5}${input6}`;

    try {
      const response = await api.post('/auth/validate-reset-token', { token });

      if (response.data.success) {
        router.push(`/nova-senha?token=${token}`);
      }
    } catch (error) {
      console.error("Token inválido", error);
      setErrorToken(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.containerRecuperarSenha}>
      <BackgroundStyle />
      <div className={styles.containerForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.subContainer}>
            <Link href='/'>
              <Image
                className={styles.logoContainer}
                src={logoCodigoCerto}
                alt="Logo codigo certo"
                width={48}
                height={32}
              />
            </Link>
            <h1 className={styles.titleContainerForm}>Código Certo Coders</h1>
          </div>
          <div className={styles.alignContainer}>
            <div>
              <h1 className={styles.titleForm}>Recuperar senha</h1>
              <p className={styles.paragraphForm}>
                Insira o código de 6 dígitos enviado para{" "}
                <span>seu email!</span>
              </p>
            </div>

            <div className={styles.formField}>
              <input
                type="text"
                className={styles.inputNumber}
                maxLength={1}
                value={input1}
                onChange={(e) => handleChange(e, setInput1)}
                onKeyDown={handleKeyPress}
              />
              <input
                type="text"
                className={styles.inputNumber}
                maxLength={1}
                value={input2}
                onChange={(e) => handleChange(e, setInput2)}
                onKeyDown={handleKeyPress}
              />
              <input
                type="text"
                className={styles.inputNumber}
                maxLength={1}
                value={input3}
                onChange={(e) => handleChange(e, setInput3)}
                onKeyDown={handleKeyPress}
              />
              <input
                type="text"
                className={styles.inputNumber}
                maxLength={1}
                value={input4}
                onChange={(e) => handleChange(e, setInput4)}
                onKeyDown={handleKeyPress}
              />
              <input
                type="text"
                className={styles.inputNumber}
                maxLength={1}
                value={input5}
                onChange={(e) => handleChange(e, setInput5)}
                onKeyDown={handleKeyPress}
              />
              <input
                type="text"
                className={styles.inputNumber}
                maxLength={1}
                value={input6}
                onChange={(e) => handleChange(e, setInput6)}
                onKeyDown={handleKeyPress}
              />
            </div>
            {errorToken && <Error message="O Token é inválido!" />}
          </div>

          <div className={styles.submitContainer}>
            <button type="submit" className={styles.buttonRecuperar}>
              {loading ? "Enviando..." : "Recuperar"}
            </button>
            <button className={styles.buttonVoltar}>
              <Link href="/esqueci-senha" className={styles.arrowLeft}>
                <FaArrowLeft />
                Reenviar
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
