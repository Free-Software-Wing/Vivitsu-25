import { useState } from 'react';

const ADMIN_USERNAME = 'freesoftwarewing';
const ADMIN_PASSWORD = 'freesoftwarewingns';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setError('');
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #00f7ff 0%, #0099cc 100%)' }}>
      <form onSubmit={handleSubmit} style={{ background: 'rgba(0,0,0,0.7)', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.2)', width: '320px' }}>
        <h2 style={{ color: '#00f7ff', marginBottom: '24px', textAlign: 'center' }}>Admin Login</h2>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ color: 'white', display: 'block', marginBottom: '8px' }}>Username</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #00f7ff', background: 'rgba(255,255,255,0.1)', color: 'white' }} />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ color: 'white', display: 'block', marginBottom: '8px' }}>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #00f7ff', background: 'rgba(255,255,255,0.1)', color: 'white' }} />
        </div>
        {error && <div style={{ color: 'red', marginBottom: '16px', textAlign: 'center' }}>{error}</div>}
        <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '6px', background: '#00f7ff', color: 'black', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
