function Modal({ isOpen, onClose, title, message, type = 'success' }) {
  if (!isOpen) return null;

  const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className={`modal-icon ${type}`}>{icon}</div>
        <h3>{title}</h3>
        <p>{message}</p>
        <button className="btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
