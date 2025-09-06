import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div style={{
			marginTop: 'auto',
			display: 'flex',
			justifyContent: 'center',
			padding: '16px 0'
		}}>
			{!loading ? (
				<div
					onClick={logout}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '40px',
						height: '40px',
						borderRadius: '8px',
						backgroundColor: 'rgba(239, 68, 68, 0.1)',
						border: '1px solid rgba(239, 68, 68, 0.3)',
						cursor: 'pointer',
						transition: 'all 0.2s ease',
						color: 'white'
					}}
					onMouseEnter={(e) => {
						e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
						e.target.style.borderColor = 'rgba(239, 68, 68, 0.5)';
					}}
					onMouseLeave={(e) => {
						e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
						e.target.style.borderColor = 'rgba(239, 68, 68, 0.3)';
					}}
					title="Logout"
				>
					<BiLogOut style={{ fontSize: '20px' }} />
				</div>
			) : (
				<div style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '40px',
					height: '40px',
					borderRadius: '8px',
					backgroundColor: 'rgba(255,255,255,0.1)'
				}}>
					<div style={{
						width: '20px',
						height: '20px',
						border: '2px solid rgba(255,255,255,0.3)',
						borderTop: '2px solid white',
						borderRadius: '50%',
						animation: 'spin 1s linear infinite'
					}}></div>
				</div>
			)}
		</div>
	);
};

export default LogoutButton;
