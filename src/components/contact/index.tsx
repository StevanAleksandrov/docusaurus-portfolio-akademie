import type { JSX } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './contact.module.css';

interface ContactLink {
  label: string;
  href: string;
  icon: string;
  external?: boolean;
}

export default function Contact(): JSX.Element {
  const mailIcon = useBaseUrl('/icons/mail.svg');
  const linkedinIcon = useBaseUrl('/icons/linkedin.svg');
  const githubIcon = useBaseUrl('/icons/github.svg');

  const contactLinks: ContactLink[] = [
  {
    label: 'E-mail',
    href: 'mailto:stevanaleksandrov@gmail.com',
    icon: mailIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/stevanaleksandrov92',
    icon: linkedinIcon,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/StevanAleksandrov',
    icon: githubIcon,
    external: true,
  },
];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2 className={styles.title}>Contact me</h2>

            <p className={styles.offer}>
              Let&apos;s connect. Here&apos;s what I&apos;m looking for and what
              I bring to the table:
            </p>

            <ul className={styles.list}>
              <li>
                Open to Linux system administration, IT infrastructure, DevOps
                and DevSecOps roles
              </li>
              <li>
                Hands-on experience with Docker, Kubernetes, CI/CD, Linux and
                secure deployment workflows
              </li>
              <li>
                Strong troubleshooting skills, analytical thinking and reliable
                teamwork
              </li>
              <li>Open to relocation, hybrid and on-site opportunities</li>
            </ul>
          </div>

          <div className={styles.right}>
            <p className={styles.subtitle}>
              Looking forward to hearing from you!
            </p>

            <ul className={styles.details}>
              {contactLinks.map((contact) => (
                <li key={contact.label}>
                  <a
                    className={styles.row}
                    href={contact.href}
                    target={contact.external ? '_blank' : undefined}
                    rel={contact.external ? 'noreferrer' : undefined}
                    aria-label={contact.label}
                  >
                    <span className={styles.iconWrap}>
                      <img
                        className={styles.icon}
                        src={contact.icon}
                        alt=""
                        aria-hidden="true"
                      />
                    </span>

                    <span>{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}