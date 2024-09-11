'use client'
import Link from "next/link";
import Error from './../../../components/Validation/index'
import styles from "./page.module.css";
import { FaArrowLeft, FaEnvelope, FaLock } from "react-icons/fa";
import Image from "next/image";
import api from "../../../utils/api"
import logoCodigoCerto from "public/images/codigocerto.svg";
import BackgroundStyle from "@/components/ContainerLogin/page";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EsqueciSenha() {

  const router =useRouter()
   const [email,setEmail] = useState('')
   const [emailError,setEmailError]=useState(false)
   const [loading,setLoading]= useState(false)
   const handleSubmit = async (e:React.FormEvent) => {
   
    e.preventDefault()
    // Reset errors
    setEmailError(!email);

    setLoading(true)
   
    try {
      const response = await api.post('/auth/request-password-reset', {email})
      if(!response){
        console.log("email não encontrado!")
        setLoading(false)
        return
      }

      if(!email){

        console.log("O Email é obrigatório!")
        setLoading(false)
        return
      }

      router.push("/recuperar-senha")
     
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    finally{

   setLoading(false)

    }

   }







  return (
    <div className={styles.containerSenhaUser}>
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
          <h1 className={styles.titleForm}>Esqueci minha senha</h1>
          <p className={styles.paragraphForm}>
            Insira seu e-mail abaixo e enviaremos um link para redefinição de
            senha.
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
          {emailError && <Error message="Email invalido ou não cadastrado!"/>}
          

          <div className={styles.submitContainer}>
            <button type="submit" className={styles.buttonRecuperar}>
          
            {loading ? "Enviando..." : "Enviar"}
          
            </button>
           <button className={styles.buttonVoltar}>
            
           <Link href="/login" className={styles.linkLogin}>
              <FaArrowLeft className={styles.arrowLeft} />
              Voltar para o login
            </Link>
           </button>
          </div>
        </form>
      </div>
    </div>
  );
}
