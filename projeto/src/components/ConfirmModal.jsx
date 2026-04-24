import "./ConfirmModal.css";

export default function ConfirmModal({
  aberto,
  titulo,
  mensagem,
  textoConfirmar = "Confirmar",
  textoCancelar = "Cancelar",
  onConfirm,
  onCancel
}) {
  if (!aberto) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div
        className="modal-confirmacao"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{titulo}</h3>
        <p>{mensagem}</p>

        <div className="modal-confirmacao-acoes">
          <button
            type="button"
            className="modal-btn modal-btn-cancelar"
            onClick={onCancel}
          >
            {textoCancelar}
          </button>

          <button
            type="button"
            className="modal-btn modal-btn-confirmar"
            onClick={onConfirm}
          >
            {textoConfirmar}
          </button>
        </div>
      </div>
    </div>
  );
}