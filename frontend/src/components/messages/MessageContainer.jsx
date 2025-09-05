import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='flex flex-col h-full bg-black/70 rounded-xl border border-gray-600 shadow-inner overflow-hidden'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-gray-800 px-4 py-3 border-b border-gray-700'>
						<span className='text-gray-400'>To:</span>{" "}
						<span className='text-white font-bold'>{selectedConversation.fullName}</span>
					</div>

					{/* Messages area */}
					<div className='flex-1 overflow-y-auto p-4 flex flex-col gap-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900'>
						<Messages />
					</div>

					{/* Message input */}
					<div className='p-4 border-t border-gray-700 bg-gray-800'>
						<MessageInput />
					</div>
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-4'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-4xl md:text-6xl text-gray-400' />
			</div>
		</div>
	);
};
