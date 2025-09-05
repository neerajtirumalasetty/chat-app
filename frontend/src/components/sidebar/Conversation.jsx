import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const { onlineUsers } = useSocketContext();

	const isSelected = selectedConversation?._id === conversation._id;
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				onClick={() => setSelectedConversation(conversation)}
				className={`flex gap-3 items-center p-2 rounded-lg cursor-pointer transition-colors duration-200
					${isSelected ? "bg-sky-600" : "hover:bg-sky-500"}
				`}
			>
				<div className="relative">
					<img
						src={conversation.profilePic}
						alt="user avatar"
						className="w-12 h-12 rounded-full object-cover"
					/>
					{isOnline && (
						<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></span>
					)}
				</div>

				<div className="flex flex-col flex-1">
					<div className="flex justify-between items-center">
						<p className="font-semibold text-gray-200">{conversation.fullName}</p>
						<span className="text-xl">{emoji}</span>
					</div>
				</div>
			</div>

			{/* Divider between conversations */}
			{!lastIdx && <div className="border-b border-gray-700 my-1" />}
		</>
	);
};

export default Conversation;
