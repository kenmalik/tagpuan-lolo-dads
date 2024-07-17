import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-stone-800 p-12 text-stone-100">
      <div className="mb-12 flex gap-4">
        <a
          href="https://www.facebook.com/profile.php?id=100090739232847"
          target="_blank"
          rel="noopener noreferrer"
          className="size-8 bg-[#4267B2] p-1"
        >
          <Image
            src="/logos/Facebook_Logo_Secondary.png"
            alt="Facebook logo"
            height={24}
            width={24}
          />
        </a>
        <a
          href="https://www.instagram.com/ginuwinetagpuan"
          target="_blank"
          rel="noopener noreferrer"
          className="size-8 bg-[#E1306C] p-1"
        >
          <Image
            src="/logos/Instagram_Glyph_White.svg"
            alt="Instagram logo"
            height={24}
            width={24}
          />
        </a>
      </div>
      <div className="mb-12 text-center">
        <h2 className="font-bold">Hours</h2>
        <p className="mb-2">6:00 AM - 10:00 PM (Daily)</p>
        <h2 className="font-bold">Address</h2>
        <p>
          <a
            href="https://www.google.com/maps/place/Ginuwine+Tagpuan/@17.0887801,120.9153032,19.54z/data=!4m6!3m5!1s0x338fd3bfa239c313:0xa08c25905bdcd762!8m2!3d17.088947!4d120.9156229!16s%2Fg%2F11srzdp44s?entry=ttu"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:underline"
          >
            Kiltepan Road 2619 Sagada, Philippines
          </a>
        </p>
      </div>
      <h1 className="mb-12 text-center font-seaweed text-3xl font-bold">
        Ginuwine Tagpuan + Lolo Dad&apos;s
      </h1>
    </footer>
  );
}
