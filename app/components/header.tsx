import Link from 'next/link';

export default function Header({
  fixed,
  transparent,
}: {
  fixed?: boolean;
  transparent?: boolean;
}) {
  return (
    <header
      className={`${fixed ? 'fixed' : ''} ${transparent ? 'animate-fade-out' : 'animate-fade-in bg-white'} z-50 flex w-full items-center justify-between px-8 py-4 md:px-16`}
    >
      <Link href="/">
        <div className="hidden font-seaweed text-3xl font-bold min-[425px]:block">
          Tagpuan + Lolo Dad&apos;s
        </div>
        <div className="font-seaweed text-3xl font-bold min-[425px]:hidden">
          T + LD&apos;s
        </div>
      </Link>
      <ul className="flex gap-4">
        <li className="transition ease-in-out hover:text-orange-400 hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="transition ease-in-out hover:text-orange-400 hover:underline">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}
