<template>
    <!-- Button to Toggle Dark Theme -->
    <button class="theme-toggle" @click="toggleTheme">
      Toggle Dark Theme
    </button>
  </template>
  
  <script>
  export default {
    name: "DarkMode",
    methods: {
      toggleTheme() {
        this.$emit("toggle-theme", !this.$parent.isDarkTheme); // Emit the event to toggle the theme
      },
    },
  };
  </script>
  