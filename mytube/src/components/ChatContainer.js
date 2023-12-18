import { useEffect, useState } from "react";
import ChatMassege from "./ChatMassege";
import { useDispatch, useSelector } from "react-redux";
import { messagesDummy, randomName } from "../utils/helper";
import { addMessage } from "../utils/chatSlice";

const ChatContainer = () => {
  const [sendMsg, setSendMsg] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: randomName(),
          message: messagesDummy(10),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="h-[470px] min-w-[300px] ml-5 mr-14 border rounded-lg overflow-hidden">
      <div className="h-[425px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat, indx) => (
          <ChatMassege key={indx} name={chat.name} massege={chat.message} />
        ))}
      </div>
      <form
        className=" text-sm pt-1.5 "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Gaurav",
              message: sendMsg,
            })
          );
          setSendMsg("");
        }}
      >
        <input
          type="text"
          placeholder="type..."
          className="w-[70%] mx-2 px-3 py-1 border rounded-2xl outline-none"
          value={sendMsg}
          onChange={(e) => setSendMsg(e.target.value)}
        />
        <button className="border px-2 py-1 bg-gray-600 text-white rounded-full">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatContainer;
