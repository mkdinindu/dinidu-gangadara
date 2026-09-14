<template>
  <section id="hero" class="hero">
    <div class="hero-bg">
      <img :src="heroImg" alt="" />
      <div class="hero-fade"></div>
    </div>

    <ThreeScene />

    <div class="hero-content">
      <p class="hero-eyebrow">Software Engineer</p>
      <h1 class="hero-name">
        M.K. Dinidu<br />Gangadara
      </h1>
      <p class="hero-desc">
        Full stack developer with hands-on experience building production
        features, microservices, and IoT systems. Currently completing a
        B.Sc in Software Engineering at NIBM.
      </p>
      <div class="hero-actions">
        <a href="#projects" class="btn" @click.prevent="scroll('projects')">Look at my work</a>
        <a href="#contact" class="btn-outline" @click.prevent="scroll('contact')">Say hello</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImg from '../assets/code.jpg'
import ThreeScene from './ThreeScene.vue'

function scroll(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  padding: 80px 80px 100px;
  padding-left: calc(72px + 80px);
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
  filter: saturate(0.2) brightness(0.6);
}

.hero-fade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to top, var(--bg) 0%, transparent 50%),
    linear-gradient(to right, var(--bg) 0%, transparent 60%);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
}

.hero-eyebrow {
  font-family: var(--mono);
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 20px;
  opacity: 0.8;
}

.hero-name {
  font-size: clamp(3.2rem, 7vw, 6rem);
  font-weight: 700;
  color: var(--text-bright);
  line-height: 1;
  letter-spacing: -2px;
  margin-bottom: 24px;
}

.hero-desc {
  font-size: 20px;
  color: var(--text);
  line-height: 1.8;
  margin-bottom: 36px;
  max-width: 560px;
}

.hero-actions {
  display: flex;
  gap: 12px;
}

.btn {
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.5px;
  padding: 12px 24px;
  background: var(--text-bright);
  color: var(--bg);
  border-radius: 6px;
  font-weight: 500;
  transition: opacity 0.2s;
}

.btn:hover { opacity: 0.85; }

.btn-outline {
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.5px;
  padding: 12px 24px;
  border: 1px solid var(--border-light);
  color: var(--text);
  border-radius: 6px;
  transition: border-color 0.2s, color 0.2s;
}

.btn-outline:hover {
  border-color: var(--text);
  color: var(--text-bright);
}

@media (max-width: 900px) {
  .hero {
    padding: 60px 24px 100px;
    padding-left: 24px;
    align-items: center;
  }

  .hero-name {
    letter-spacing: -1px;
  }
}
</style>
