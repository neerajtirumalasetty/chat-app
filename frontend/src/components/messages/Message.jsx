import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();

	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);

	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-700";
	const shakeClass = message.shouldShake ? "animate-shake" : "";

	return (
		<div className={`chat ${chatClassName} mb-2`}>
			{/* Avatar */}
			<div className="chat-image avatar">
				<div className="w-10 h-10 rounded-full overflow-hidden">
					<img alt="user avatar" src={profilePic} className="object-cover" />
				</div>
			</div>

			{/* Bubble */}
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} max-w-[70%]`}>
				{message.message}
			</div>

			{/* Timestamp */}
			<div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
				{formattedTime}
			</div>
		</div>
	);
};

export default Message;
