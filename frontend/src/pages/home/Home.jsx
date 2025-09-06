import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)',
      position: 'relative'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "url('/bg.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1,
        zIndex: 0
      }}></div>

      {/* Main Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: '20px',
        gap: '20px'
      }}>
        {/* Left Side - Chat Interface */}
        <div style={{
          flex: '1',
          display: 'flex',
          minWidth: '0',
          height: '100%'
        }}>
          <div style={{
            height: '100%',
            backgroundColor: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            display: 'flex',
            width: '100%'
          }}>
            <Sidebar />
            <MessageContainer />
          </div>
        </div>

        {/* Right Side - Background/Info Panel (Hidden on mobile) */}
        <div style={{
          width: '40%',
          height: '100%',
          display: 'none',
          '@media (min-width: 768px)': {
            display: 'block'
          }
        }}>
          <div style={{
            height: '100%',
            backgroundImage: "url('/bg.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(220,38,38,0.3) 0%, rgba(0,0,0,0.6) 100%)',
              borderRadius: '20px'
            }}></div>
            
            {/* Welcome Content */}
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '40px',
              right: '40px',
              color: 'white',
              zIndex: 2
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '16px',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
              }}>
                Welcome to ChatApp
              </h2>
              <p style={{
                fontSize: '1.1rem',
                opacity: 0.9,
                lineHeight: '1.6',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}>
                Connect with friends and start amazing conversations. 
                Your messages are secure and private.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
