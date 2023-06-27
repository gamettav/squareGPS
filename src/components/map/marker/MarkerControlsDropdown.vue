<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { PropType } from "vue";

// Locale

const { t } = useI18n();

// Props

defineProps({
   removeMarkerHandler: {
      required: true,
      type: Function as PropType<() => void>,
   },
});
</script>

<template>
   <v-menu>
      <template v-slot:activator="{ props }">
         <v-btn
            variant="text"
            v-bind="props"
            icon="mdi-dots-horizontal"
            size="small"
         >
         </v-btn>
      </template>

      <v-list>
         <v-list-item v-ripple class="dropdown-item">
            <v-list-item-title @click="removeMarkerHandler">{{
               t("actions.remove")
            }}</v-list-item-title>
         </v-list-item>
      </v-list>
   </v-menu>
</template>

<style scoped>
.dropdown-item {
   cursor: pointer;
}
</style>
