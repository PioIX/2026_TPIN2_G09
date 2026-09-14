export default function Message({ message, currentUserId }) {
  const esPropio = message.userId === currentUserId;

  return (
    <div className={`message-row ${esPropio ? "own" : "other"}`}>
      <div className={`message-bubble ${esPropio ? "message-sent" : "message-received"}`}>
        {!esPropio && <span className="message-sender">{message.username}</span>}
        <p>{message.contenido}</p>
        <span className="message-time">
          {new Date(message.fecha).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    </div>
  );
}