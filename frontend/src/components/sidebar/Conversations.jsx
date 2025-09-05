import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();

	return (
		<div className="flex-1 overflow-y-auto p-2 flex flex-col gap-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loading && (
				<div className="flex justify-center py-4">
					<span className="loading loading-spinner"></span>
				</div>
			)}
		</div>
	);
};

export default Conversations;
