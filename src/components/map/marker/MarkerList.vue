<script setup lang="ts">
import MarkerControlsDropdown from "./MarkerControlsDropdown.vue";
import { useI18n } from "vue-i18n";
import NavDrawer from "@src/components/drawers/NavDrawer.vue";
import type { PropType } from "vue";
import type { Marker } from "@src/types";

// Types

type PointToMarkerFnType = (id: number | undefined) => void;
type RemoveMarkerFnType = (id: number | undefined) => void;

// Locale

const { t } = useI18n();

// Props

defineProps({
   markerList: {
      required: true,
      type: Array as PropType<Marker[]>,
   },
   pointToMarkerHandler: {
      required: true,
      type: Function as PropType<PointToMarkerFnType>,
   },
   removeMarkerHandler: {
      required: true,
      type: Function as PropType<RemoveMarkerFnType>,
   },
   isMarkerListShown: {
      required: true,
      type: Boolean as PropType<boolean>,
   },
   toggleMarkerListVis: {
      required: true,
      type: Function as PropType<() => void>,
   },
});
</script>

<template>
   <nav-drawer :width="325" v-if="isMarkerListShown">
      <div class="d-flex align-center justify-space-between pl-2">
         <h2>{{ t("marker.plural") }}:</h2>
         <v-btn
            icon="mdi-arrow-collapse-left"
            variant="text"
            @click="toggleMarkerListVis"
         ></v-btn>
      </div>
      <v-divider></v-divider>
      <v-list class="py-2 px-1">
         <v-list-item
            class="pa-0 custom-list-el"
            v-for="{ id, lat, lng, address } in markerList"
            :key="id"
            @click="pointToMarkerHandler(id)"
         >
            <div class="d-flex flex-column">
               <div
                  class="d-flex align-center justify-space-between pl-2 w-100"
               >
                  <p class="text-h6 font-weight-bold">
                     {{ t("marker.id") }}: {{ id }}
                  </p>
                  <span class="text-body-2"
                     ><span class="text-h6 font-weight-bold"
                        >{{ t("marker.lat") }}:</span
                     >
                     {{ lat }}</span
                  >
                  <span class="text-body-2"
                     ><span class="text-h6 font-weight-bold"
                        >{{ t("marker.lng") }}:</span
                     >
                     {{ lng }}</span
                  ><MarkerControlsDropdown
                     :removeMarkerHandler="() => removeMarkerHandler(id)"
                  />
               </div>
               <span class="px-2" v-if="address"
                  ><span class="text-h6 font-weight-bold"
                     >{{ t("marker.address") }}:</span
                  >
                  {{ address }}</span
               >
            </div>
         </v-list-item>
      </v-list>
   </nav-drawer>
</template>

<style>
.custom-list-el {
   border: 2px solid rgba(0, 0, 0, 0.6) !important;
   margin-top: 5px;
   border-radius: 5px !important;
}
</style>
