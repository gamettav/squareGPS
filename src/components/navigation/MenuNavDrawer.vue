<script setup lang="ts">
import NavDrawer from "../drawers/NavDrawer.vue";
import type { NavOption } from "@src/types";
import type { PropType } from "vue";

// Props

defineProps({
   navOptions: { required: true, type: Array as PropType<NavOption[]> },
});

// Emits

defineEmits(["navigateTo"]);
</script>

<template>
   <nav-drawer permanent app>
      <v-list>
         <v-list-item
            v-for="navOption in navOptions"
            :key="navOption.title"
            @click="$emit('navigateTo', navOption.path)"
         >
            <v-list-item-content>
               <v-list-item-title>{{ navOption.title }}</v-list-item-title>
            </v-list-item-content>
         </v-list-item>
      </v-list>
   </nav-drawer>
</template>

<style scoped></style>
