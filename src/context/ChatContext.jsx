import { createContext, useState, useContext } from "react";
import { useAuth } from "./AuthContext";
import { getItem } from "../core/services/storage/Storage";

const ChatContext = createContext(false);
export const ChatProvider = ({ children }) => {
  const [messageId, setMessengeId] = useState("");

  const handleMessanger = (id) => {
    setMessengeId(id);
  };

  const getStudentChatFromToday = (data) => {
    const userChat = data.filter(
      (message) =>
        message.username.split(" ")[0] === "userChat" &&
        new Date(message.createDate).getFullYear() ===
          new Date().getFullYear() &&
        new Date(message.createDate).getDay() === new Date().getDay() &&
        new Date(message.createDate).getMonth() === new Date().getMonth()
    );
    return userChat;
  };

  const auth = useAuth();

  const getAllChatsFromToday = (data) => {
    const user = JSON.parse(getItem("user"));
    const userChat = data.filter(
      (comment) =>
        (comment.username.split(" ")[0] === "userChat" ||
          comment.username.split(" ")[0] === "adminChat") &&
        new Date(comment.createDate).getFullYear() ===
          new Date().getFullYear() &&
        new Date(comment.createDate).getDay() === new Date().getDay() &&
        new Date(comment.createDate).getMonth() === new Date().getMonth() &&
        (auth.isStudent
          ? user._id === comment.postId
          : auth.isAdmin && messageId === comment.postId)
    );
    return userChat;
  };

  return (
    <ChatContext.Provider
      value={{
        handleMessanger,
        messageId,
        getStudentChatFromToday,
        getAllChatsFromToday,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return useContext(ChatContext);
};
