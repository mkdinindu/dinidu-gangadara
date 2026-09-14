<template>
  <section id="contact" class="contact">
    <div class="contact-wrap">
      <h2 class="section-heading">Contact</h2>

      <p class="contact-intro">
        If you're working on embedded, automotive, or avionics software and
        need someone who's eager to learn and not afraid of datasheets —
        I'd like to hear from you.
      </p>

      <div class="contact-links">
        <a href="mailto:mkdgangadara0615@gmail.com" class="contact-link">
          <span class="contact-label">Email</span>
          <span class="contact-value">mkdgangadara0615@gmail.com</span>
        </a>
        <a href="https://github.com/mkdinindu" target="_blank" rel="noopener" class="contact-link">
          <span class="contact-label">GitHub</span>
          <span class="contact-value">github.com/mkdinindu</span>
        </a>
        <a href="https://www.linkedin.com/in/dinidu-gangadara-b76a21339" target="_blank" rel="noopener" class="contact-link">
          <span class="contact-label">LinkedIn</span>
          <span class="contact-value">linkedin.com/in/dinidu-gangadara</span>
        </a>
      </div>
    </div>

    <footer class="footer">
      <span>Built from scratch, not a template.</span>
      <span>&copy; {{ year }} M.K. Dinidu Gangadara</span>
    </footer>
  </section>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.contact {
  padding: 100px 0 0;
  padding-left: 72px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  min-height: 80vh;
}

.contact-wrap {
  padding: 0 80px;
  max-width: 1000px;
  flex: 1;
}

.section-heading {
  font-size: 14px;
  font-family: var(--mono);
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 32px;
  font-weight: 400;
}

.contact-intro {
  font-size: 20px;
  line-height: 1.85;
  color: var(--text);
  margin-bottom: 48px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.contact-link {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 18px 0;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  transition: padding-left 0.2s;
}

.contact-link:first-child {
  border-top: 1px solid var(--border);
}

.contact-link:hover {
  padding-left: 8px;
}

.contact-label {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--border-light);
}

.contact-value {
  font-size: 17px;
  color: var(--text);
  transition: color 0.2s;
}

.contact-link:hover .contact-value {
  color: var(--text-bright);
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 28px 80px;
  border-top: 1px solid var(--border);
  font-family: var(--mono);
  font-size: 12px;
  color: var(--border-light);
  letter-spacing: 0.5px;
}

@media (max-width: 900px) {
  .contact {
    padding: 80px 0 0;
    padding-left: 0;
  }

  .contact-wrap {
    padding: 0 24px;
  }

  .contact-link {
    flex-direction: column;
    gap: 4px;
  }

  .footer {
    padding: 24px;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
