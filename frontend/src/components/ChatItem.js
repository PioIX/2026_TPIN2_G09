export default function ChatItem({ chat, onClick }) {
  const foto = chat.foto || "/default-avatar.png"; // foto por defecto si no tiene

  return (
    <div className="chat-item" onClick={onClick}>
      <img src={foto} alt={chat.nombre} className="chat-item-avatar" />
      <div className="chat-item-info">
        <span className="chat-item-name">{chat.nombre}</span>
        {chat.ultimoMensaje && (
          <span className="chat-item-last-msg">{chat.ultimoMensaje}</span>
        )}
      </div>
    </div>
  );
}