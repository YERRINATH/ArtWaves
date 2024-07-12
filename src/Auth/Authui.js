import React from "react";
import * as Components from './Components';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Login() {
  const [signIn, toggle] = React.useState(true);
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Firebase UID:", user.uid); 
      await axios.post('/api/user/login', { uid: user.uid });
      const previousUrl = window.history.length > 1 ? window.history.back() : '/';
      navigate(previousUrl);
    } catch (error) {
      setError(error.message);
      alert('Invalid email or password');
    }
  };
  
  
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        alert('Passwords do not match.');
        return;
      }
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      window.location.reload(); // Reload the page after successful registration
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type='text' placeholder='Name' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Components.Input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <Components.Button onClick={handleRegister}>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
            <Components.Button onClick={handleLogin}>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default Login;