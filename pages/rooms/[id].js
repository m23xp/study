import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Leaderboard from '../../components/Leaderboard';
export default function Room() {
  const router = useRouter();
  const { id } = router.query;
  const username = typeof window !== 'undefined' ? localStorage.getItem('username') : '';
  const key = `timer_${id}_${username}`;
  const lbKey = `leaderboard_${id}`;
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const saved = parseInt(localStorage.getItem(key) || '0',10);
    setSeconds(saved);
    const interval = setInterval(() => {
      setSeconds(prev => {
        const next = prev +1;
        localStorage.setItem(key, next);
        const lb = JSON.parse(localStorage.getItem(lbKey) || '{}');
        lb[username] = next;
        localStorage.setItem(lbKey, JSON.stringify(lb));
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [id]);
  const format = s=>String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');
  const inviteLink = typeof window!=='undefined'? window.location.href : '';
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">الغرفة: {id}</h1>
      <div className="mb-4 flex gap-2">
        <input readOnly value={inviteLink} className="p-2 rounded-lg text-black flex-1"/>
        <button onClick={()=>navigator.clipboard.writeText(inviteLink)} className="btn">نسخ رابط</button>
      </div>
      <div className="flex gap-8">
        <div className="text-6xl">{format(seconds)}</div>
        <Leaderboard id={id}/>
      </div>
    </div>
  );
}