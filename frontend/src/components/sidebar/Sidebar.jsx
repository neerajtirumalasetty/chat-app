import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className="flex flex-col h-full bg-black/70 rounded-xl border border-gray-600 shadow-inner p-4 gap-4">
			{/* Search bar */}
			<div>
				<SearchInput />
			</div>

			{/* Divider */}
			<div className="border-b border-gray-700"></div>

			{/* Conversation list */}
			<div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
				<Conversations />
			</div>

			{/* Logout button */}
			<div className="mt-2">
				<LogoutButton />
			</div>
		</div>
	);
};

export default Sidebar;
