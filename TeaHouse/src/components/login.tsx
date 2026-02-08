import { useState } from 'react'; 
import { useNavigate, Link } from 'react-router-dom'; 
import { loginUser } from '../authentication'; 
import{auth} from '../firebase/firebase'

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [authing, setAuthing] = useState<boolean>(false);

    const navigate = useNavigate();
    const user = auth.currentUser;
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAuthing(true);
        setError('');

    try{
      await loginUser(email, password);
      navigate('/profile');
    } catch(err: any){
      alert("sign in error");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}
      style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '250px' }}
      >
        <input 
          type="email" 
          placeholder="Email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        
        <button type="submit" disabled={authing}>
          {authing ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};



export default LoginPage;