import styles from "./styles.module.css";

interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal = ({
  isOpen,
  onConfirm,
  onCancel,
}: ConfirmationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Confirmar Exclusão</h2>
        <p>Você realmente deseja excluir este usuário?</p>
        <div className={styles.modalActions}>
          <button className={styles.confirmBtn} onClick={onConfirm}>
            Confirmar
          </button>
          <button className={styles.cancelBtn} onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
