"use client";

/// <reference types="react/canary" />

import Link from "next/link";
import Image from "next/image";

import { MouseEvent } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logoImg from "public/images/codigocerto.svg";

import styles from "./styles.module.css";

const Header = () => {
  const togglePopover = (e: MouseEvent) => {
    const popover = document.getElementById("mobile");

    if (e.button === 0) {
      popover?.hidePopover();
    }
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <Image
            src={logoImg}
            alt="Logo do CodigoCerto"
            className={styles.logoImg}
            width={75}
            height={50}
            quality={100}
            priority
          />
        </Link>

        <nav className={styles.navContent}>
          <Link href="/diversidade">Diversidade</Link>
          <Link href="/networking">Networking</Link>
          <Link href="/">Equipe</Link>
        </nav>

        <div className={styles.loginButton}>
          <Link href="/login">
            <span>Login</span>
          </Link>
        </div>

        <button
          popoverTarget="mobile"
          className={styles.hamburgerButton}
          onClick={togglePopover}
        >
          <AiOutlineMenu size={36} />
        </button>

        <div id="mobile" popover="" className={styles.mobileSection}>
          <button popoverTarget="mobile" className={styles.closeButton}>
            <AiOutlineClose size={36} />
          </button>

          <nav className={styles.navContentMobile}>
            <Link href="/diversidade" onClick={togglePopover}>
              Diversidade
            </Link>
            <Link href="/networking" onClick={togglePopover}>
              Networking
            </Link>
            <Link href="/" onClick={togglePopover}>
              Equipe
            </Link>
          </nav>

          <div className={styles.loginButtonMobile}>
            <Link href="/" onClick={togglePopover}>
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
