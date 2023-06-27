<script setup lang="ts">
defineProps({
   width: { required: false, defaultValue: 280 },
});
</script>

<template>
   <v-navigation-drawer permanent app :width="width" color="#FFF">
      <slot />
   </v-navigation-drawer>
</template>

<style>
.v-navigation-drawer {
   border-right: 2px solid black !important;
}
</style>
