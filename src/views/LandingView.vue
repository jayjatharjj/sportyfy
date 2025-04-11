<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-vh-100">
    <!-- Hero Section -->
    <header class="hero position-relative d-flex align-items-center justify-content-center text-center text-white" style="height: 100vh;">
      <div class="container">
        <h1 class="display-1 fw-bold mb-3 animate__animated animate__fadeInDown" style="background: linear-gradient(80deg, #60efff, #c70000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 0 20px rgba(0, 255, 135, 0.3);">SPORTYFY</h1>
        <p class="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s neon-text">IGNITE YOUR PASSION • DOMINATE THE GAME • CREATE LEGACY</p>
        <div class="d-flex gap-3 justify-content-center animate__animated animate__fadeInUp animate__delay-2s">
          <RouterLink to="/create-match" class="btn btn-primary btn-lg px-4 py-2 rounded-pill pulse-animation glow-button">
            <i class="bi bi-plus-circle me-2"></i>Create Match
          </RouterLink>
          <RouterLink to="/join-match" class="btn btn-outline-light btn-lg px-4 py-2 rounded-pill glow-button">
            <i class="bi bi-people me-2"></i>Join Match
          </RouterLink>
        </div>
      </div>
    </header>

    <!-- Features Section -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-5 animate__animated animate__fadeIn neon-text">UNLEASH YOUR POTENTIAL</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card bg-transparent text-white border-0 h-100 hover-card glass-card">
              <div class="card-body text-center p-4">
                <i class="bi bi-trophy display-4 mb-3 text-warning glow-icon"></i>
                <h3 class="card-title h4 mb-3">CHAMPION'S PATH</h3>
                <p class="card-text">Forge your destiny in epic tournaments and rise to glory!</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-transparent text-white border-0 h-100 hover-card glass-card">
              <div class="card-body text-center p-4">
                <i class="bi bi-lightning-charge display-4 mb-3 text-primary glow-icon"></i>
                <h3 class="card-title h4 mb-3">DYNAMIC TEAMS</h3>
                <p class="card-text">Join forces with elite players and conquer the competition!</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-transparent text-white border-0 h-100 hover-card glass-card">
              <div class="card-body text-center p-4">
                <i class="bi bi-graph-up-arrow display-4 mb-3 text-success glow-icon"></i>
                <h3 class="card-title h4 mb-3">ELITE TRACKING</h3>
                <p class="card-text">Dominate with real-time stats and performance analytics!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tournaments Section -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-4 animate__animated animate__fadeIn neon-text">EPIC BATTLES AWAIT</h2>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card bg-transparent text-white border-0 h-100 hover-card glass-card">
              <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <i class="bi bi-trophy-fill display-4 text-warning glow-icon"></i>
                  <span class="badge bg-warning text-dark glow-badge">CHAMPIONSHIP</span>
                </div>
                <h3 class="card-title h4 mb-2">SUMMER SHOWDOWN</h3>
                <p class="card-text mb-3">16 Elite Teams • June 1st • $10,000 Prize Pool</p>
                <button class="btn btn-outline-warning w-100 glow-button">
                  <i class="bi bi-arrow-right-circle me-2"></i>Claim Your Spot
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card bg-transparent text-white border-0 h-100 hover-card glass-card">
              <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <i class="bi bi-star-fill display-4 text-primary glow-icon"></i>
                  <span class="badge bg-primary text-white glow-badge">PREMIER</span>
                </div>
                <h3 class="card-title h4 mb-2">CITY CHAMPIONS LEAGUE</h3>
                <p class="card-text mb-3">8 Powerhouse Teams • May 15th • $5,000 Prize Pool</p>
                <button class="btn btn-outline-primary w-100 glow-button">
                  <i class="bi bi-arrow-right-circle me-2"></i>Join the Battle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glow-icon {
  filter: drop-shadow(0 0 8px currentColor);
}

.glow-button {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.glow-button:hover {
  box-shadow: 0 0 15px currentColor;
}

.glow-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  transition: all 0.3s ease;
}

.glow-button:hover::before {
  animation: shine 1.5s infinite;
}

.glow-badge {
  box-shadow: 0 0 10px currentColor;
}

.neon-text {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  letter-spacing: 2px;
}

.pulse-animation {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 255, 135, 0.4);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(0, 255, 135, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 255, 135, 0);
  }
}

@keyframes shine {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  .hero .d-flex {
    flex-direction: column;
  }
}
</style> 