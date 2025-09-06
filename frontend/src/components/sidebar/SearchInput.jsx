import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) =>
			c.fullName.toLowerCase().includes(search.toLowerCase())
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: '8px',
				width: '100%',
				backgroundColor: 'rgba(31, 41, 55, 0.8)',
				borderRadius: '12px',
				padding: '8px',
				border: '1px solid rgba(255,255,255,0.1)'
			}}
		>
			<input
				type="text"
				placeholder="Search…"
				style={{
					flex: 1,
					backgroundColor: 'transparent',
					color: 'white',
					border: 'none',
					outline: 'none',
					padding: '8px 12px',
					fontSize: '14px',
					borderRadius: '8px'
				}}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				type="submit"
				style={{
					backgroundColor: '#3b82f6',
					color: 'white',
					border: 'none',
					borderRadius: '8px',
					padding: '8px',
					cursor: 'pointer',
					transition: 'all 0.2s ease',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
				onMouseEnter={(e) => {
					e.target.style.backgroundColor = '#2563eb';
				}}
				onMouseLeave={(e) => {
					e.target.style.backgroundColor = '#3b82f6';
				}}
			>
				<IoSearchSharp style={{ fontSize: '16px' }} />
			</button>
		</form>
	);
};

export default SearchInput;
