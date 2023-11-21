import { Banner } from '../components/sections/banner';
import { About } from '../components/sections/about';
import { Services } from '../components/sections/services';
import { Portfolio } from '../components/sections/portfolio';
import { Clients } from '../components/sections/clients';

export default function Home() {
  return (
    <>
      <main className="grid">
        <Banner />
        <About />
        <Services />
        <Portfolio />
        <Clients />
        {/* <Contact /> */}
      </main>
    </>
  );
}
