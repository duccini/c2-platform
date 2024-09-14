"use client";
import styles from "./page.module.css";
import logoCodigoCerto from "public/images/codigocerto.svg";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Image from "next/image";
import BackgroundStyle from "@/components/ContainerLogin/page";
import api from "../../../utils/api";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Error from "../../../components/Validation/index";
import { UserContext } from "@/context/userContext"; // Certifique-se de que está importando o contexto corretamente

export default function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [invalidEmailError, setInvalidEmailError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Usando o contexto de usuário corretamente
  const { user, setUser} = useContext(UserContext); // Certifique-se de usar user e setUser do contexto
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setEmailError(!email);
    setPasswordError(!password);

    if (!email || !password) return;

    setLoading(true);

    try {
      const response = await api.post("/auth/login", { email, password });
      const datas = response.data.user
      const error = response.data.error
      const token = response.data.token
      console.log(user)
      if (error) {
        setLoginError(true);
        setLoading(false);
        return;
      }

      
      // Salvando o token nos cookies
      Cookies.set("token", token, { expires: 1 });
      
      // Redirecionando para o dashboard
      router.push("/dashboard");
      // Atualizando o estado global com o contexto
      setUser({
        username: datas.username,
        email: datas.email,
        token: token,
      });
      console.log(user)
      console.log(datas)
    } catch (error) {
      setLoginError(true);
      console.error("Erro ao fazer login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.ContainerPageLogin}>
      <BackgroundStyle />
      <div className={styles.containerForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.subContainer}>
            <Link href="/">
              <Image
                className={styles.logoContainer}
                src={logoCodigoCerto}
                alt="Logo código certo"
                width={48}
                height={32}
              />
            </Link>
            <h1 className={styles.titleContainerForm}>Código Certo Coders</h1>
          </div>
          <h1 className={styles.titleForm}>Acessar sua conta</h1>
          <p className={styles.paragraphForm}>
            Preencha os campos abaixo para acessar sua conta.
          </p>
          <p className={styles.paragraphField}>Email*</p>
          <div className={styles.formField}>
            <FaEnvelope className={styles.icon} />
            <input
              type="email"
              id="email"
              name="Email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {emailError && <Error message="Email é obrigatório!" />}
          {invalidEmailError && <Error message="Digite um email válido!" />}
          <p className={styles.paragraphField}>Senha*</p>
          <div className={styles.formField}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {passwordError && <Error message="Senha é obrigatória!" />}
          {loginError && <Error message="Dados inválidos ou usuário não cadastrado" />}
          {loading && <p className={styles.loadingMessage}>Carregando...</p>}
          <div className={styles.containerOptions}>
            <div className={styles.checkbox}>
              <input type="checkbox" id="checkbox1" />
              <span className={styles.manterConectado}>Manter conectado</span>
              <span>
                <Link href="/esqueci-senha">Esqueci a senha</Link>
              </span>
            </div>
          </div>
          <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </button>
            <p className={styles.signupLink}>
              Não tem uma conta?
              <span>
                <Link href="/cadastro" className={styles.linkLogin}>
                  Criar uma conta
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
