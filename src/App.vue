<template>
  <div id="app" :class="{ dark: isDarkTheme }">
    <header>
      <MainHeader @toggle-theme="toggleTheme" />
    </header>
    <main class="main-content">
      <!-- Home Section -->
      <section id="home">
        <AboutMe />
      </section>

      <!-- Skills Section -->
      <section id="skills">
        <SkillSet />
      </section>

      <!-- Projects Section -->
      <section id="projects">
        <ProjectShowcase />
      </section>

      <!-- Contact Section -->
      <section id="contact">
        <ContactMe />
      </section>
    </main>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import AboutMe from './components/AboutMe.vue';
import SkillSet from './components/SkillSet.vue';
import ProjectShowcase from './components/ProjectShowcase.vue';
import ContactMe from './components/ContactMe.vue';

export default {
  components: {
    MainHeader,
    AboutMe,
    SkillSet,
    ProjectShowcase,
    ContactMe,
  },
  data() {
    return {
      isDarkTheme: false, // State for dark mode
    };
  },
  methods: {
    toggleTheme(newThemeState) {
      this.isDarkTheme = newThemeState; // Update the theme based on the emitted event
    },
  },
};
</script>

<style>
/* Base Styles */
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  scroll-behavior: smooth;
}

/* Light Mode */
header {
  background-color: white; /* Header background in light mode */
}

main {
  background-color: #ece9f9; /* Main container background in light mode */
}

#app header, #app h1, #app h2, #app h3, #app p, #app a {
  color: black !important; /* Text color in light mode */
}

/* Dark Mode */
.dark {
  background-color: #121212; /* Dark background for the entire app */
}

/* Dark Mode Header */
.dark header {
  background-color: #c1bbe8; /* Light grey background for the header */
}

.dark main {
  background-color: #ffffff; /* Black background for the main content */
}

/* Dark Mode Text */
.dark #app header,
.dark #app h1,
.dark #app h2,
.dark #app h3,
.dark #app p,
.dark #app a {
  color: white !important; /* White text color in dark mode */
}

/* Dark Mode Section Text */
.dark section#home,
.dark section#skills,
.dark section#projects,
.dark section#contact {
  background-color: #000000 !important; /* Darker background for sections in dark mode */
  color: white !important; /* Ensuring section text is white in dark mode */
}

/* Ensuring all text inside sections is white in dark mode */
.dark section#home h2,
.dark section#home h3,
.dark section#home a,
.dark section#home p,
.dark section#skills h2,
.dark section#projects h1,
.dark section#projects h2,
.dark section#projects p,
.dark section#contact h2,
.dark section#contact h2,
.dark section#contact label
.dark section#contact a{
  color: white !important; /* All text in sections turns white in dark mode */
}
.dark #contact .contact-left h2,
.dark #contact .social-links a,
.dark #contact .contact-right label,
.dark #contact .contact-right input,
.dark #contact .contact-right textarea {
  color: white !important; /* Ensure all text is white in dark mode */
}

.dark #contact .social-links i {
  color: white !important; /* Ensure icons are white in dark mode */
}
</style>
