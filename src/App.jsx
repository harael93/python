
import CourseNavigator from './python-course-modules/CourseNavigator'
import './App.css'
import React, { useState, useEffect } from 'react';
import UsersModal from './users.jsx';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [initialProgress, setInitialProgress] = useState(null);

  // Check for token and full name on mount
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const fullName = localStorage.getItem("full_name");
    if (token && fullName) {
      setUser({ fullName });
    }
  }, []);

  // Handle login success from modal
  const handleLoginSuccess = async (username) => {
    // Get access token from localStorage
    const token = localStorage.getItem("access_token");
    let fullName = username;
    if (token) {
      try {
        const res = await fetch("https://0auth.deployedlogic.site/api/profile/", {
          headers: { "Authorization": `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          if (data.full_name) {
            fullName = data.full_name;
            localStorage.setItem("full_name", fullName);
          }
        }
      } catch {
        // Ignore profile fetch errors
      }
    }
    setUser({ fullName });
    setShowLogin(false);

    // Fetch progress from backend
    try {
      const resp = await fetch(`https://dbworker.liquidsoliddesign.workers.dev/progress/get?user_id=${encodeURIComponent(fullName)}`);
      if (resp.ok) {
        const data = await resp.json();
        if (data.completedLessons != null) {
          setInitialProgress(data.completedLessons);
        } else {
          setInitialProgress(null);
        }
      }
    } catch {
      setInitialProgress(null);
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    localStorage.removeItem("full_name");
    setUser(null);
  };

  return (
    <>
      <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        {/* Python Logo in its own flex box */}
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Learn Python for Free</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f3f4f6', borderRadius: 12, padding: '16px 24px', marginBottom: 4, boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
          <img src="/python.png" alt="Python Logo" style={{ width: 64, height: 64, objectFit: 'contain', display: 'block' }} />
        </div>
        <p style={{ fontSize: 16, color: '#374151', margin: 0 }}>several projects and resources on the basics</p>
        {user ? (
          <>
            <div style={{ marginTop: 12, fontWeight: 600, fontSize: 16, color: '#6366f1' }}>Welcome, {user.fullName}!</div>
            <button onClick={handleLogout} style={{ marginTop: 8, padding: '8px 18px', background: '#dc2626', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Logout</button>
          </>
        ) : (
          <button onClick={() => setShowLogin(true)} style={{ marginTop: 12, padding: '8px 18px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Login / Create Account</button>
        )}
      </header>
  <CourseNavigator user={user} initialProgress={initialProgress} />
      <UsersModal show={showLogin} onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />
    </>
  )
}

 

export default App
