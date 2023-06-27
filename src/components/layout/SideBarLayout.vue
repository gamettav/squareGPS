<script setup lang="ts">
import Header from "../navigation/Header.vue";
</script>

<template>
  <v-app>
    <Header />

    <v-content class="mt-15">
      <router-view />
    </v-content>
  </v-app>
</template>
