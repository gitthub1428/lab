// GSAP Hero Animation
gsap.from(".hero-text", { opacity: 0, y: 50, duration: 1.5, ease: "power3.out" });

// Floating QR Button
document.getElementById("qr-btn").addEventListener("click", () => {
  alert("QR Scanner Modal Here!");
});

// DNA Helix (Three.js)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("dna-helix").appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(0.1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

for (let i = 0; i < 50; i++) {
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(Math.sin(i * 0.3) * 2, i * 0.2, Math.cos(i * 0.3) * 2);
  scene.add(sphere);
}

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  scene.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
