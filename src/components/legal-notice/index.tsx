import type { JSX } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './legal-notice.module.css';

export default function LegalNotice(): JSX.Element {
  return (
    <Layout
      title="Legal Notice"
      description="Legal notice for the portfolio of Stevan Aleksandrov"
    >
      <main className={styles.main}>
        <article className={styles.container}>
          <h1>Legal Notice</h1>

          <section>
            <h2>Information according to § 5 DDG</h2>

            <p>
              Stevan Aleksandrov
              <br />
              [schwaigerstrasse 42a]
              <br />
              [84130, Dingolfing]
              <br />
              Germany
            </p>
          </section>

          <section>
            <h2>Contact</h2>

            <p>
              Email:{' '}
              <a href="mailto:[stevanaleksandrov@gmail.com]">
                [stevanaleksandrov@gmail.com]
              </a>
            </p>
          </section>

          <section>
            <h2>Liability for content</h2>

            <p>
              The contents of this website were created with care. However, no
              guarantee can be given for the accuracy, completeness or
              timeliness of the content.
            </p>
          </section>

          <section>
            <h2>Liability for links</h2>

            <p>
              This website may contain links to external websites. The
              respective providers or operators are responsible for the
              contents of those websites.
            </p>
          </section>

          <section>
            <h2>Copyright</h2>

            <p>
              The content and works created for this website are subject to
              applicable copyright law. Reproduction, editing or distribution
              requires prior permission from the respective author.
            </p>
          </section>

          <Link className={styles.backLink} to="/">
            Back to portfolio
          </Link>
        </article>
      </main>
    </Layout>
  );
}