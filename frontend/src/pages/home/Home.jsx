import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-black">
      {/* Left side - chat content */}
      <div className="flex flex-col w-full md:w-1/2 p-4 md:p-8 justify-center bg-black bg-opacity-50 backdrop-blur-md">
        <div className="flex flex-col h-full rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
          <Sidebar />
          <MessageContainer className="flex-1" />
        </div>
      </div>

      {/* Right side - background image */}
      <div
        className="hidden md:block w-1/2 h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.png')" }}
      ></div>
    </div>
  );
};

export default Home;
