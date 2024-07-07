'use client';

import { useEffect, useState } from 'react';
import Gallery from './components/gallery';
import Header from './components/header';
import Link from 'next/link';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    const position = window.scrollY;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header fixed transparent={scrollPosition < 200} />
      <main className="mb-32">
        <section className="h-screen bg-[url('/images/tagpuan/restaurant-exterior.jpg')] bg-cover bg-center sm:bg-fixed">
          <div className="absolute flex h-full w-full flex-col items-center justify-center p-12 md:p-24 lg:p-64">
            <h1 className="mb-6 text-center text-5xl font-bold text-orange-400 sm:text-6xl md:text-7xl lg:text-8xl">
              A cabin + restaurant in Sagada, Philippines
            </h1>
            <div className="flex w-2/5 flex-col gap-4 text-center text-orange-100 md:w-1/3 md:text-lg lg:w-1/4 lg:text-xl">
              <a
                href="#tagpuan"
                className="w-full border-b-2 border-orange-100 p-1 transition ease-in-out hover:border-orange-700 hover:text-orange-700"
              >
                Ginuwine Tagpuan
              </a>
              <a
                href="#lolo-dads"
                className="w-full border-b-2 border-orange-100 p-1 transition ease-in-out hover:border-orange-700 hover:text-orange-700"
              >
                Lolo Dad&apos;s Cabin
              </a>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="x-8 mb-64 mt-24 flex flex-col items-center text-center sm:mx-24 md:mx-36 lg:mx-56 xl:mx-72 2xl:mx-96 3xl:mx-128"
        >
          <h1 className="mb-16 text-4xl font-bold md:text-5xl">What we do</h1>
          <p className="mb-2 text-lg italic">Do you want...</p>
          <ul className="mb-16 text-lg">
            <li>Accommodation?</li>
            <li>Delicious food?</li>
            <li>A warm bonfire?</li>
            <li>Local tour guide?</li>
            <li>A great experience?</li>
          </ul>
          <p className="mb-12 text-3xl font-bold md:text-4xl">We gotchu!</p>
          <p className="md:text-1xl mx-8 text-xl sm:mx-10 md:mx-14 lg:mx-20 xl:mx-28 2xl:mx-36 3xl:mx-48">
            Just come visit our retreat in the mountains of the beautiful
            Sagada, Mountain Province.
          </p>
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
              <img src="/images/tagpuan/patio-day.jpeg" />
              <img src="/images/tagpuan/patio-light.jpeg" />
            </Gallery>
          </div>
          <div className="sm:px-10 lg:px-20 2xl:px-36">
            <p>
              Grab a bite to eat at Ginuwine Tagpuan! Our patio dining area
              provides an intimate space for adventurers to relax and mingle.
              Meals can range from classic Pinoy soul food to explorations by
              our in-cabin chefs.
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <Link
              href="/about"
              className="border-2 border-orange-400 px-8 py-2 transition ease-in-out hover:border-orange-300 hover:text-orange-400"
            >
              Dine with us!
            </Link>
          </div>
        </section>
        <section
          id="lolo-dads"
          className="mx-8 mb-64 mt-24 sm:mx-24 md:mx-36 lg:mx-56 xl:mx-72 2xl:mx-96 3xl:mx-128"
        >
          <h1 className="mb-12 text-center font-seaweed text-4xl font-bold md:text-5xl">
            Lolo Dad&apos;s Cabin
          </h1>
          <div className="mb-8 border-2 p-2">
            <Gallery>
              <img src="/images/lolo-dads/cabin-three-quarters.jpg" />
              <img src="/images/lolo-dads/cabin-approach.jpg" />
              <img src="/images/lolo-dads/cabin-living.jpg" />
              <img src="/images/lolo-dads/cabin-entrance-interior.jpg" />
              <img src="/images/lolo-dads/cabin-lighting.jpg" />
              <img src="/images/lolo-dads/cabin-patio.jpg" />
            </Gallery>
          </div>
          <div className="mb-8 sm:px-10 lg:px-20 2xl:px-36">
            <p>
              Welcome to Lolo Dad&apos;s Cabin! Use it as a basecamp for your
              mountain excursions. Our four double beds can sleep up to eight.
              For the deep sleepers there&apos;s also a couch and plenty of
              floor space.
            </p>
          </div>
          <ul className="flex flex-col items-center justify-center gap-4 text-neutral-600 sm:flex-row">
            <li className="flex items-center gap-4">
              <img src="/icons/wifi-orange.svg" alt="Wifi symbol" />
              Wifi available
            </li>
            <li className="hidden sm:block">|</li>
            <li className="flex items-center gap-4">
              <img src="/icons/bed-orange.svg" alt="Bed icon" />4 Beds
            </li>
            <li className="hidden sm:block">|</li>
            <li className="flex items-center gap-4">
              <img src="/icons/shower-orange.svg" alt="Showerhead icon" />1 Bath
            </li>
          </ul>
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
