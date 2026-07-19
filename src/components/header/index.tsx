import type { JSX, MouseEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './header.module.css';

interface SectionLink {
  id: string;
  label: string;
}

const sectionLinks: SectionLink[] = [
  { id: 'hero', label: 'About me' },
  { id: 'my-skills', label: 'My skills' },
  { id: 'project-highlights', label: 'My projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Header(): JSX.Element {
  const [activeId, setActiveId] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const lastScrollY = useRef(0);
  const isMenuOpenRef = useRef(false);

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;

    if (isMenuOpen) {
      setIsHeaderVisible(true);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    let ticking = false;

    const updatePageState = (): void => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const previousScrollY = lastScrollY.current;

      const headerHeight = window.innerWidth <= 768 ? 64 : 80;
      const scrollPosition = currentScrollY + headerHeight + 40;

      let currentSection = sectionLinks[0].id;

      sectionLinks.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = id;
        }
      });

      setActiveId(currentSection);

      if (isMenuOpenRef.current || currentScrollY <= 10) {
        setIsHeaderVisible(true);
      } else if (currentScrollY < previousScrollY) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > previousScrollY) {
        setIsHeaderVisible(false);
      }

      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const handleScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(updatePageState);
        ticking = true;
      }
    };

    const handleResize = (): void => {
      handleScroll();
    };

    lastScrollY.current = Math.max(window.scrollY, 0);
    updatePageState();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isMenuOpen]);

  const handleSectionClick =
    (id: string) =>
    (event: MouseEvent<HTMLAnchorElement>): void => {
      event.preventDefault();

      const target = document.getElementById(id);

      if (!target) {
        return;
      }

      const headerOffset = window.innerWidth <= 768 ? 64 : 80;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      setActiveId(id);
      setIsMenuOpen(false);
      setIsHeaderVisible(true);

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    };

  return (
    <>
      <header
        className={`${styles.header} ${
          isHeaderVisible ? '' : styles.headerHidden
        }`}
      >
        <div className={styles.inner}>
          <a
            href="#hero"
            className={styles.mobileBrand}
            onClick={handleSectionClick('hero')}
          >
            Stevan Aleksandrov
          </a>

          <nav className={styles.desktopNav} aria-label="Primary navigation">
            <ul className={styles.navList}>
              {sectionLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={handleSectionClick(id)}
                    className={`${styles.link} ${
                      activeId === id ? styles.activeLink : ''
                    }`}
                    aria-current={activeId === id ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}

              <li>
                <Link className={styles.link} to="/docs/projects">
                  Docs
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={styles.headerOffset} aria-hidden="true" />

      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ''
        }`}
        aria-hidden={!isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
      >
        <nav
          className={styles.mobilePanel}
          aria-label="Mobile navigation"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>

          <p className={styles.mobileTitle}>Navigation</p>

          <ul className={styles.mobileNavList}>
            {sectionLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleSectionClick(id)}
                  className={`${styles.mobileLink} ${
                    activeId === id ? styles.mobileActiveLink : ''
                  }`}
                  aria-current={activeId === id ? 'page' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}

            <li>
              <Link
                className={styles.mobileLink}
                to="/docs/projects"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}