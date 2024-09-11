'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import api from '../../../utils/api';
import styles from "./page.module.css";
import Image from "next/image";
import logoCodigoCerto from "public/images/codigocerto.svg";
import BackgroundStyle from "@/components/ContainerLogin/page";
import Link from "next/link";
import Error from '@/components/Validation';

export default function RedefinirSenha() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const  [errorPassword, setErrorPassword] = useState(false)
  const  [errorEmptyPassword, setErrorEmptyPassword] = useState(false)
  const [loading,setLoading]= useState(false)
  // Obtém o token da URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setErrorPassword(false)
    setErrorEmptyPassword(false)
  

    if( !password || !confirmPassword){

      setErrorEmptyPassword(true)

     return 
    } 

    if (password !== confirmPassword) {
    

      setErrorPassword(true)
      return;
    }

    try {
      setLoading(true)

      await api.post('/auth/reset-password', { token, password });

      setLoading(false)
      router.push('/login'); // Redireciona para a página de login
    } catch (error) {
      console.error("Erro ao redefinir a senha", error);
      setLoading(false)
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className={styles.containerRedefinirSenha}>
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
          <h1 className={styles.titleForm}>Redefinir senha</h1>
          <p className={styles.paragraphForm}>Insira sua nova senha.</p>

          <p className={styles.paragraphField}>Nova Senha*</p>
          <div className={styles.formField}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Deve conter no mínimo 8 caracteres"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p className={styles.paragraphField}>Confirmar nova senha*</p>
          <div className={styles.formField}>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Deve conter no mínimo 8 caracteres"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {errorPassword && <Error message='As senhas não coincidem!'/>}
          {errorEmptyPassword && <Error message='Os campos são obrigatórios'/>}


          <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitButton}>
              {loading ?  "Alterando..." : "Alterar senha"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
