import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { loading, signup } = useSignup();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    } else if (form.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (!form.gender) {
      newErrors.gender = "Please select your gender";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    await signup(form);
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

      {/* Signup Card */}
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
              Join the Chat
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Create your account to start chatting
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                color: 'white', 
                marginBottom: '8px', 
                fontSize: '14px' 
              }}>
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: errors.fullName ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none'
                }}
                disabled={loading}
              />
              {errors.fullName && (
                <p style={{ 
                  color: '#ef4444', 
                  fontSize: '12px', 
                  marginTop: '4px' 
                }}>
                  {errors.fullName}
                </p>
              )}
            </div>

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
                placeholder="Choose a username"
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

            {/* Confirm Password */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                color: 'white', 
                marginBottom: '8px', 
                fontSize: '14px' 
              }}>
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: errors.confirmPassword ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none'
                }}
                disabled={loading}
              />
              {errors.confirmPassword && (
                <p style={{ 
                  color: '#ef4444', 
                  fontSize: '12px', 
                  marginTop: '4px' 
                }}>
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Gender Selection */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                color: 'white', 
                marginBottom: '8px', 
                fontSize: '14px' 
              }}>
                Gender
              </label>
              <div style={{ display: 'flex', gap: '20px' }}>
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: 'white', 
                  cursor: 'pointer' 
                }}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={form.gender === "male"}
                    onChange={handleChange}
                    style={{ accentColor: '#dc2626' }}
                    disabled={loading}
                  />
                  <span>Male</span>
                </label>
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: 'white', 
                  cursor: 'pointer' 
                }}>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={form.gender === "female"}
                    onChange={handleChange}
                    style={{ accentColor: '#dc2626' }}
                    disabled={loading}
                  />
                  <span>Female</span>
                </label>
              </div>
              {errors.gender && (
                <p style={{ 
                  color: '#ef4444', 
                  fontSize: '12px', 
                  marginTop: '4px' 
                }}>
                  {errors.gender}
                </p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '12px', 
              marginBottom: '20px',
              fontSize: '14px'
            }}>
              <input 
                type="checkbox" 
                style={{ accentColor: '#dc2626', marginTop: '2px' }}
                required 
              />
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                I agree to the{" "}
                <span style={{ color: '#f87171', cursor: 'pointer' }}>
                  Terms of Service
                </span>{" "}
                and{" "}
                <span style={{ color: '#f87171', cursor: 'pointer' }}>
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* Sign Up Button */}
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
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          {/* Sign In Link */}
          <div style={{ 
            textAlign: 'center', 
            paddingTop: '20px', 
            borderTop: '1px solid rgba(255,255,255,0.1)' 
          }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Already have an account?{" "}
              <Link 
                to="/login" 
                style={{ 
                  color: '#f87171', 
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
