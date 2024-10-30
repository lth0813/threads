import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link 임포트
import '../css/SignupPage.css';

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const isButtonEnabled = username.trim() !== '' && password.trim() !== '' && phone.trim() !== '' && email.trim() !== '';

  return (
    <div className="signup-container">
      <Link to="/login" className="signup-thumbnail-space"></Link> {/* 썸네일 이미지 링크 추가 */}

      <form method="POST" className="signup-form">
        <input
          type="text"
          placeholder="아이디"
          className="signup-input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="signup-input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="tel"
          placeholder="전화번호"
          className="signup-input-field"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="이메일"
          className="signup-input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className={`signup-button ${isButtonEnabled ? 'enabled' : ''}`}
          disabled={!isButtonEnabled}
        >
          회원가입 완료
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
