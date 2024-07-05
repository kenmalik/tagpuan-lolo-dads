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
            <h1 className="text-center text-6xl font-bold text-orange-400">
              A cabin + restaurant in Sagada, Philippines
            </h1>
          </div>
        </section>
        <section className="mx-16 my-16 flex flex-col items-center">
          <h1 className="mb-8 text-4xl font-bold">What we do</h1>
          <p className="mb-8 italic">Do you want...</p>
          <ul className="mb-16">
            <li>Accommodation?</li>
            <li>Food?</li>
            <li>Bonfire?</li>
            <li>Tour arrangement?</li>
            <li>A great experience?</li>
          </ul>
          <p className="text-2xl font-bold">We gotchu!</p>
        </section>
      </main>
    </>
  );
}
