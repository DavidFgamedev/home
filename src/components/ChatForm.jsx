import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Update chat history with the user's message
    setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

    // Delay 600 ms before showing "Thinking..." and generating response
    setTimeout(() => {
      // Add a "Thinking..." placeholder for the bot's response
      setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);

      // Call the function to generate the bot's response
      generateBotResponse([...chatHistory, { role: "user", text: `You are a helpful game designer. I am looking to create a new game that leverages my 
        pre-requisites, aligns with studio requests and goals and helps me create a pitch deck for an entire new game design concept. Consider a list of 
        exisiting game titles that im am emulating. And you must help me decide which game design direction to choose. Use the following context to inform 
        your game suggestions:\n\n{context}\n\nBased on the chat history and the user's request, generate or modify a game design. Consider prerequisites, 
        studio requests, and format instructions if provided in the input: ${userMessage}` }]);
    }, 600);
  };

  return (
    <form onSubmit={handleFormSubmit} className="chat-form">
      <input ref={inputRef} placeholder="Message..." className="message-input" required />
      <button type="submit" id="send-message" className="material-symbols-rounded">
        arrow_upward
      </button>
    </form>
  );
};

export default ChatForm;
