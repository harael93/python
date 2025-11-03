import React, { useState } from "react";

const API_BASE = "https://0auth.deployedlogic.site/api"; // OAuth/Django backend

function UsersModal({ show, onClose }) {
	const [tab, setTab] = useState("login");
	const [loginData, setLoginData] = useState({ username: "", password: "" });
	const [registerData, setRegisterData] = useState({ username: "", email: "", password: "" });
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	if (!show) return null;

	const handleChange = (e, type) => {
		const { name, value } = e.target;
		if (type === "login") setLoginData({ ...loginData, [name]: value });
		else setRegisterData({ ...registerData, [name]: value });
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		setError(""); setSuccess("");
		try {
			const res = await fetch(`${API_BASE}/token/`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(loginData),
			});
			const data = await res.json();
			if (res.ok && data.access) {
				localStorage.setItem("access_token", data.access);
				setSuccess("Login successful!");
				onClose();
			} else {
				setError(data.detail || "Login failed");
			}
		} catch {
			setError("Network error");
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		setError(""); setSuccess("");
		try {
			const res = await fetch(`${API_BASE}/register/`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(registerData),
			});
			const data = await res.json();
			if (res.ok) {
				setSuccess("Account created! You can now log in.");
				setTab("login");
			} else {
				setError(data.detail || "Registration failed");
			}
		} catch {
			setError("Network error");
		}
	};

	return (
		<div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
			<div style={{ background: "#fff", borderRadius: 8, padding: 32, minWidth: 320, boxShadow: "0 2px 16px rgba(0,0,0,0.12)" }}>
				<div style={{ display: "flex", marginBottom: 24 }}>
					<button onClick={() => setTab("login")} style={{ flex: 1, padding: 8, fontWeight: tab === "login" ? "bold" : "normal", borderBottom: tab === "login" ? "2px solid #6366f1" : "2px solid #eee", background: "none", borderTop: "none", borderLeft: "none", borderRight: "none" }}>Login</button>
					<button onClick={() => setTab("register")} style={{ flex: 1, padding: 8, fontWeight: tab === "register" ? "bold" : "normal", borderBottom: tab === "register" ? "2px solid #6366f1" : "2px solid #eee", background: "none", borderTop: "none", borderLeft: "none", borderRight: "none" }}>Create Account</button>
				</div>
				{tab === "login" ? (
					<form onSubmit={handleLogin}>
						<input name="username" value={loginData.username} onChange={e => handleChange(e, "login")}
							placeholder="Username" style={{ width: "100%", marginBottom: 12, padding: 8 }} required />
						<input name="password" type="password" value={loginData.password} onChange={e => handleChange(e, "login")}
							placeholder="Password" style={{ width: "100%", marginBottom: 12, padding: 8 }} required />
						<button type="submit" style={{ width: "100%", padding: 10, background: "#6366f1", color: "#fff", border: "none", borderRadius: 4 }}>Login</button>
					</form>
				) : (
					<form onSubmit={handleRegister}>
						<input name="username" value={registerData.username} onChange={e => handleChange(e, "register")}
							placeholder="Username" style={{ width: "100%", marginBottom: 12, padding: 8 }} required />
						<input name="email" type="email" value={registerData.email} onChange={e => handleChange(e, "register")}
							placeholder="Email" style={{ width: "100%", marginBottom: 12, padding: 8 }} required />
						<input name="password" type="password" value={registerData.password} onChange={e => handleChange(e, "register")}
							placeholder="Password" style={{ width: "100%", marginBottom: 12, padding: 8 }} required />
						<button type="submit" style={{ width: "100%", padding: 10, background: "#6366f1", color: "#fff", border: "none", borderRadius: 4 }}>Create Account</button>
					</form>
				)}
				{error && <div style={{ color: "#dc2626", marginTop: 12 }}>{error}</div>}
				{success && <div style={{ color: "#16a34a", marginTop: 12 }}>{success}</div>}
				<button onClick={onClose} style={{ marginTop: 24, background: "none", color: "#6366f1", border: "none", cursor: "pointer" }}>Close</button>
			</div>
		</div>
	);
}

export default UsersModal;
