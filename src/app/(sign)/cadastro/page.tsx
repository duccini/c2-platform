'use client'

import Image from "next/image";
import styles from "./page.module.css";
import logoCodigoCerto from "public/images/codigocerto.svg";
import BackgroundStyle from "@/components/ContainerLogin/page";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Link from "next/link";
import {  useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../../utils/api"
import Cookies from 'js-cookie'
import Error from "../../../components/Validation/index"
export default function CadastroUser() {

  const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const [emailError, setEmailError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
   const [usernameError, setUsernameError] = useState(false);
   const [invalidEmailError, setInvalidEmailError] = useState(false); 
   const [lengthPasswordError, setLengthPasswordError] = useState(false);


   const router = useRouter();

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setEmailError(!email);
    setPasswordError(!password);
    setUsernameError(!username);


    if(password.length < 8){
      setLengthPasswordError(true);
      return;
    } else {
      setLengthPasswordError(false);
    }

    function validarEmail(e: string) {
      var result = /\S+@\S+\.\S+/;
      return result.test(email);
    }

    if(!validarEmail(email)){
      setInvalidEmailError(true);
      return;
    } else {
      setInvalidEmailError(false);
    }
    
    if(!username || !email || !password){
      console.log("Nome, Email e Senha são obrigatórios!");
      return;
    }

    try {
      const response = await api.post('/users/register', {
        username,
        email,
        password,
      });

      Cookies.set("token", response.data.token, { expires: 1 });
      router.push('/login');

    } catch (error) {
      console.log("Erro ao registrar usuário:", error);
    }
  }



  return (
    <div className={styles.newUserContainer}>
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
          <h1 className={styles.titleForm}>Criar conta</h1>
          <p className={styles.paragraphForm}>
            Preencha os campos abaixo para criar sua conta.
          </p>

          <p className={styles.paragraphField}>Nome*</p>
          <div className={styles.formField}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Digite seu nome"
              onChange={(e)=> setUsername(e.target.value)}
            />
              
          </div>
          {usernameError && <Error message="O nome é obrigatório!" />}

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
          {invalidEmailError && <Error message="Digite um Email válido!"/>}
          {emailError && <Error message="O Email é obrigatório!"/>}
          

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
          {lengthPasswordError && <Error message="A senha deve conter no mínimo 8 caracteres"/>}
            {passwordError && <Error message="A senha é obrigatória!"/>}
            
            

          <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitButton}>
              Criar conta
            </button>

            <p className={styles.signupLink}>
              Já tem uma conta?
              <span>
                <Link href="/login" className={styles.linkLogin}>
                  Fazer login.
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
