<script setup lang="ts">
import type { ReadOnly } from "@src/types";
import { LControl } from "@vue-leaflet/vue-leaflet";
import { useI18n } from "vue-i18n";
import type { PropType } from "vue";

// Locale

const { t } = useI18n();

// Props

defineProps({
   readOnly: {
      required: true,
      type: Boolean as PropType<ReadOnly>,
   },
   isUnableToGeocode: {
      required: true,
      type: Boolean as PropType<boolean>,
   },
   mapEditModeHandler: {
      required: true,
      type: Function as PropType<() => void>,
   },
   closeAlertHandler: {
      required: true,
      type: Function as PropType<() => void>,
   },
   toggleMarkerListVis: {
      required: true,
      type: Function as PropType<() => void>,
   },
});
</script>

<template>
   <l-control position="bottomleft">
      <v-btn
         color="black"
         class="text"
         icon="mdi-map-marker-multiple"
         size="large"
         @click="toggleMarkerListVis"
      >
      </v-btn>
   </l-control>
   <l-control position="bottomright">
      <v-btn
         :color="readOnly ? 'blue-accent-4' : 'black'"
         class="text"
         icon="mdi-plus"
         size="small"
         @click="mapEditModeHandler"
      >
      </v-btn>
   </l-control>
   <l-control v-if="isUnableToGeocode" position="topright">
      <v-alert type="warning" prominent border="top" close="mdi-plus">
         <div class="d-flex align-center">
            <h3>{{ t("alert.address-unable-to-geocode") }}</h3>
            <v-btn
               @click="closeAlertHandler"
               icon="mdi-close"
               variant="text"
            ></v-btn>
         </div>
      </v-alert>
   </l-control>
</template>
