import { useState, useEffect } from 'react';
import RoomCard from '../components/RoomCard';
export default function Dashboard() {
  const [rooms, setRooms] = useState([]);
  const [search, setSearch] = useState('');
  const username = typeof window !== 'undefined' ? localStorage.getItem('username') : '';
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('rooms') || '[]');
    setRooms(stored);
  }, []);
  const createRoom = () => {
    const id = Date.now().toString();
    const newRoom = { id, name: `غرفة_${id}` };
    const updated = [...rooms, newRoom];
    setRooms(updated);
    localStorage.setItem('rooms', JSON.stringify(updated));
  };
  const filtered = rooms.filter(r=>r.name.includes(search));
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">مرحبا، {username}</h1>
      <div className="flex gap-2 mb-4">
        <button onClick={createRoom} className="btn">إنشاء غرفة</button>
        <input placeholder="ابحث" value={search} onChange={e=>setSearch(e.target.value)} className="p-2 rounded-lg text-black"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(r=> <RoomCard key={r.id} room={r} />)}
      </div>
    </div>
  );
}