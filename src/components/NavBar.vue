<template>
  <nav class="nav" :class="{ scrolled: atTop === false }">
    <a href="#hero" class="nav-logo" @click.prevent="go('hero')">
      DG<span class="nav-logo-dot">.</span>
    </a>

    <ul class="nav-links" :class="{ open: menuOpen }">
      <li v-for="link in links" :key="link.id">
        <a
          :href="'#' + link.id"
          :class="{ active: active === link.id }"
          @click.prevent="go(link.id)"
        >{{ link.label }}</a>
      </li>
    </ul>

    <button class="nav-toggle" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Close menu' : 'Open menu'">
      <span :class="{ open: menuOpen }"></span>
    </button>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const active = ref('hero')
const atTop = ref(true)

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function go(id) {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function onScroll() {
  atTop.value = window.scrollY < 60
}

let obs
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  const sections = links.map(l => document.getElementById(l.id)).filter(Boolean)
  obs = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (e.isIntersecting) active.value = e.target.id
    }
  }, { threshold: 0.35 })
  sections.forEach(s => obs.observe(s))
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  obs?.disconnect()
})
</script>

<style scoped>
.nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0 32px;
  z-index: 100;
  transition: background 0.3s;
}

.nav.scrolled {
  background: rgba(17, 17, 19, 0.85);
  backdrop-filter: blur(12px);
}

.nav-logo {
  font-family: var(--mono);
  font-size: 18px;
  font-weight: 500;
  color: var(--text-bright);
  letter-spacing: -0.5px;
  text-decoration: none;
}

.nav-logo-dot {
  color: var(--accent);
}

.nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
}

.nav-links a {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--border-light);
  text-decoration: none;
  padding: 6px 0;
  border-radius: 4px;
  transition: color 0.2s;
  position: relative;
  text-align: center;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text-bright);
}

.nav-links a.active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 12px;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 24px;
  position: relative;
}

.nav-toggle span,
.nav-toggle span::before,
.nav-toggle span::after {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--text-bright);
  transition: all 0.3s;
  position: absolute;
}

.nav-toggle span { top: 50%; transform: translateY(-50%); }
.nav-toggle span::before { content: ''; top: -8px; }
.nav-toggle span::after { content: ''; top: 8px; }

.nav-toggle span.open { background: transparent; }
.nav-toggle span.open::before { top: 0; transform: rotate(45deg); }
.nav-toggle span.open::after { top: 0; transform: rotate(-45deg); }

@media (max-width: 900px) {
  .nav {
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 56px;
    flex-direction: row;
    padding: 0 20px;
    background: rgba(17, 17, 19, 0.95);
    backdrop-filter: blur(12px);
    border-top: 1px solid var(--border);
  }

  .nav-links {
    position: fixed;
    bottom: 56px;
    left: 0;
    right: 0;
    flex-direction: row;
    justify-content: center;
    gap: 0;
    background: rgba(17, 17, 19, 0.97);
    backdrop-filter: blur(12px);
    padding: 12px 16px;
    border-top: 1px solid var(--border);
    transform: translateY(100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-links a {
    writing-mode: horizontal-tb;
    font-size: 12px;
    padding: 8px 16px;
  }

  .nav-links a.active::after {
    right: auto;
    bottom: -12px;
    top: auto;
    transform: none;
    width: 16px;
    height: 3px;
  }

  .nav-toggle {
    display: block;
  }
}
</style>
