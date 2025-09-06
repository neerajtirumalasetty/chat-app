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
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			backgroundColor: 'rgba(0,0,0,0.2)',
			backdropFilter: 'blur(10px)',
			overflow: 'hidden'
		}}>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div style={{
						backgroundColor: 'rgba(255,255,255,0.05)',
						padding: '16px 20px',
						borderBottom: '1px solid rgba(255,255,255,0.1)',
						display: 'flex',
						alignItems: 'center',
						gap: '12px'
					}}>
						<div style={{
							width: '40px',
							height: '40px',
							borderRadius: '50%',
							backgroundColor: '#dc2626',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: 'white',
							fontWeight: 'bold',
							fontSize: '16px'
						}}>
							{selectedConversation.fullName?.charAt(0)?.toUpperCase()}
						</div>
						<div>
							<div style={{
								color: 'white',
								fontWeight: 'bold',
								fontSize: '16px'
							}}>
								{selectedConversation.fullName}
							</div>
							<div style={{
								color: 'rgba(255,255,255,0.6)',
								fontSize: '12px'
							}}>
								Online
							</div>
						</div>
					</div>

					{/* Messages area */}
					<div style={{
						flex: 1,
						overflowY: 'auto',
						padding: '20px',
						display: 'flex',
						flexDirection: 'column',
						gap: '12px'
					}}>
						<Messages />
					</div>

					{/* Message input */}
					<div style={{
						padding: '20px',
						borderTop: '1px solid rgba(255,255,255,0.1)',
						backgroundColor: 'rgba(255,255,255,0.02)'
					}}>
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
		<div style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',
			height: '100%',
			background: 'linear-gradient(135deg, rgba(220,38,38,0.1) 0%, rgba(0,0,0,0.3) 100%)'
		}}>
			<div style={{
				textAlign: 'center',
				color: 'white',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '20px',
				padding: '40px'
			}}>
				<div style={{
					width: '80px',
					height: '80px',
					backgroundColor: 'rgba(220,38,38,0.2)',
					borderRadius: '50%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: '10px'
				}}>
					<TiMessages style={{ fontSize: '40px', color: '#dc2626' }} />
				</div>
				<div>
					<h3 style={{
						fontSize: '1.5rem',
						fontWeight: 'bold',
						marginBottom: '8px',
						color: 'white'
					}}>
						Welcome back, {authUser?.fullName}! 👋
					</h3>
					<p style={{
						fontSize: '1rem',
						color: 'rgba(255,255,255,0.7)',
						margin: 0
					}}>
						Select a conversation to start messaging
					</p>
				</div>
			</div>
		</div>
	);
};
