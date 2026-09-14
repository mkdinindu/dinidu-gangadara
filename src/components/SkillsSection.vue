<template>
  <section id="skills" class="skills">
    <div class="skills-wrap">
      <h2 class="section-heading">Skills</h2>

      <div class="skills-grid">
        <div class="skill-col" v-for="col in columns" :key="col.title">
          <h3 class="skill-col-title">{{ col.title }}</h3>
          <ul>
            <li v-for="item in col.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const columns = [
  {
    title: 'Languages',
    items: ['C++', 'C#', 'Java', 'JavaScript', 'Python', 'HTML', 'CSS', 'Bash', 'VB'],
  },
  {
    title: 'Frameworks & Tools',
    items: ['Docker', 'Spring Boot', 'Flask', 'FastAPI', 'React', 'Firebase', 'Git', 'REST APIs'],
  },
  {
    title: 'Data & Platforms',
    items: ['MySQL', 'MongoDB', 'Oracle PL/SQL', 'Google Cloud Platform', 'Microservice Architecture'],
  },
]
</script>

<style scoped>
.skills {
  padding: 100px 0;
  padding-left: 72px;
  border-top: 1px solid var(--border);
}

.skills-wrap {
  padding: 0 80px;
  max-width: 1240px;
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}

.skill-col-title {
  font-size: 14px;
  font-family: var(--mono);
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-bright);
  margin-bottom: 20px;
  font-weight: 500;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.skill-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skill-col li {
  font-size: 17px;
  color: var(--text);
  padding-left: 16px;
  position: relative;
}

.skill-col li::before {
  content: '~';
  position: absolute;
  left: 0;
  color: var(--border-light);
  font-family: var(--mono);
  font-size: 13px;
}

@media (max-width: 900px) {
  .skills {
    padding: 80px 0;
    padding-left: 0;
  }

  .skills-wrap {
    padding: 0 24px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
</style>
