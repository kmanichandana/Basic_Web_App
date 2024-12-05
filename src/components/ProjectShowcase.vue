<template>
  <section id="projects" class="projects-section">
    <h2>PROJECTS</h2>
    <div class="project-list">
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <!-- Project Image -->
        <img :src="project.image" :alt="project.name" class="project-image" />

        <!-- Project Title -->
        <h3>{{ project.name }}</h3>

        <!-- Source Code Button (GitHub) -->
        <a :href="project.github" target="_blank" class="source-code">
          Source Code <i class="fas fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectShowcase",
  data() {
    return {
      // Array of project data with image and GitHub repository link
      projects: [
        {
          name: "Task Manager",
          github: "https://github.com/kmanichandana/Basic_Web_App",  // GitHub repo link
          image: require('@/assets/taskmanager.png'), // Local image for Project One
        },
        {
          name: "Hawk Commute",
          github: "https://github.com/username/project2",  // GitHub repo link
          image: require('@/assets/hawkcommute.jpeg'), // Local image for Project Two
        },
        {
          name: "Instagram Profile",
          github: "https://super-duper-invention-4j7947x6x7wx3j6rq-3000.app.github.dev/",  // GitHub repo link
          image: require('@/assets/myprofile.png'), // Local image for Project Three
        }    
        ],
    };
  },
};
</script>

<style scoped>
/* Add styles for ProjectShowcase */

.projects-section{
  height: 100vh;
}
.project-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

.project-card {
  background-color: #beb3ec;
  padding: 3px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: -10px;
  border: black;
}

.project-card h3 {
  font-size: 1.5em;
  margin-bottom: 2px;
}
h2 {
  padding:30px;
  margin: 0px;
  text-align: center;
}
.project-card a {
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 5px;
}

.source-code:hover {
  text-decoration: underline;
}
</style>
