import type { JSX, MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './hero.module.css';

const roles = ['Linux System Administrator', 'DevSecOps Engineer'];

export default function Hero(): JSX.Element {
  const portraitUrl = useBaseUrl('/img/lebenslauf-aleksandrov.jpg');

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let delay = isDeleting ? 55 : 95;

    if (!isDeleting && displayText === currentRole) {
      delay = 1400;
    }

    if (isDeleting && displayText.length === 0) {
      delay = 350;
    }

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }

        return;
      }

      if (displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else {
        setIsDeleting(false);
        setRoleIndex((previousIndex) => (previousIndex + 1) % roles.length);
      }
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [displayText, isDeleting, roleIndex]);

  const handleContactClick = (
    event: MouseEvent<HTMLAnchorElement>,
  ): void => {
    event.preventDefault();

    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.textColumn}>
          <p className={styles.kicker}>
            Glad you&apos;re here! 👋🏻 I am
          </p>

          <h1 className={styles.name}>Stevan Aleksandrov</h1>

          <p className={styles.role} aria-live="polite">
            {displayText}
            <span className={styles.cursor} aria-hidden="true">
              |
            </span>
          </p>

          <div className={styles.mobilePortrait}>
            <img
              className={styles.photo}
              src={portraitUrl}
              alt="Portrait of Stevan Aleksandrov"
            />
          </div>

          <div className={styles.description}>
            <p>
              I work with Linux systems, IT infrastructure and secure
              operations, with a strong focus on troubleshooting, automation
              and reliable deployments.
            </p>

            <p>
              Through hands-on projects with Docker, Kubernetes, GitHub
              Actions, CI/CD pipelines, Python and Bash, I have built practical
              experience in containerization, infrastructure management and
              DevSecOps workflows.
            </p>
          </div>

          <a
            href="#contact"
            className={styles.cta}
            onClick={handleContactClick}
          >
            Contact me
          </a>
        </div>

        <div className={styles.desktopPortrait}>
          <img
            className={styles.photo}
            src={portraitUrl}
            alt="Portrait of Stevan Aleksandrov"
          />
        </div>
      </div>
    </section>
  );
}