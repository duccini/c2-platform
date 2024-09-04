'use client'

import styles from "./page.module.css";
import logoCodigoCerto from "public/images/codigocerto.svg";
import React, { useState } from 'react'
import Link from "next/link";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Image from "next/image";
import BackgroundStyle from "@/components/ContainerLogin/page";
import api from "../../../utils/api"
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginUser() {



  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  
  const router = useRouter()

const handleSubmit = async (e:React.FormEvent) => {

 e.preventDefault()

  try {
    const response = await  api.post('/auth/login' , {
      email,password
    })

    Cookies.set("token", response.data.token, {expires: 1})
    router.push("/NewDashboard")
  } catch (error) {

    console.log(error)
  }




}


  return (
    <div className={styles.ContainerPageLogin}>
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
         <h1 className={styles.titleForm}>Acessar sua conta</h1>
         <p className={styles.paragraphForm}>
         Preencha os campos abaixo para criar sua conta.
         </p>

         <p className={styles.paragraphField}>Email*</p>
         <div className={styles.formField}>
           <FaEnvelope className={styles.icon} />
           <input
             type="email"
             id="email"
             name="Email"
             placeholder="Digite seu email"
             onChange={(e)=> setEmail(e.target.value)}
           />
         </div>

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
          
          <div className={styles.containerOptions}>
           
         <div className={styles.checkbox}>
           <input type="checkbox" id="checkbox1" />
           <span className={styles.manterConectado}>Manter conectado</span>
           <span >
           <Link href="/esqueci-senha" >
                 Esqueci a senha
             </Link>
           </span>
         </div>
        
          </div>

         <div className={styles.submitContainer}>
           <button type="submit" className={styles.submitButton}>
             Entrar
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
