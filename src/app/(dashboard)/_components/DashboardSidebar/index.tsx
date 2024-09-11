"use client";

import { useState } from "react";
import Image from "next/image";

import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";

import Item from "./Item";

import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { FaUserFriends, FaFileInvoice } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { TiCalendarOutline } from "react-icons/ti";
import { LuGraduationCap } from "react-icons/lu";
import { GrNotes } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

import logoImg from "public/images/codigocerto.svg";

import styles from "./styles.module.css";

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={styles.sidebar}>
      <Sidebar
        collapsed={isCollapsed}
        width="255px"
        collapsedWidth="70px"
        backgroundColor="#191414"
        style={{
          borderColor: "#262626",
        }}
      >
        <Menu
          rootStyles={{
            [`.${menuClasses.active}`]: {
              color: "#f9f9f9",
              backgroundColor: "#262020",
              borderRadius: "0.5rem",
              maxWidth: "220px",
            },
          }}
          menuItemStyles={{
            button: () => {
              return {
                gap: `${isCollapsed ? "3%" : undefined}`,
                padding: "1rem",
                ":hover": {
                  backgroundColor: "transparent",
                },
              };
            },
          }}
        >
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <GoSidebarCollapse /> : undefined}
            style={{
              padding: "2.5rem 1.5rem",
            }}
          >
            {!isCollapsed && (
              <div className={styles.sidebarHeader}>
                <div className={styles.sidebarHeaderTitle}>
                  <Image
                    src={logoImg}
                    alt="Logo Codigo Certo"
                    width={30}
                    height={20}
                    quality={100}
                  />
                  <p>Codigo Certo Coders</p>
                </div>
                <button onClick={() => setIsCollapsed(!isCollapsed)}>
                  <GoSidebarExpand size={20} color="#8a8c91" />
                </button>
              </div>
            )}
          </MenuItem>

          <section
            className={styles.sidebarMenu}
            style={{
              paddingLeft: `${isCollapsed ? undefined : "5%"}`,
            }}
          >
            <h2>Menu</h2>
            <nav>
              <Item
                text="Usuários"
                icon={<FaUserFriends />}
                href="/dashboard"
              ></Item>

              <Item
                text="Projetos"
                icon={<FaRegEnvelope />}
                href="/projects"
              ></Item>

              <Item
                text="Trilhas Iniciais"
                icon={<FaFileInvoice />}
                href="/tracks"
              ></Item>

              <Item
                text="Eventos"
                icon={<TiCalendarOutline />}
                href="/events"
              ></Item>

              <Item
                text="Mentores"
                icon={<LuGraduationCap />}
                href="/mentors"
              ></Item>

              <Item text="Formulários" icon={<GrNotes />} href="/forms"></Item>
            </nav>
          </section>

          <section
            className={styles.sidebarSettings}
            style={{
              paddingLeft: `${isCollapsed ? undefined : "5%"}`,
            }}
          >
            <h2>Ajustes</h2>
            <Item text="Configurações" icon={<IoSettingsOutline />} href="#" />
            <Item
              text="Logout"
              icon={<MdLogout />}
              href="#"
              className={styles.logoutBtn}
            />
          </section>
        </Menu>
      </Sidebar>
    </aside>
  );
};

export default DashboardSidebar;
