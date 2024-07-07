'use client';

import Header from '../components/header';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-12">
        <section
          id="contact"
          className="mx-8 mb-64 mt-24 flex flex-col items-center sm:mx-24 md:mx-36 lg:mx-56 xl:mx-72 2xl:mx-96 3xl:mx-128"
        >
          <h1 className="mb-12 text-center text-4xl font-bold">
            Get in contact
          </h1>
          <h2 className="mb-6 text-center text-2xl font-bold">
            Follow our socials for announcements
          </h2>
          <ul className="mb-12">
            <li className="mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=100090739232847"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-4 text-orange-400 underline"
              >
                <Image
                  src="/logos/Facebook_Logo_Secondary.png"
                  alt="Facebook logo"
                  className="size-8 bg-[#4267B2] p-1"
                  height={24}
                  width={24}
                />
                Facebook @ Tagpuan • Lolo Dad&apos;s Cabin
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ginuwinetagpuan"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-4 text-orange-400 underline"
              >
                <Image
                  src="/logos/Instagram_Glyph_White.svg"
                  alt="Instagram logo"
                  className="size-8 bg-[#E1306C] p-1"
                  height={24}
                  width={24}
                />
                Instagram @ ginuwinetagpuan
              </a>
            </li>
          </ul>
          <h2 className="mb-6 text-center text-2xl font-bold">
            For bookings and other inquiries
          </h2>
          <p className="mb-4">
            <a
              href="https://www.airbnb.com/rooms/1026340786374688018?adults=1&children=0&enable_m3_private_room=true&infants=0&location=Sagada%2C%20Mountain%20Province%2C%20Philippines&pets=0&search_mode=regular_search&check_in=2024-09-01&check_out=2024-09-06&source_impression_id=p3_1720248795_P30QcgH5h2I59h2_&previous_page_section_name=1001&federated_search_id=2ff7fa67-bc9b-47bf-8940-ec4ff59e9dc6"
              rel="noopener noreferrer"
              target="_blank"
              className="text-orange-400 underline"
            >
              Book Lolo Dad&apos;s Cabin with Airbnb
            </a>
          </p>
          <p className="mb-4">
            <a
              href="http://m.me/116202901407787"
              rel="noopener noreferrer"
              target="_blank"
              className="text-orange-400 underline"
            >
              Message us with Facebook Messenger
            </a>
          </p>
          <p className="mb-4">
            <a
              href="mailto:bnbtagpuan@gmail.com"
              target="_blank"
              className="text-orange-400 underline"
            >
              bnbtagpuan@gmail.com
            </a>
          </p>
          <p>+63 (927) 546-6600</p>
        </section>
        <section
          id="location"
          className="mx-8 mb-64 mt-24 flex flex-col items-center sm:mx-24 md:mx-36 lg:mx-56 xl:mx-72 2xl:mx-96 3xl:mx-128"
        >
          <h1 className="mb-12 text-center text-4xl font-bold">
            Where to find us
          </h1>
          <a
            href="https://www.google.com/maps/place/Ginuwine+Tagpuan/@17.0887801,120.9153032,19.54z/data=!4m6!3m5!1s0x338fd3bfa239c313:0xa08c25905bdcd762!8m2!3d17.088947!4d120.9156229!16s%2Fg%2F11srzdp44s?entry=ttu"
            rel="noopener noreferrer"
            target="_blank"
            className="mb-4 text-lg text-orange-400 underline"
          >
            Kiltepan Road 2619 Sagada, Philippines
          </a>
          <div className="aspect-sdtv w-full border-2 p-2">
            <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
              <Map
                defaultCenter={{
                  lat: 17.089088234281363,
                  lng: 120.91533126703204,
                }}
                defaultZoom={16}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
              >
                <Marker
                  position={{
                    lat: 17.089088234281363,
                    lng: 120.91533126703204,
                  }}
                />
              </Map>
            </APIProvider>
          </div>
        </section>
      </main>
    </>
  );
}
