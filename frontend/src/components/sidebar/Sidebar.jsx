import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			width: '320px',
			minWidth: '320px',
			backgroundColor: 'rgba(0,0,0,0.3)',
			backdropFilter: 'blur(10px)',
			borderRight: '1px solid rgba(255,255,255,0.1)',
			padding: '20px',
			gap: '20px'
		}}>
			{/* Header */}
			<div style={{
				display: 'flex',
				alignItems: 'center',
				gap: '12px',
				marginBottom: '10px'
			}}>
				<div style={{
					width: '40px',
					height: '40px',
					backgroundColor: '#dc2626',
					borderRadius: '12px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					boxShadow: '0 4px 12px rgba(220,38,38,0.3)'
				}}>
					<svg width="20" height="20" fill="white" viewBox="0 0 24 24">
						<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
					</svg>
				</div>
				<h2 style={{
					color: 'white',
					fontSize: '1.5rem',
					fontWeight: 'bold',
					margin: 0
				}}>
					ChatApp
				</h2>
			</div>

			{/* Search bar */}
			<div>
				<SearchInput />
			</div>

			{/* Divider */}
			<div style={{
				height: '1px',
				backgroundColor: 'rgba(255,255,255,0.1)',
				margin: '10px 0'
			}}></div>

			{/* Conversation list */}
			<div style={{
				flex: 1,
				overflowY: 'auto',
				paddingRight: '8px'
			}}>
				<Conversations />
			</div>

			{/* Logout button */}
			<div style={{ marginTop: '10px' }}>
				<LogoutButton />
			</div>
		</div>
	);
};

export default Sidebar;
