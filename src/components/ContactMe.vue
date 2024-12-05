<template>
  <section id="contact" class="section">
    <div class="contact-content">
      <!-- Left side - Social Links and Call -->
      <div class="contact-left">
        <h2>Connect With Me  <i class="fas fa-comment-dots"></i>
        </h2>
        <div class="social-links">
          <a href="https://github.com/kmanichandana" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>Github
          </a>
          <a href="https://www.linkedin.com/in/mani-chandana-kandukuri/" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>LinkedIn
          </a>
          <a href="mailto:your-email@example.com" target="_blank" aria-label="Mail">
            <i class="fas fa-envelope"></i>mkandukuri@hawk.iit.edu
          </a>
          <a href="tel:+1234567890" aria-label="Call">
            <i class="fas fa-phone-alt"></i>Call
          </a>
        </div>
      </div>

      <!-- Right side - Contact Form -->
      <div class="contact-right">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <button class="send-btn" @click.prevent="handleSubmit" style="color: black;">
              Send  
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactMe",
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic
      console.log('Form submitted', this.form);
      // Implement actual form submission logic (e.g., via email or API)
      this.resetForm();
    },
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
/* Section Style */

/* Content Section */
.contact-content {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  height: 100vh;
}

/* Left side (social links and call) */
.contact-left {
  flex: 1;
  max-width: 45%;
}

.contact-left h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
}

.social-links a {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #0073b1;
}

.social-links i {
  margin-right: 10px;
  font-size: 24px;
}

/* Right side (contact form) */
.contact-right {
  flex: 1;
  max-width: 45%;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  font-weight: 600;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}

.form-group textarea {
  min-height: 150px;
  resize: vertical;
}

.send-btn {
  width: auto; /* Adjusted width for the button */
  margin-top: 10px; /* Adds some spacing between the message box and the button */
  align-self: flex-start; /* Aligns the button to the left */
  padding: 12px 25px;
  font-size: 16px;
  background-color: #c4b8f7;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

form button:hover {
  background-color: #9a85f7;
}

/* Optional: Add responsiveness for smaller screens */
@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
    padding: 20px;
  }

  .contact-left, .contact-right {
    max-width: 100%;
  }

  .social-links a {
    font-size: 20px;
  }

  form button {
    width: 100%;
  }
}
</style>
