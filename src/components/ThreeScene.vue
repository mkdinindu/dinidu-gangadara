<template>
  <div ref="container" class="three-scene" aria-hidden="true"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const container = ref(null)

let renderer, camera, group, raf, mouse, current
let dragging = false
let lastX = 0
let lastY = 0
let spinX = 0
let spinY = 0
let cursorMat
let onPointerDown, onPointerMove, onPointerUp, onResize, dispose

const AMBER = 0xe8a44a

function edgeBox(w, h, d, opacity) {
  const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(w, h, d))
  return new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
    color: AMBER,
    transparent: true,
    opacity,
  }))
}

onMounted(() => {
  const el = container.value
  const width = el.clientWidth
  const height = el.clientHeight

  const scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.z = 5.8

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)
  el.appendChild(renderer.domElement)

  const laptop = new THREE.Group()

  const base = edgeBox(2.3, 0.07, 1.6, 0.5)
  laptop.add(base)

  const lid = edgeBox(2.3, 1.45, 0.05, 0.55)
  lid.position.y = 0.725

  const codePoints = [
    [-0.85, 1.1, 0.027], [0.75, 1.1, 0.027],
    [-0.6, 0.92, 0.027], [0.85, 0.92, 0.027],
    [-0.85, 0.74, 0.027], [0.6, 0.74, 0.027],
    [-0.6, 0.56, 0.027], [0.2, 0.56, 0.027],
    [-0.85, 0.38, 0.027], [0.95, 0.38, 0.027],
  ]
  const codeGeo = new THREE.BufferGeometry().setFromPoints(codePoints)
  const codeLines = new THREE.LineSegments(codeGeo, new THREE.LineBasicMaterial({
    color: AMBER,
    transparent: true,
    opacity: 0.8,
  }))
  lid.add(codeLines)

  cursorMat = new THREE.MeshBasicMaterial({
    color: AMBER,
    transparent: true,
    opacity: 0.9,
  })
  const cursor = new THREE.Mesh(new THREE.PlaneGeometry(0.09, 0.14), cursorMat)
  cursor.position.set(0.9, 0.38, 0.028)
  lid.add(cursor)

  const lidPivot = new THREE.Group()
  lidPivot.position.set(0, 0.045, -0.78)
  lidPivot.rotation.x = 0.42
  lidPivot.add(lid)
  laptop.add(lidPivot)

  const keys = []
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 11; c++) {
      keys.push(-0.92 + c * 0.17, 0.042, -0.5 + r * 0.22)
    }
  }
  const keyBuf = new THREE.BufferGeometry()
  keyBuf.setAttribute('position', new THREE.Float32BufferAttribute(keys, 3))
  laptop.add(new THREE.Points(keyBuf, new THREE.PointsMaterial({
    color: AMBER,
    transparent: true,
    opacity: 0.55,
    size: 0.04,
  })))

  const trackpad = edgeBox(0.55, 0.005, 0.28, 0.25)
  trackpad.position.set(0, 0.045, 0.52)
  laptop.add(trackpad)

  group = new THREE.Group()
  group.add(laptop)
  group.scale.setScalar(1.12)
  scene.add(group)

  mouse = { x: 0, y: 0 }
  current = { x: 0, y: 0 }

  onPointerDown = (e) => {
    dragging = true
    lastX = e.clientX
    lastY = e.clientY
    el.classList.add('dragging')
  }

  onPointerMove = (e) => {
    if (dragging) {
      spinY += (e.clientX - lastX) * 0.007
      spinX += (e.clientY - lastY) * 0.007
      lastX = e.clientX
      lastY = e.clientY
      return
    }
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1
  }

  onPointerUp = () => {
    dragging = false
    el.classList.remove('dragging')
  }

  el.addEventListener('pointerdown', onPointerDown)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)

  onResize = () => {
    if (!el) return
    const w = el.clientWidth
    const h = el.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', onResize)

  dispose = () => {
    el.removeEventListener('pointerdown', onPointerDown)
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
    window.removeEventListener('resize', onResize)
    cancelAnimationFrame(raf)
    renderer.dispose()
    el?.removeChild(renderer.domElement)
  }

  const animate = () => {
    raf = requestAnimationFrame(animate)

    current.x += (mouse.x - current.x) * 0.04
    current.y += (mouse.y - current.y) * 0.04

    group.rotation.y = spinY + current.x * 0.3
    group.rotation.x = spinX - current.y * 0.3

    cursorMat.opacity = 0.2 + 0.7 * (0.5 + 0.5 * Math.sin(Date.now() * 0.006))

    const float = Math.sin(Date.now() * 0.0009) * 0.1
    group.position.y = float

    renderer.render(scene, camera)
  }
  animate()
})

onUnmounted(() => {
  dispose?.()
})
</script>

<style scoped>
.three-scene {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  width: min(430px, 44vw);
  height: min(430px, 44vw);
  z-index: 1;
  cursor: grab;
  touch-action: none;
}

.three-scene.dragging { cursor: grabbing; }

@media (max-width: 1100px) {
  .three-scene {
    width: 330px;
    height: 330px;
  }
}

@media (max-width: 900px) {
  .three-scene {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .three-scene {
    display: none;
  }
}
</style>