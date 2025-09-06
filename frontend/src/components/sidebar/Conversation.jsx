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
				style={{
					display: 'flex',
					gap: '12px',
					alignItems: 'center',
					padding: '12px',
					borderRadius: '12px',
					cursor: 'pointer',
					transition: 'all 0.2s ease',
					backgroundColor: isSelected ? 'rgba(59, 130, 246, 0.3)' : 'transparent',
					border: isSelected ? '1px solid rgba(59, 130, 246, 0.5)' : '1px solid transparent'
				}}
				onMouseEnter={(e) => {
					if (!isSelected) {
						e.target.style.backgroundColor = 'rgba(255,255,255,0.05)';
					}
				}}
				onMouseLeave={(e) => {
					if (!isSelected) {
						e.target.style.backgroundColor = 'transparent';
					}
				}}
			>
				<div style={{ position: 'relative' }}>
					<img
						src={conversation.profilePic}
						alt="user avatar"
						style={{
							width: '40px',
							height: '40px',
							borderRadius: '50%',
							objectFit: 'cover'
						}}
					/>
					{isOnline && (
						<span style={{
							position: 'absolute',
							bottom: '0',
							right: '0',
							width: '12px',
							height: '12px',
							backgroundColor: '#10b981',
							border: '2px solid #1f2937',
							borderRadius: '50%'
						}}></span>
					)}
				</div>

				<div style={{
					display: 'flex',
					flexDirection: 'column',
					flex: 1,
					minWidth: 0
				}}>
					<div style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}>
						<p style={{
							fontWeight: '600',
							color: 'white',
							margin: 0,
							fontSize: '14px',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap'
						}}>
							{conversation.fullName}
						</p>
						<span style={{ fontSize: '16px' }}>{emoji}</span>
					</div>
				</div>
			</div>

			{/* Divider between conversations */}
			{!lastIdx && (
				<div style={{
					height: '1px',
					backgroundColor: 'rgba(255,255,255,0.1)',
					margin: '8px 0'
				}} />
			)}
		</>
	);
};

export default Conversation;
