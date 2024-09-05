'use client'
import styles from "./page.module.css";
import Image from "next/image";
import { Suspense, useState } from "react";
import logoCodigoCerto from "public/images/codigocerto.svg";
import Index from "@/components/ContainerLogin";
import BackgroundStyle from "@/components/ContainerLogin/page";
import Link from "next/link";
import api from "../../../utils/api"
import { useRouter } from "next/navigation";
export default function RecuperarSenha() {
  // Estados para cada input de código
  
  

  return (
    <div className={styles.containerRecuperarSenha}>
      <BackgroundStyle />
      <Suspense fallback={<div>Carregando...</div>}>
      <Index/>
    </Suspense>
      
    </div>
  );
}






