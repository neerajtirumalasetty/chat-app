import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin.js";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { loading, login } = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    }
    
    if (!form.password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    await login(form.username, form.password);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#000',
      backgroundImage: "url('/bg.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)'
      }}></div>

      {/* Login Card */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '400px',
        margin: '0 20px'
      }}>
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '10px' 
            }}>
              Welcome Back
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Sign in to continue your conversations
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                color: 'white', 
                marginBottom: '8px', 
                fontSize: '14px' 
              }}>
                Username
              </label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter your username"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: errors.username ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none'
                }}
                disabled={loading}
              />
              {errors.username && (
                <p style={{ 
                  color: '#ef4444', 
                  fontSize: '12px', 
                  marginTop: '4px' 
                }}>
                  {errors.username}
                </p>
              )}
            </div>

            {/* Password */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                color: 'white', 
                marginBottom: '8px', 
                fontSize: '14px' 
              }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: errors.password ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none'
                }}
                disabled={loading}
              />
              {errors.password && (
                <p style={{ 
                  color: '#ef4444', 
                  fontSize: '12px', 
                  marginTop: '4px' 
                }}>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                backgroundColor: loading ? '#9ca3af' : '#dc2626',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              {loading && (
                <div style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTop: '2px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
              )}
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Sign Up Link */}
          <div style={{ 
            textAlign: 'center', 
            paddingTop: '20px', 
            borderTop: '1px solid rgba(255,255,255,0.1)' 
          }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Don't have an account?{" "}
              <Link 
                to="/signup" 
                style={{ 
                  color: '#f87171', 
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                Create one now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;