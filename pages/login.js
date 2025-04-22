import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    router.push('/dashboard');
  };
  return (
    <div className="flex items-center justify-center h-screen bg-secondary">
      <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-2xl shadow-md w-80">
        <h1 className="text-2xl mb-4 text-center">تسجيل دخول</h1>
        <input placeholder="اسم المستخدم" value={username} onChange={(e)=>setUsername(e.target.value)} className="w-full mb-4 p-2 rounded-lg text-black"/>
        <input placeholder="كلمة المرور" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full mb-4 p-2 rounded-lg text-black"/>
        <button type="submit" className="btn w-full">دخول</button>
      </form>
    </div>
  );
}