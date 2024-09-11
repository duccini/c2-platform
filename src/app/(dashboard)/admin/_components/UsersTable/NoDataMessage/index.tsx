import styles from "./styles.module.css";

type NoDataMessageProps = {
  colSpan: number;
};

const NoDataMessage = ({ colSpan }: NoDataMessageProps) => {
  return (
    <tbody>
      <tr>
        <td colSpan={colSpan} className={styles.noData}>
          Nenhum usuário encontrado...
        </td>
      </tr>
    </tbody>
  );
};

export default NoDataMessage;
