export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gray-200 p-8">
      <div className="mb-4">Tagpuan + Lolo Dad's</div>
      <div className="flex gap-4">
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
    </footer>
  );
}
