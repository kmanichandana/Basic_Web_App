<template>
  <section id="skills" class="skillset-section">
    <h2>My Skills</h2>
    <div class="skill-group">
      <div class="hex">
        <div class="hex-content">
          <img src="@/assets/Skills/java.png" alt="Java" />
          <p>Java</p>
        </div>
      </div>
      <div class="hex">
        <div class="hex-content">
          <img src="@/assets/Skills/python.png" alt="Python" />
          <p>Python</p>
        </div>
      </div>
      <div class="hex">
        <div class="hex-content">
          <img src="@/assets/Skills/mysql.png" alt="SQL" />
          <p>SQL</p>
        </div>
      </div>
      <div class="hex">
        <div class="hex-content">
          <img src="@/assets/Skills/javascript.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
      </div>
      <div class="hex">
        <div class="hex-content">
          <img src="@/assets/Skills/html.png" alt="HTML" />
          <p>HTML</p>
        </div>
      </div>
    </div>
    <div class="skill-group">
      <div class="hex">
        <div class="hex-content">
          <img src="@/assets/Skills/vscode.png" alt="VSCode" />
          <p>VSCode</p>
        </div>
      </div>
      <div class="hex">
        <div class="hex-content">
          <img src="@/assets/Skills/git.png" alt="Git" />
          <p>Git</p>
        </div>
      </div>
      <div class="hex">
        <div class="hex-content">
          <img src="@/assets/Skills/netbeans.png" alt="NetBeans" />
          <p>NetBeans</p>
        </div>
      </div>
      <div class="hex">
        <div class="hex-content">
          <img src="@/assets/Skills/androidstudio.png" alt="Android Studio" />
          <p>Android Studio</p>
        </div>
      </div>
    </div>
    <div class="skill-group">
      <div class="hex">
        <div class="hex-content">
          <img src="@/assets/Skills/css.png" alt="CSS" />
          <p>CSS</p>
        </div>
      </div>
      <div class="hex">
        <div class="hex-content">
          <img src="@/assets/Skills/vue.png" alt="Vue" />
          <p>Vue</p>
        </div>
      </div>
      <div class="hex">
        <div class="hex-content">
          <img src="@/assets/Skills/databricks.png" alt="Databricks" />
          <p>Databricks</p>
        </div>
      </div>
      <div class="hex">
        <div class="hex-content">
          <img src="@/assets/Skills/eclipse.png" alt="Eclipse" />
          <p>Eclipse</p>
        </div>
      </div>
      <div class="hex">
        <div class="hex-content">
          <img src="@/assets/Skills/github.png" alt="GitHub" />
          <p>Github</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "SkillSet",
};
</script>

<style scoped>
.skillset-section {
  text-align: center;
  padding: 10px 20px;
  height: 100vh;

}

.skillset-section h2 {
  margin-bottom: 50px;
  font-size: 2em;
  color: #060202;
  padding-top: 40px;
}

/* Style for the skill group flex containers */
.skill-group {
  display: flex;
  justify-content: center;
  gap: 10px; /* Spacing between the hex groups */
  margin-top: -20px;
}

/* Hex item styling */
.hex {
  width: 120px;
  height: 138px;
  position: relative;
  clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  background-color: #beb3ec;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.hex:hover {
  background-color: #c1bbe8;
}

/* Content inside hex */
.hex-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
}

.hex-content img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.hex-content p {
  font-size: 0.9em;
  font-weight: bold;
  color: #333;
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hex {
    width: 100px;
    height: 115px;
  }

  .hex-content img {
    width: 40px;
    height: 40px;
  }

  .hex-content p {
    font-size: 0.8em;
  }
}

</style>
