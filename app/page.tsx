import Image from 'next/image';
import Header from './components/header';

export default function Home() {
  return (
    <>
      <Header fixed />
      <main>
        <section className="h-screen">
          <Image
            alt="Exterior of Lolo Dad's cabin"
            src="/images/cabin-exterior.jpg"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
          <div className="absolute flex h-full w-full items-center justify-center p-12">
            <h1 className="text-center text-6xl font-bold text-white">
              A cabin in Sagada
            </h1>
          </div>
        </section>
        <div>More test content</div>
      </main>
    </>
  );
}
