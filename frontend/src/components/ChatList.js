import ChatItem from "./ChatItem";

export default function ChatList({ chats, onSelectChat }) {
  return (
    <div className="chat-list">
      {chats.length === 0 ? (
        <p>No tenés chats todavía.</p>
      ) : (
        chats.map((chat) => (
          <ChatItem
            key={chat.id}
            chat={chat}
            onClick={() => onSelectChat(chat)}
          />
        ))
      )}
    </div>
  );
}