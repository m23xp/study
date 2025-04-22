
import Link from 'next/link';

export default function DeveloperPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-purple-400">Meet the Developer</h1>
      <p className="text-lg mb-6 text-center">This platform was developed with passion to help students focus and grow.</p>
      <p className="text-lg">Contact the developer on Telegram:</p>
      <Link href="https://t.me/Xj_cd" className="text-purple-500 hover:underline mt-2">@Xj_cd</Link>
    </div>
  );
}
