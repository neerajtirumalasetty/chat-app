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
		<div style={{
			display: 'flex',
			flexDirection: fromMe ? 'row-reverse' : 'row',
			alignItems: 'flex-end',
			gap: '8px',
			marginBottom: '12px',
			padding: '0 8px'
		}}>
			{/* Avatar */}
			<div style={{
				width: '32px',
				height: '32px',
				borderRadius: '50%',
				overflow: 'hidden',
				flexShrink: 0
			}}>
				<img 
					alt="user avatar" 
					src={profilePic} 
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>

			{/* Message content */}
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: fromMe ? 'flex-end' : 'flex-start',
				maxWidth: '70%'
			}}>
				{/* Bubble */}
				<div style={{
					backgroundColor: fromMe ? '#3b82f6' : '#374151',
					color: 'white',
					padding: '8px 12px',
					borderRadius: '18px',
					fontSize: '14px',
					lineHeight: '1.4',
					wordWrap: 'break-word',
					...(message.shouldShake && { animation: 'shake 0.82s cubic-bezier(0.36,0.07,0.19,0.97) 0.2s both' })
				}}>
					{message.message}
				</div>

				{/* Timestamp */}
				<div style={{
					fontSize: '11px',
					color: 'rgba(255,255,255,0.5)',
					marginTop: '4px',
					padding: '0 4px'
				}}>
					{formattedTime}
				</div>
			</div>
		</div>
	);
};

export default Message;
