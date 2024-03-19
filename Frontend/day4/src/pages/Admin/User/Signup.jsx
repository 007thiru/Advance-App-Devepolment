import  { useState } from 'react';
import { Link,} from 'react-router-dom'; 
import '../../../assets/Design/Signup.css';
import Lottie from 'lottie-react';
import animation2 from '../../../assets/Animations/animation2.json';
import Navbar from '../../../components/UI/Navbar';
import Footer from '../../../components/UI/Footer';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  // const history = useHistory(); 

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!username || !email || !password || !confirmPassword) {
     
      setSignupError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {

      setSignupError('Passwords do not match.');
      return;
    }

    console.log('Signup data:', { username, email, password });

    
    // history.push('/dashboard');
  };

  return (
    <div>
     <Navbar/>
     <Lottie animationData={animation2} style={{position:'absolute',height:'700px',width:'700px',top:'15%',left:'15%'}}></Lottie>
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        {signupError && <div className="error-message">{signupError}</div>} 
        <div className="form-group">
          <button type="submit">Signup</button>
        </div>
        <div className="sign">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Signup;
