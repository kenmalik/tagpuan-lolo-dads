'use client';

import Gallery from './components/gallery';
import Header from './components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header fixed />
      <main className="mb-32">
        <section className="h-screen bg-[url('/images/tagpuan/restaurant-exterior.jpg')] bg-cover bg-fixed bg-center">
          <div className="absolute flex h-full w-full flex-col items-center justify-center p-12 md:p-24 lg:p-64">
            <h1 className="mb-6 text-center text-5xl font-bold text-orange-400 sm:text-6xl md:text-7xl lg:text-8xl">
              A cabin + restaurant in Sagada, Philippines
            </h1>
            <div className="flex w-2/5 flex-col gap-4 text-center text-white md:w-1/3 md:text-lg lg:w-1/4 lg:text-xl">
              <a
                href="#tagpuan"
                className="w-full border-b-2 border-white p-1 transition ease-in-out hover:border-orange-700 hover:text-orange-700"
              >
                Ginuwine Tagpuan
              </a>
              <a
                href="#lolo-dads"
                className="w-full border-b-2 border-white p-1 transition ease-in-out hover:border-orange-700 hover:text-orange-700"
              >
                Lolo Dad's Cabin
              </a>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="mx-8 mb-64 mt-24 flex flex-col items-center"
        >
          <h1 className="mb-12 text-4xl font-bold md:text-5xl">What we do</h1>
          <p className="mb-8 text-lg italic">Do you want...</p>
          <ul className="mb-8 text-lg">
            <li>Accommodation?</li>
            <li>Food?</li>
            <li>Bonfire?</li>
            <li>Tour arrangement?</li>
            <li>A great experience?</li>
          </ul>
          <p className="text-3xl font-bold md:text-4xl">We gotchu!</p>
        </section>
        <section
          id="tagpuan"
          className="mx-8 mb-64 mt-24 sm:mx-24 md:mx-36 lg:mx-56 xl:mx-72 2xl:mx-96 3xl:mx-128"
        >
          <h1 className="mb-12 text-center font-seaweed text-4xl font-bold md:text-5xl">
            Ginuwine Tagpuan
          </h1>
          <div className="mb-8 border-2 p-2">
            <Gallery>
              <img src="/images/tagpuan/restaurant-exterior.jpg" />
            </Gallery>
          </div>
          <div className="sm:px-10 lg:px-20 2xl:px-36">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut a,
              ad suscipit iusto dignissimos animi, dolores et at quo temporibus
              quia ullam recusandae maiores porro itaque! Vitae ex numquam cum!
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <Link
              href="/about"
              className="border-2 border-orange-400 px-8 py-2 transition ease-in-out hover:border-orange-300 hover:text-orange-400"
            >
              Grab a meal!
            </Link>
          </div>
        </section>
        <section
          id="lolo-dads"
          className="mx-8 mb-64 mt-24 sm:mx-24 md:mx-36 lg:mx-56 xl:mx-72 2xl:mx-96 3xl:mx-128"
        >
          <h1 className="mb-12 text-center font-seaweed text-4xl font-bold md:text-5xl">
            Lolo Dad's Cabin
          </h1>
          <div className="mb-8 border-2 p-2">
            <Gallery>
              <img src="/images/lolo-dads/cabin-approach.jpg" />
              <img src="/images/lolo-dads/cabin-lighting.jpg" />
              <img src="/images/lolo-dads/cabin-patio.jpg" />
            </Gallery>
          </div>
          <div className="sm:px-10 lg:px-20 2xl:px-36">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              cum rem pariatur molestias nihil cupiditate omnis perferendis quam
              voluptas voluptate modi suscipit, consequatur ullam, corrupti eum
              voluptates officia. Nisi, quo.
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <Link
              href="/about"
              className="border-2 border-orange-400 px-8 py-2 transition ease-in-out hover:border-orange-300 hover:text-orange-400"
            >
              Stay the night!
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
