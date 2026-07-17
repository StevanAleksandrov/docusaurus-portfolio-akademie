import type { JSX } from 'react';
import Head from '@docusaurus/Head';

import Header from '@site/src/components/header';
import Hero from '@site/src/components/hero';
import MySkills from '@site/src/components/my-skills';
import ProjectHighlights from '@site/src/components/project-highlights';
import Contact from '@site/src/components/contact';
import Footer from '@site/src/components/footer';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Stevan Aleksandrov | DevSecOps Portfolio</title>

        <meta
          name="description"
          content="Portfolio of Stevan Aleksandrov featuring Linux, Docker, Kubernetes, CI/CD and DevSecOps projects."
        />
      </Head>

      <div className={styles.page}>
        <Header />

        <main>
          <Hero />
          <MySkills />
          <ProjectHighlights />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}