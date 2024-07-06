export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gray-200 p-12">
      <div className="mb-12 flex gap-4">
        <a
          href="https://www.facebook.com/profile.php?id=100090739232847"
          rel="noopener noreferrer"
          className="size-8 bg-[#4267B2] p-1"
        >
          <img src="/logos/Facebook_Logo_Secondary.png" />
        </a>
        <a
          href="https://www.instagram.com/ginuwinetagpuan"
          rel="noopener noreferrer"
          className="size-8 bg-[#E1306C] p-1"
        >
          <img src="/logos/Instagram_Glyph_White.svg" />
        </a>
      </div>
      <div className="mb-12 text-center">
        <h2 className="font-bold">Hours</h2>
        <p className="mb-2">6:00 AM - 10:00 PM (Daily)</p>
        <h2 className="font-bold">Address</h2>
        <p>Kiltepan Road 2619 Sagada, Philippines</p>
      </div>
      <h1 className="mb-12 text-center font-seaweed text-3xl font-bold">
        Ginuwine Tagpuan + Lolo Dad&apos;s
      </h1>
    </footer>
  );
}
