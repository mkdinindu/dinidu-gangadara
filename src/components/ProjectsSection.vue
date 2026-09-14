<template>
  <section id="projects" class="projects">
    <div class="projects-wrap">
      <h2 class="section-heading">Projects</h2>

      <div class="projects-list">
        <article v-for="project in projects" :key="project.title" class="project-row">
          <div class="project-main">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>
            <div class="project-tags">
              <span v-for="t in project.tags" :key="t">{{ t }}</span>
            </div>
          </div>
          <div class="project-side">
            <a v-if="project.link" :href="project.link" class="project-link">View &rarr;</a>
          </div>
        </article>
      </div>

      <p class="projects-note">
        More on
        <a href="https://github.com/mkdinindu" target="_blank" rel="noopener">GitHub</a>.
      </p>
    </div>

    <div class="projects-bg">
      <img :src="serverImg" alt="" />
    </div>
  </section>
</template>

<script setup>
import serverImg from '../assets/servers.jpg'

const projects = [
  {
    title: 'Smart Motor-Bike Helmet',
    desc: 'IoT-based helmet that detects accidents using accelerometer and GPS sensors, then notifies emergency services with rider details, location, and vitals.',
    tags: ['Micro-controllers', 'Firebase', 'Python', 'Flask', 'C++', 'React', 'Docker', 'GCP'],
    link: '#',
  },
  {
    title: 'Microservice Food Ordering Platform',
    desc: 'Microservice-based food ordering platform with REST-style APIs, designed for easy horizontal scaling.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
    link: '#',
  },
  {
    title: 'PDF Tools',
    desc: 'Python CLI utility for merging and compressing PDFs — flexible arguments, metadata stripping, page re-encoding.',
    tags: ['Python', 'CLI', 'PDF'],
    link: '#',
  },
]
</script>

<style scoped>
.projects {
  padding: 100px 0;
  padding-left: 72px;
  border-top: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}

.projects-wrap {
  padding: 0 80px;
  max-width: 1200px;
  position: relative;
  z-index: 1;
}

.section-heading {
  font-size: 14px;
  font-family: var(--mono);
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 48px;
  font-weight: 400;
}

.projects-list {
  display: flex;
  flex-direction: column;
}

.project-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: start;
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
}

.project-row:first-child {
  border-top: 1px solid var(--border);
}

.project-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-bright);
  margin-bottom: 8px;
}

.project-desc {
  font-size: 18px;
  line-height: 1.75;
  margin-bottom: 12px;
}

.project-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.project-tags span {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--border-light);
  letter-spacing: 0.5px;
}

.project-tags span::before {
  content: '#';
  color: var(--accent);
  opacity: 0.4;
  margin-right: 2px;
}

.project-side {
  padding-top: 4px;
}

.project-link {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--border-light);
  letter-spacing: 0.5px;
  transition: color 0.2s;
}

.project-link:hover {
  color: var(--accent);
}

.projects-note {
  font-size: 16px;
  color: var(--border-light);
  margin-top: 32px;
}

.projects-note a {
  color: var(--accent);
  opacity: 0.7;
}

.projects-note a:hover {
  opacity: 1;
}

.projects-bg {
  position: absolute;
  right: -120px;
  top: 50%;
  transform: translateY(-50%);
  width: 500px;
  height: 500px;
  opacity: 0.04;
  pointer-events: none;
}

.projects-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  filter: saturate(0);
}

@media (max-width: 900px) {
  .projects {
    padding: 80px 0;
    padding-left: 0;
  }

  .projects-wrap {
    padding: 0 24px;
  }

  .project-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .projects-bg {
    display: none;
  }
}
</style>
