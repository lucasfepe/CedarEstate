<!-- app.vue -->
<template>
  <div class="landing-container">
    <div class="overlay"></div>
    <img 
      :src="placeholderImage" 
      alt="Cedar Estate" 
      class="background-image"
      @load="imageLoaded = true"
    >
    <div class="content" :class="{ 'fade-in': imageLoaded }">
      <h1 class="title">Cedar Estate</h1>
      <p class="subtitle">Coming Soon</p>
      <div class="contact-info">
        <p class="contact-item">
          <span class="contact-label">Email: </span>
          <span 
            class="contact-value clickable" 
            @click="handleEmailClick"
            :title="emailHint"
          >
            {{ displayEmail }}
          </span>
        </p>
        <p class="contact-item">
          <span class="contact-label">Phone: </span>
          <span 
            class="contact-value clickable" 
            @click="handlePhoneClick"
            :title="phoneHint"
          >
            {{ displayPhone }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import bannerImage from '~/assets/images/Banner.jpg';

const { revealEmail, revealPhone, getObfuscatedEmail, getObfuscatedPhone } = useContact();

const imageLoaded = ref(false);
const displayEmail = ref(getObfuscatedEmail());
const displayPhone = ref(getObfuscatedPhone());
const emailHint = ref('Click to reveal email address');
const phoneHint = ref('Click to reveal phone number');

const placeholderImage = bannerImage;

// Check if image is already loaded on mount
onMounted(() => {
  const img = document.querySelector('.background-image') as HTMLImageElement;
  if (img && img.complete) {
    imageLoaded.value = true;
  }
});

const handleEmailClick = (event: MouseEvent) => {
  revealEmail(event);
  displayEmail.value = (event.target as HTMLElement).textContent || '';
  emailHint.value = '';
};

const handlePhoneClick = (event: MouseEvent) => {
  revealPhone(event);
  displayPhone.value = (event.target as HTMLElement).textContent || '';
  phoneHint.value = '';
};
</script>
  <style scoped>
/* Container - full viewport */
.landing-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Background image - full size */
.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Dark overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

/* Content - centered */
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

/* Basic styling */
.title {
  font-size: 4rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', -apple-system, BlinkMacSystemFont, sans-serif;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', -apple-system, BlinkMacSystemFont, sans-serif;

}

.contact-info {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
}

.contact-item {
  margin: 0.5rem 0;
}

.clickable {
  cursor: pointer;
  text-decoration: underline;
}

/* Fade in animation */
.content {
  opacity: 0;
}

.content.fade-in {
  opacity: 1;
  transition: opacity 1s;
}
</style>
