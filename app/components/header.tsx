import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4">
      <div className="text-3xl font-bold">Tagpuan + Lolo Dad's</div>
      <ul className="flex gap-4">
        <li className="transition ease-in-out hover:text-orange-700">
          <Link href="#">Home</Link>
        </li>
        <li className="transition ease-in-out hover:text-orange-700">
          <Link href="#">About</Link>
        </li>
        <li className="transition ease-in-out hover:text-orange-700">
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
