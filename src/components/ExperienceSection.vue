<template>
  <section id="experience" class="experience">
    <div class="experience-wrap">
      <h2 class="section-heading">Experience</h2>

      <div class="exp-list">
        <article class="exp-item">
          <div class="exp-meta">
            <h3 class="exp-role">Intern Full Stack Developer</h3>
            <span class="exp-company">GTS Active Pvt Ltd</span>
            <span class="exp-time">Nov 2025 — May 2026</span>
          </div>
          <div class="exp-body">
            <p>
              Developed and handed over production features with maintainable
              code according to requirements. Participated actively in
              technical planning and database design discussions.
            </p>
            <p>
              Stepped up as acting team lead — coordinated tasks among team
              members, facilitated daily meetings, and maintained the project
              through to delivery.
            </p>
          </div>
        </article>

        <article class="exp-item">
          <div class="exp-meta">
            <h3 class="exp-role">Education</h3>
            <span class="exp-time">2023 — Present</span>
          </div>
          <div class="exp-body">
            <p>
              B.Sc Software Engineering at the National Institute of Business
              Management. Coursework in data structures, operating systems,
              database design, and software architecture — alongside personal
              projects in IoT and microservices.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  padding: 100px 0;
  padding-left: 72px;
  border-top: 1px solid var(--border);
}

.experience-wrap {
  padding: 0 80px;
  max-width: 1100px;
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

.exp-list {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.exp-item {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 40px;
}

.exp-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.exp-role {
  font-size: 19px;
  font-weight: 600;
  color: var(--text-bright);
}

.exp-company {
  font-size: 16px;
  color: var(--accent);
  opacity: 0.7;
}

.exp-time {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--border-light);
  letter-spacing: 0.5px;
  margin-top: 4px;
}

.exp-body p {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 14px;
}

@media (max-width: 900px) {
  .experience {
    padding: 80px 0;
    padding-left: 0;
  }

  .experience-wrap {
    padding: 0 24px;
  }

  .exp-item {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
