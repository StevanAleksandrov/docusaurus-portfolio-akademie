import type { JSX } from 'react';
import { useState } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './project-highlights.module.css';

interface ProjectTag {
  icon: string;
  label: string;
}

interface Project {
  id: string;
  name: string;
  image: string;
  description: string;
  documentationUrl: string;
  githubUrl: string;
  tags: ProjectTag[];
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  return (
    <article className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.leftColumn}>
          <h3 className={styles.cardTitle}>{project.name}</h3>

          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={project.image}
              alt={`${project.name} project preview`}
            />
          </div>
        </div>

        <div className={styles.detailColumn}>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span
                key={`${project.id}-${tag.label}`}
                className={styles.tag}
              >
                <img
                  className={styles.tagIcon}
                  src={tag.icon}
                  alt=""
                  aria-hidden="true"
                />

                <span className={styles.tagText}>{tag.label}</span>
              </span>
            ))}
          </div>

          <p className={styles.description}>{project.description}</p>

          <div className={styles.buttons}>
            <Link
              className={styles.primaryButton}
              to={project.documentationUrl}
            >
              Documentation
            </Link>

            <a
              className={styles.secondaryButton}
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectHighlights(): JSX.Element {
  const securityIcon = useBaseUrl('/icons/security.svg');
  const systemAdministrationIcon = useBaseUrl(
    '/icons/systemadministration.svg',
  );
  const networkIcon = useBaseUrl('/icons/network.svg');
  const dockerIcon = useBaseUrl('/icons/docker.svg');
  const cicdIcon = useBaseUrl('/icons/ci-cd.svg');
  const pythonIcon = useBaseUrl('/icons/python.svg');
  const bashIcon = useBaseUrl('/icons/bash.svg');
  const cloudIcon = useBaseUrl('/icons/cloud.svg');
  const yamlIcon = useBaseUrl('/icons/yaml.svg');

  const serverSetupImage = useBaseUrl(
    '/img/projects/server-setup-guide.png',
  );
  const conduitContainerImage = useBaseUrl(
    '/img/projects/conduit-container-project.png',
  );
  const conduitDeploymentImage = useBaseUrl(
    '/img/projects/conduit-deployment.png',
  );
  const truckSignsImage = useBaseUrl(
    '/img/projects/truck-signs-api-v2.png',
  );
  const minecraftImage = useBaseUrl(
    '/img/projects/minecraft-server-project.png',
  );

  const projects: Project[] = [
    {
      id: 'server-setup-guide',
      name: 'Server Setup Guide',
      image: serverSetupImage,
      description:
        'A structured guide for preparing and administering a Linux server. The project focuses on secure remote access, system configuration, networking and repeatable administration steps.',
      documentationUrl: '/docs/projects/server-setup-guide',
      githubUrl:
        'https://github.com/StevanAleksandrov/server-setup-guide',
      tags: [
        {
          icon: systemAdministrationIcon,
          label: 'System Administration',
        },
        {
          icon: networkIcon,
          label: 'Networking',
        },
        {
          icon: bashIcon,
          label: 'Bash',
        },
        {
          icon: securityIcon,
          label: 'IT Security',
        },
      ],
    },
    {
      id: 'conduit-container-project',
      name: 'Conduit Container Project',
      image: conduitContainerImage,
      description:
        'A containerized full-stack application with an Angular frontend, Django backend and PostgreSQL database. Docker Compose, NGINX, Gunicorn and environment-based configuration provide a reproducible and secure deployment setup.',
      documentationUrl: '/docs/projects/conduit-container-project',
      githubUrl:
        'https://github.com/StevanAleksandrov/conduit-container-project',
      tags: [
        {
          icon: dockerIcon,
          label: 'Docker',
        },
        {
          icon: pythonIcon,
          label: 'Python',
        },
        {
          icon: yamlIcon,
          label: 'YAML',
        },
        {
          icon: securityIcon,
          label: 'IT Security',
        },
      ],
    },
    {
      id: 'conduit-deployment',
      name: 'Conduit Deployment',
      image: conduitDeploymentImage,
      description:
        'An automated deployment workflow built with GitHub Actions and GitHub Container Registry. The pipeline builds and publishes container images, deploys them to a remote Linux server and verifies the application with a health check.',
      documentationUrl: '/docs/projects/conduit-deployment',
      githubUrl:
        'https://github.com/StevanAleksandrov/conduit-deployment',
      tags: [
        {
          icon: cicdIcon,
          label: 'CI/CD',
        },
        {
          icon: dockerIcon,
          label: 'Docker',
        },
        {
          icon: cloudIcon,
          label: 'Cloud',
        },
        {
          icon: securityIcon,
          label: 'IT Security',
        },
      ],
    },
    {
      id: 'truck-signs-api-v2',
      name: 'Truck Signs API v2',
      image: truckSignsImage,
      description:
        'A production-oriented Django REST API modernized with Python 3.12, PostgreSQL, Gunicorn and WhiteNoise. The project includes database health checks, automated migrations, static file handling and environment-based configuration.',
      documentationUrl: '/docs/projects/truck-signs-api-v2',
      githubUrl:
        'https://github.com/StevanAleksandrov/truck-signs-api-v2',
      tags: [
        {
          icon: pythonIcon,
          label: 'Python',
        },
        {
          icon: dockerIcon,
          label: 'Docker',
        },
        {
          icon: cicdIcon,
          label: 'CI/CD',
        },
        {
          icon: securityIcon,
          label: 'IT Security',
        },
      ],
    },
    {
      id: 'minecraft-server-project',
      name: 'Minecraft Server Project',
      image: minecraftImage,
      description:
        'A containerized Minecraft server managed with Docker Compose. The project includes persistent storage, configurable memory limits, environment-based server settings and practical connectivity testing.',
      documentationUrl: '/docs/projects/minecraft-server-project',
      githubUrl:
        'https://github.com/StevanAleksandrov/minecraft-server-project',
      tags: [
        {
          icon: dockerIcon,
          label: 'Docker',
        },
        {
          icon: yamlIcon,
          label: 'YAML',
        },
        {
          icon: bashIcon,
          label: 'Bash',
        },
        {
          icon: cloudIcon,
          label: 'Cloud',
        },
      ],
    },
  ];

  const [activeProjectId, setActiveProjectId] = useState(
    projects[0].id,
  );

  const activeProject =
    projects.find((project) => project.id === activeProjectId) ??
    projects[0];

  return (
    <section
      id="project-highlights"
      className={styles.section}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.title}>My project highlights</h2>

        <div className={styles.desktopLayout}>
          <aside
            className={styles.projectNavigation}
            aria-label="Project selection"
          >
            <div className={styles.projectList}>
              {projects.map((project, index) => {
                const isActive =
                  project.id === activeProjectId;

                return (
                  <button
                    key={project.id}
                    type="button"
                    className={`${styles.projectButton} ${
                      isActive ? styles.activeProjectButton : ''
                    }`}
                    aria-pressed={isActive}
                    onClick={() =>
                      setActiveProjectId(project.id)
                    }
                  >
                    <span className={styles.projectNumber}>
                      {index + 1}.
                    </span>

                    <span className={styles.projectName}>
                      {project.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <Link
              className={styles.allProjectsLink}
              to="/docs/projects"
            >
              View all documentation
            </Link>
          </aside>

          <ProjectCard project={activeProject} />
        </div>

        <div className={styles.mobileLayout}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={styles.mobileProject}
            >
              <div className={styles.mobileHeading}>
                <span>{index + 1}.</span>
                <span>{project.name}</span>
              </div>

              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}