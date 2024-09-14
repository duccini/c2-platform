"use client";

import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import{ UserContext} from "@/context/userContext";

const Navbar = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  // gerenciar a visibilidade do menu do perfil
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);
 const {user,setUser } = useContext(UserContext)
 
  const handleNavItemClick = (page: string) => {
    router.push(`/${page}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleProfileClick = () => {
    // Alternar a visibilidade do menu do perfil ou redirecionar para a página do perfil
    setProfileMenuVisible(!profileMenuVisible);
  };

  const handleLogout = () => {
    // Reset global state
    setUser({
      username: "",
      email: "",
      token: "",
    });
    // Remove cookie
    Cookies.remove("token");

    // Redirect to home page
    router.push("/");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navLeft}>
        <div className={styles.navSection}>
          <div
            className={styles.navItem}
            onClick={() => handleNavItemClick("dashboard")}
          >
            <div className={styles.navTextInactive}>Dashboard</div>
          </div>
          <div className={styles.navSeparator}>/</div>
          <div
            className={styles.navItem}
            onClick={() => handleNavItemClick("projects")}
          >
            <div className={styles.navTextActive}>Projetos</div>
          </div>
        </div>
      </div>
      <div className={styles.navRight}>
        <div className={styles.searchBar}>
          <div className={styles.searchIcon}>
            <img src="/images/search.svg" alt="Search Icon" />
          </div>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Buscar"
            className={styles.searchInput}
          />
        </div>
        <div className={styles.profile} onClick={handleProfileClick}>
          <div className={styles.profileContent}>
            <img
              className={styles.profileImage}
              src="/images/Baylee.svg"
              alt="Baylee Horne"
            />
            <div className={styles.profileName}>{user.username}</div>
            
          </div>
          <div className={styles.chevronDown}>
            <img src="/images/chevron-down.svg" alt="Chevron Down" />
          </div>
          {profileMenuVisible && (
            <div className={styles.profileMenu}>
              <div className={styles.profileMenuItem}>Minha Conta</div>
              <div className={styles.profileMenuItem}>Configurações</div>
              <div className={styles.profileMenuItem} onClick={handleLogout}>
                Sair
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
