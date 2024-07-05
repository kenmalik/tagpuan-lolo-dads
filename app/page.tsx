import Header from './components/header';

export default function Home() {
  return (
    <>
      <Header fixed />
      <main className="mb-32">
        <section className="h-screen bg-[url('/images/cabin-exterior.jpg')] bg-cover bg-fixed bg-center">
          <div className="absolute flex h-full w-full flex-col items-center justify-center p-12">
            <h1 className="mb-6 text-center text-6xl font-bold text-orange-400">
              A cabin + restaurant in Sagada, Philippines
            </h1>
            <div className="flex w-2/5 flex-col gap-4 text-center text-white md:w-1/3 lg:w-1/4">
              <a
                href="#tagpuan"
                className="w-full border-b-2 border-white p-1 transition ease-in-out hover:border-orange-700 hover:text-orange-700"
              >
                Tagpuan
              </a>
              <a
                href="#lolo-dads"
                className="w-full border-b-2 border-white p-1 transition ease-in-out hover:border-orange-700 hover:text-orange-700"
              >
                Lolo Dad's
              </a>
            </div>
          </div>
        </section>
        <section id="about" className="mx-16 my-16 flex flex-col items-center">
          <h1 className="mb-8 text-4xl font-bold">What we do</h1>
          <p className="mb-8 italic">Do you want...</p>
          <ul className="mb-8">
            <li>Accommodation?</li>
            <li>Food?</li>
            <li>Bonfire?</li>
            <li>Tour arrangement?</li>
            <li>A great experience?</li>
          </ul>
          <p className="text-2xl font-bold">We gotchu!</p>
        </section>
        <section id="tagpuan" className="mx-16 my-16">
          <h1 className="mb-8 text-center text-4xl font-bold">Tagpuan</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut a, ad
            suscipit iusto dignissimos animi, dolores et at quo temporibus quia
            ullam recusandae maiores porro itaque! Vitae ex numquam cum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo omnis
            necessitatibus eveniet, doloremque tenetur expedita. Sint
            laudantium, qui odio deleniti voluptas assumenda, velit tenetur,
            officia quidem suscipit inventore ea enim.
          </p>
          <p>
            Natus animi maxime sapiente veniam quia, ratione iure voluptatum
            voluptatibus quo minima dolores illo fuga. Doloremque dolores totam
            quos accusamus iusto mollitia distinctio placeat suscipit,
            repellendus nostrum officia nobis quo?
          </p>
          <p>
            Aut nulla maiores ducimus dolore, consequatur voluptatem architecto
            veniam officia numquam asperiores cum, natus excepturi mollitia est,
            distinctio praesentium molestiae voluptatibus officiis omnis ut
            itaque sequi cupiditate suscipit vero. Perspiciatis.
          </p>
        </section>
        <section id="lolo-dads" className="mx-16 my-16">
          <h1 className="mb-8 text-center text-4xl font-bold">Lolo Dad's</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cum
            rem pariatur molestias nihil cupiditate omnis perferendis quam
            voluptas voluptate modi suscipit, consequatur ullam, corrupti eum
            voluptates officia. Nisi, quo.
          </p>
          <p>
            Molestiae cum commodi nesciunt iste porro veritatis necessitatibus
            beatae unde eius tenetur vel ab repellat aut consequatur
            reprehenderit odio tempore totam aspernatur, voluptatem et quasi
            obcaecati quibusdam error. Libero, provident.
          </p>
          <p>
            Tempore incidunt recusandae consectetur hic perferendis tempora
            magni officia assumenda ipsa nostrum nesciunt magnam porro
            consequuntur ea animi facere doloribus ratione voluptates iste
            obcaecati sit, laborum reprehenderit. Earum, consequuntur
            reiciendis?
          </p>
          <p>
            Aspernatur, magnam perspiciatis quidem quas sed dolore. Enim,
            deleniti odio natus nostrum libero ad! Ad molestias earum mollitia
            distinctio dolorem porro natus tenetur esse corporis, veritatis, est
            autem illo quasi!
          </p>
        </section>
      </main>
    </>
  );
}
