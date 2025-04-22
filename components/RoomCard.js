import Link from 'next/link';
export default function RoomCard({ room }) {
  return (
    <div className="bg-secondary p-4 rounded-2xl shadow hover:shadow-lg transition">
      <h2 className="text-xl mb-2">{room.name}</h2>
      <Link href={`/rooms/${room.id}`}>
        <a className="btn">ادخل الغرفة</a>
      </Link>
    </div>
  );
}