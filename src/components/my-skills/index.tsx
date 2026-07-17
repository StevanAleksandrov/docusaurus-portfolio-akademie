import type { JSX } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './my-skills.module.css';

interface Skill {
  icon: string;
  label: string;
  bullets: string[];
}

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps): JSX.Element {
  return (
    <article
      className={styles.card}
      tabIndex={0}
      aria-label={`${skill.label}: ${skill.bullets.join(', ')}`}
    >
      <div className={`${styles.panel} ${styles.front}`}>
        <img
          className={styles.icon}
          src={skill.icon}
          alt=""
          aria-hidden="true"
        />

        <h3 className={styles.label}>{skill.label}</h3>
      </div>

      <div className={`${styles.panel} ${styles.back}`}>
        <div className={styles.backInner}>
          <h3 className={styles.usedTitle}>How I use this skill</h3>

          <ul className={styles.usedList}>
            {skill.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function MySkills(): JSX.Element {
  const securityIcon = useBaseUrl('/icons/security.svg');
  const systemAdministrationIcon = useBaseUrl(
    '/icons/systemadministration.svg',
  );
  const networkIcon = useBaseUrl('/icons/network.svg');
  const dockerIcon = useBaseUrl('/icons/docker.svg');
  const cicdIcon = useBaseUrl('/icons/ci-cd.svg');
  const pythonIcon = useBaseUrl('/icons/python.svg');
  const kubernetesIcon = useBaseUrl('/icons/kubernetes.svg');
  const bashIcon = useBaseUrl('/icons/bash.svg');
  const cloudIcon = useBaseUrl('/icons/cloud.svg');

  const skills: Skill[] = [
    {
      icon: securityIcon,
      label: 'IT Security',
      bullets: [
        'Secure system configuration',
        'Secrets and access management',
        'Basic system hardening',
        'Vulnerability awareness',
      ],
    },
    {
      icon: systemAdministrationIcon,
      label: 'System Administration',
      bullets: [
        'Linux and Windows administration',
        'User and access management',
        'Service monitoring and maintenance',
        'Operational troubleshooting',
      ],
    },
    {
      icon: networkIcon,
      label: 'Networking',
      bullets: [
        'TCP/IP and DNS fundamentals',
        'Firewall rules and NAT',
        'VPN configuration basics',
        'Connectivity troubleshooting',
      ],
    },
    {
      icon: dockerIcon,
      label: 'Docker',
      bullets: [
        'Custom Dockerfiles',
        'Docker Compose environments',
        'Volumes and container networks',
        'Health checks and persistence',
      ],
    },
    {
      icon: cicdIcon,
      label: 'CI/CD',
      bullets: [
        'GitHub Actions workflows',
        'Automated image builds',
        'GHCR image publishing',
        'Automated deployment checks',
      ],
    },
    {
      icon: pythonIcon,
      label: 'Python',
      bullets: [
        'Automation scripts',
        'Django backend projects',
        'Command-line utilities',
        'File and log processing',
      ],
    },
    {
      icon: kubernetesIcon,
      label: 'Kubernetes',
      bullets: [
        'k3s cluster administration',
        'Deployments and services',
        'Ingress and cert-manager',
        'Persistent volume management',
      ],
    },
    {
      icon: bashIcon,
      label: 'Bash',
      bullets: [
        'Shell automation',
        'Container entrypoint scripts',
        'Environment configuration',
        'Linux troubleshooting',
      ],
    },
    {
      icon: cloudIcon,
      label: 'Cloud',
      bullets: [
        'VPS-based deployments',
        'Remote Linux administration',
        'Containerized cloud services',
        'Secure deployment workflows',
      ],
    },
  ];

  return (
    <section id="my-skills" className={styles.section}>
      <div className={styles.wrap}>
        <header className={styles.headline}>
          <h2 className={styles.title}>My skills</h2>

          <p className={styles.subtitle}>
            Technologies and practices I have applied in hands-on projects
          </p>
        </header>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <SkillCard key={skill.label} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}