<script setup lang="ts">
import { LPopup, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
import "leaflet";
import "leaflet/dist/leaflet.css";
import { useI18n } from "vue-i18n";
import type { PropType } from "vue";
import type { Marker } from "@src/types";
import markerIconPng from "/map_marker.png";

// Types

type PointToMarkerHandlerType = (id: number | undefined) => void;

// Locale

const { t } = useI18n();

// Props

defineProps({
   markerList: {
      required: true,
      type: Array as PropType<Marker[]>,
   },
   // TODO: add fn to target ripple on MarkerList items using router
   pointToMarkerHandler: {
      required: true,
      type: Function as PropType<PointToMarkerHandlerType>,
   },
});
</script>

<template>
   <l-marker
      v-for="{ id, lat, lng } in markerList"
      :key="id"
      :lat-lng="[lat, lng]"
      @click="pointToMarkerHandler(id)"
   >
      <l-icon
         :icon-size="[25, 25]"
         :icon-anchor="[15, 25]"
         :icon-url="markerIconPng"
      >
      </l-icon>
      <l-popup>
         <p>{{ t("marker.id") }}: {{ id }}</p>
         <p>{{ t("marker.lat") }}: {{ lat }}</p>
         <p>{{ t("marker.lng") }}: {{ lng }}</p>
      </l-popup>
   </l-marker>
</template>
