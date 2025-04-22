import { useState, useEffect } from 'react';
export default function Leaderboard({ id }) {
  const lbKey = `leaderboard_${id}`;
  const [data, setData] = useState([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(lbKey) || '{}');
    const arr = Object.entries(saved).sort((a,b)=>b[1]-a[1]);
    setData(arr);
  }, []);
  return (
    <div className="bg-secondary p-4 rounded-2xl shadow w-48">
      <h2 className="text-xl mb-2">الليدربورد</h2>
      {data.map(([user, sec])=>(
        <div key={user} className="flex justify-between">
          <span>{user}</span><span>{Math.floor(sec/60)}:{String(sec%60).padStart(2,'0')}</span>
        </div>
      ))}
    </div>
  );
}