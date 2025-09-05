import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message.trim()) return; // prevent empty messages
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className="px-4 py-3 bg-gray-800 border-t border-gray-700" onSubmit={handleSubmit}>
			<div className="relative w-full">
				<input
					type="text"
					placeholder="Type a message..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="w-full rounded-full bg-gray-700 text-white placeholder-gray-400 px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
				/>
				<button
					type="submit"
					className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-1 hover:text-sky-400"
				>
					{loading ? <div className="loading loading-spinner"></div> : <BsSend size={20} />}
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
