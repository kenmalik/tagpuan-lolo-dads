import Link from 'next/link';

export default function Header({ fixed }: { fixed?: boolean }) {
  return (
    <header
      className={`${fixed ? 'fixed' : ''} z-50 flex w-full items-center justify-between bg-white px-8 py-4`}
    >
      <Link href="/">
        <div className="font-seaweed text-3xl font-bold">
          Tagpuan + Lolo Dad's
        </div>
      </Link>
      <ul className="flex gap-4">
        <li className="transition ease-in-out hover:text-orange-400 hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="transition ease-in-out hover:text-orange-400 hover:underline">
          <Link href="/about">About</Link>
        </li>
        <li className="transition ease-in-out hover:text-orange-400 hover:underline">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
