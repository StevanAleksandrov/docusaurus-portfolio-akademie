import type { JSX, MouseEvent } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './footer.module.css';

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  const arrowDefault = useBaseUrl('/icons/arrow-default.svg');
  const arrowHover = useBaseUrl('/icons/arrow-hover.svg');

  const handleBackToTop = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();

    const heroSection = document.getElementById('hero');

    if (heroSection) {
      heroSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a
          href="#hero"
          onClick={handleBackToTop}
          className={styles.backToTop}
          aria-label="Back to top"
        >
          <img
            src={arrowDefault}
            alt=""
            aria-hidden="true"
            className={styles.icon}
          />

          <img
            src={arrowHover}
            alt=""
            aria-hidden="true"
            className={`${styles.icon} ${styles.iconHover}`}
          />
        </a>

        <p className={styles.copy}>© Stevan Aleksandrov {year}</p>


        <Link className={styles.legalLink} to="/legal-notice">
          Legal Notice
        </Link>
      </div>
    </footer>
  );
}