<template>
  <section id="about" class="section">
    <div class="about-content">
      <div class="text">
        <h2>Hello, I am <span class="purplename">Mani Chandana</span></h2>
        <h3>I am an aspiring <span class="purplerole">{{ currentRole }}</span></h3>
        <p>I am a passionate software developer with a keen focus on creating innovative web solutions and crafting seamless front-end experiences.</p>
      
        <div class="social-links">
          <a href="https://github.com/kmanichandana" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mani-chandana-kandukuri/" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:your-email@example.com" target="_blank" aria-label="Mail">
            <i class="fas fa-envelope"></i>
          </a>
        </div>

        <div class="button-group">
          <button class="button hire-me" @click="scrollToHireMe">Hire Me</button>
          <button class="button download-cv" @click="downloadCV">Download CV</button>
        </div>
      </div>

      <div class="image">
        <img src="@/assets/ProfPic.jpeg" alt="Mani's Picture" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      roles: ["Software Developer.", "Front End Developer.", "Web Developer."],
      currentRole: "",
      currentIndex: 0,
      typingSpeed: 50, // Typing speed in milliseconds
      erasingSpeed: 50, // Speed at which text is erased
      pauseBetweenRole: 200, // Pause time before switching to the next role
      isErasing: false,
    };
  },
  mounted() {
    this.typeRole();
  },
  methods: {
    typeRole() {
      const currentWord = this.roles[this.currentIndex];
      let index = this.isErasing ? currentWord.length : 0;

      const typeInterval = setInterval(() => {
        if (this.isErasing) {
          this.currentRole = currentWord.substring(0, index);
          index--;
          if (index < 0) {
            clearInterval(typeInterval);
            this.isErasing = false;
            setTimeout(this.nextRole, this.pauseBetweenRole); // Pause before typing next role
          }
        } else {
          this.currentRole = currentWord.substring(0, index);
          index++;
          if (index > currentWord.length) {
            clearInterval(typeInterval);
            this.isErasing = true;
            setTimeout(this.typeRole, this.pauseBetweenRole); // Pause before erasing
          }
        }
      }, this.isErasing ? this.erasingSpeed : this.typingSpeed);
    },
    nextRole() {
      this.currentIndex = (this.currentIndex + 1) % this.roles.length;
      this.typeRole();
    },
  },
};
</script>

<style scoped>
/* Style for the name */
.purplename {
  color: #8f7aec; /* Purple color for name */
  font-family:cursive;
  font-size: 40px;
}

/* Style for the roles */
.purplerole {
  font-weight: bold;
  font-style: italic;
  color: #8f7aec; /* Purple color for roles */
}
.section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  height: 100vh;
}

.about-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

/* Style for text section */
.text {
  max-width: 50%;
}

.typed-role {
  font-weight: bold;
  font-style: italic;
  display: inline-block;
}

/* Style for image section */
.image img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 500px;
}

/* Social media links style */
.social-links {
  margin-top: 20px;
}

.social-links a {
  margin-right: 15px;
  font-size: 30px;
  color: #333;
  text-decoration: none;
}

.social-links a:hover {
  color: #c4b8f7; /* Change color on hover */
}

.button-group {
  margin-top: 30px;
}

.button {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  text-decoration: none;
  background-color: #beb3ec;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;;
}

.button:hover {
  background-color: #9a85f7; /* Darker blue on hover */
}

/* Optional: Add responsiveness for smaller screens */
@media (max-width: 768px) {
  .section {
    flex-direction: column;
    text-align: center;
  }

  .image img {
    width: 200px;
    height: 200px;
  }

  .text {
    max-width: 100%;
    margin-bottom: 20px; /* Optional: Add some space between text and image */
  }
}
</style>
