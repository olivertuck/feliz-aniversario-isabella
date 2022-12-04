import Head from 'next/head';
import Image from 'next/image';
import Snowfall from 'react-snowfall';

const Home = () => (
  <>
    <Head>
      <title>Feliz Aniversário Isabella!</title>
      <meta content="Feliz Aniversário Isabella!" name="description" />
    </Head>
    <main className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-center text-4xl font-bold">
        Feliz Aniversário Isabella!
      </h1>
      <Image
        alt="Feliz Aniversário Isabella!"
        height={675}
        src="/feliz-aniversario-isabella.jpeg"
        width={540}
      />
      <p className="text-center text-xl">
        Espero que você tenha um aniversário incrível. Com amor do mozao ❤️️
      </p>
    </main>
    <Snowfall />
  </>
);

export default Home;
