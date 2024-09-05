'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import api from '../../../utils/api';
import styles from "./page.module.css";
import Image from "next/image";
import logoCodigoCerto from "public/images/codigocerto.svg";
import BackgroundStyle from "@/components/ContainerLogin/page";
import Link from "next/link";

export default function RedefinirSenha() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const searchParams = useSearchParams();
  const token = searchParams.get('token'); // Pega o token da URL

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    try {
      await api.post('/auth/reset-password', { token, password });
      router.push('/login'); // Redireciona para a página de login
    } catch (error) {
      console.error("Erro ao redefinir a senha", error);
    }
  };

  return (
    <Suspense fallback={<div>Carregando...</div>}>
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
              id="password"
              name="password"
              placeholder="Deve conter no mínimo 8 caracteres"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitButton}>
              Alterar senha
            </button>
          </div>
        </form>
      </div>
    </div>
    </Suspense>
  );
}