import FilterBtn from "./_components/FilterBtn";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "./page.module.css";

export default function Users() {
  return (
    <main className={styles.users}>
      <h1 className={styles.title}>
        <span> Painel Administrativo / </span>Usuários
      </h1>

      <section className={styles.filters}>
        <div className={styles.filterSearch}>
          <HiOutlineMagnifyingGlass size={20} />
          <input
            type="text"
            placeholder="Buscar por nome..."
            className={styles.filterInput}
          />
        </div>
        <div className={styles.filterBtns}>
          <FilterBtn text="trilha" />
          <FilterBtn text="equipe" />
          <FilterBtn text="função" />
        </div>
      </section>

      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th>Nome</th>
            <th>Equipe</th>
            <th>Trilha</th>
            <th>Permissão</th>
            <th>Função</th>
            <th>Atualizar</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tableBody}>
            <td>Ana Paula Queiroz</td>
            <td>Equipe Red</td>
            <td>Profissional</td>
            <td>Administrador</td>
            <td>Front-End</td>
            <td>
              <BsThreeDotsVertical />
            </td>
          </tr>
          <tr className={styles.tableBody}>
            <td>Ana Paula Queiroz</td>
            <td>Equipe Red</td>
            <td>Profissional</td>
            <td>Administrador</td>
            <td>Front-End</td>
            <td>
              <BsThreeDotsVertical />
            </td>
          </tr>
          <tr className={styles.tableBody}>
            <td>Ana Paula Queiroz</td>
            <td>Equipe Red</td>
            <td>Profissional</td>
            <td>Administrador</td>
            <td>Front-End</td>
            <td>
              <BsThreeDotsVertical />
            </td>
          </tr>
          <tr className={styles.tableBody}>
            <td>Ana Paula Queiroz</td>
            <td>Equipe Red</td>
            <td>Profissional</td>
            <td>Administrador</td>
            <td>Front-End</td>
            <td>
              <BsThreeDotsVertical />
            </td>
          </tr>
          <tr className={styles.tableBody}>
            <td>Ana Paula Queiroz</td>
            <td>Equipe Red</td>
            <td>Profissional</td>
            <td>Administrador</td>
            <td>Front-End</td>
            <td>
              <BsThreeDotsVertical />
            </td>
          </tr>
          <tr className={styles.tableBody}>
            <td>Ana Paula Queiroz</td>
            <td>Equipe Red</td>
            <td>Profissional</td>
            <td>Administrador</td>
            <td>Front-End</td>
            <td>
              <BsThreeDotsVertical />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
