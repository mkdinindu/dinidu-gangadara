<template>
  <section id="about" class="about">
    <div class="about-wrap">
      <h2 class="about-heading">About</h2>

      <div class="about-layout">
        <div class="about-prose">
          <p>
            I'm Dinidu Gangadara — a full stack developer and software
            engineering undergraduate based in Sri Lanka. I've spent the last
            year as an intern at GTS Active, where I shipped production
            features, worked on DB design, and ended up leading daily standups
            as acting team lead.
          </p>
          <p>
            I'm comfortable across the stack — Spring Boot backends, React
            frontends, Docker, cloud — but I'm also drawn to the IoT and
            embedded side of things. I built a smart motorcycle helmet with
            accelerometer-triggered emergency alerts, and I keep finding my
            way back to projects where software meets hardware.
          </p>
          <p>
            Working toward a BSc Software Engineering at NIBM (GPA 3.64).
            Looking for roles where I can keep growing as a developer while
            getting closer to systems-level work.
          </p>
        </div>

        <div class="about-details">
          <div class="detail">
            <dt>Based in</dt>
            <dd>Sri Lanka</dd>
          </div>
          <div class="detail">
            <dt>Studying</dt>
            <dd>BSc Software Engineering — NIBM</dd>
          </div>
          <div class="detail">
            <dt>GPA</dt>
            <dd>3.64</dd>
          </div>
          <div class="detail">
            <dt>Previously</dt>
            <dd>Intern Full Stack Developer — GTS Active Pvt Ltd</dd>
          </div>
        </div>
      </div>

      <div class="about-image-row">
        <div class="about-img-wrap">
          <img :src="embeddedImg" alt="" />
        </div>
        <div class="about-img-wrap">
          <img :src="flightImg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import flightImg from '../assets/FlightDisplay.jpg'
import embeddedImg from '../assets/embededSystems.jpg'
</script>

<style scoped>
.about {
  padding: 120px 0 80px;
  padding-left: 72px;
}

.about-wrap {
  padding: 0 80px;
  max-width: 1240px;
}

.about-heading {
  font-size: 14px;
  font-family: var(--mono);
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 40px;
  font-weight: 400;
}

.about-layout {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 64px;
  align-items: start;
}

.about-prose p {
  font-size: 19px;
  line-height: 1.85;
  color: var(--text);
  margin-bottom: 20px;
}

.about-prose p:first-child {
  font-size: 21px;
  color: var(--text-bright);
}

.about-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 8px;
}

.detail {
  border-bottom: 1px solid var(--border);
  padding-bottom: 16px;
}

.detail:last-child {
  border-bottom: none;
}

.detail dt {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--border-light);
  margin-bottom: 4px;
}

.detail dd {
  font-size: 17px;
  color: var(--text-bright);
}

.about-image-row {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 16px;
  margin-top: 60px;
}

.about-img-wrap {
  border-radius: 8px;
  overflow: hidden;
  height: 240px;
}

.about-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.3) brightness(0.55);
  transition: filter 0.4s;
}

.about-img-wrap:hover img {
  filter: saturate(0.5) brightness(0.65);
}

@media (max-width: 900px) {
  .about {
    padding: 80px 0;
    padding-left: 0;
  }

  .about-wrap {
    padding: 0 24px;
  }

  .about-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-image-row {
    grid-template-columns: 1fr;
  }

  .about-img-wrap {
    height: 180px;
  }
}
</style>
