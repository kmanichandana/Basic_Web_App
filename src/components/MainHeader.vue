<template>
  <header class="header">
    <!-- Portfolio Text on the Left -->
    <span class="portfolio-text">&lt;Portfolio/&gt;</span>

    <!-- Navigation Links and Dark/Light Theme Toggle aligned to the Right -->
    <div class="right-section">
      <nav>
        <ul class="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <!-- Dark/Light Mode Toggle Icon -->
      <button class="theme-toggle" @click="toggleTheme">
        <!-- Show dark mode icon when in light mode, and light mode icon when in dark mode -->
        <img :src="isDarkTheme ? require('@/assets/light.png') : require('@/assets/dark.png')" alt="Theme Icon" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      isDarkTheme: false, // Default to light mode
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme; // Toggle the theme
      this.$emit('toggle-theme', this.isDarkTheme); // Emit the new theme state to parent component
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
}

.portfolio-text {
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-list li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-list li a:hover {
  color: #c4b8f7;
}

/* Theme Toggle Button */
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  position: relative; /* Ensures the button stays inside the header */
  z-index: 2000; /* Increase z-index to make sure it's above other content */
}

.theme-toggle img {
  width: 24px; /* Adjust size of the icon */
  height: 24px;
  transition: transform 0.3s ease;
}

.theme-toggle img:hover {
  transform: scale(1.1); /* Slight scale effect on hover */
}

</style>
