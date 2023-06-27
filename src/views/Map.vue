<script setup lang="ts">
import { ref, computed, onMounted, watch, inject } from "vue";
import { useRouter, useRoute } from "vue-router";
import "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { useStore } from "vuex";
import {
   TOGGLE_READONLY,
   ADD_MARKER,
   REMOVE_ERROR,
   REMOVE_MARKER,
   GET_MARKET_LIST,
} from "@src/store/actionTypes";
import type { State, Cords, Center, Marker } from "@src/types";
import { MapMarkers, MarkerList, MapControls } from "../components";
import { DEFAULT_ZOOM, IS_MOBILE } from "../constants";
import { unableToGeocodeError } from "@src/errors";
import { mapCenterCalcFn } from "../util/mapcenter";

// Helpers

const TILE_LAYER_URL = import.meta.env.VITE_TILE_LAYER_URL;

const updateCenter = (newCenter: Center) => {
   mapCenter.value = newCenter;
};

const toggleMarkerListVis = () => {
   isMarkerListShown.value = !isMarkerListShown.value;
};

const showMarkerList = () => {
   isMarkerListShown.value = true;
};

// Inject

const isMobile = inject(IS_MOBILE);

// Router

const router = useRouter();
const route = useRoute();

const navigateToMarker = (markerId: number) => {
   router.push({ path: `/map/${markerId}` });
};

const markerWasRemoved = () => {
   router.push({ path: `/map` });
};

// Store

const store = useStore();
const { state }: { state: State } = store;

// Dispatchers

const dispatchAddMarker = (marker: Marker) =>
   store.dispatch(ADD_MARKER, marker);
const dispatchToggleReadOnly = () => store.dispatch(TOGGLE_READONLY);
const dispatchRemoveMarker = (markerId: number) =>
   store.dispatch(REMOVE_MARKER, markerId);
const dispatchRemoveError = (error: Error) =>
   store.dispatch(REMOVE_ERROR, error);
const dispatchGetMarkerList = () => store.dispatch(GET_MARKET_LIST);

// State

const mapZoom = ref<number>(DEFAULT_ZOOM);
const mapCenter = computed<Center>({
   get() {
      const markerIdQuery = parseInt(route.params?.marker as string);
      return mapCenterCalcFn(state.markerList, markerIdQuery);
   },
   set(newCenter) {
      return newCenter;
   },
});
const isUnableToGeocode = computed(() => {
   return store.getters["isUnableToGeocode"];
});
const isLoading = ref(true);
const isMarkerListShown = ref(!isMobile);

// Add, remove and point to marker handlers

const addMarkerHandler = ({ latlng }: { latlng: Cords }) => {
   if (!state.readOnly) {
      dispatchAddMarker({
         lat: latlng.lat,
         lng: latlng.lng,
      });
      showMarkerList();
      dispatchToggleReadOnly();
   }
};

const removeMarkerHandler = (markerId: number | undefined) => {
   if (markerId) {
      markerWasRemoved();
      dispatchRemoveMarker(markerId);
   }
};

const pointToMarkerHandler = (markerId: number | undefined) => {
   if (markerId) navigateToMarker(markerId);
};

// Map handlers

const mapEditModeHandler = () => {
   dispatchToggleReadOnly();
};

const closeAlertHandler = () => {
   dispatchRemoveError(unableToGeocodeError);
};

// Watchers and life cycles

watch(
   () => state.markerList,
   () => {
      isLoading.value = false;
   }
);

onMounted(() => {
   dispatchGetMarkerList();
});
</script>

<template>
   <marker-list
      :marker-list="state.markerList"
      :point-to-marker-handler="pointToMarkerHandler"
      :remove-marker-handler="removeMarkerHandler"
      :is-marker-list-shown="isMarkerListShown"
      :toggle-marker-list-vis="toggleMarkerListVis"
   />
   <!-- FIXME: remove inline styles -->
   <v-container
      :class="`ma-0 ml-auto ${!state.readOnly ? 'add-marker' : ''}`"
      style="height: 90vh; width: 100vw; max-width: 100vw"
   >
      <l-map
         v-if="!isLoading"
         @update:center="updateCenter"
         :zoom="mapZoom"
         :center="mapCenter"
         @click="addMarkerHandler"
      >
         <l-tile-layer :url="TILE_LAYER_URL"></l-tile-layer>
         <map-controls
            :close-alert-handler="closeAlertHandler"
            :read-only="state.readOnly"
            :map-edit-mode-handler="mapEditModeHandler"
            :is-unable-to-geocode="isUnableToGeocode"
            :toggle-marker-list-vis="toggleMarkerListVis"
         />
         <map-markers
            :marker-list="state.markerList"
            :point-to-marker-handler="pointToMarkerHandler"
         />
      </l-map>
   </v-container>
</template>

<style>
.leaflet-grab {
   cursor: default;
}

.add-marker {
   .leaflet-grab {
      cursor: url("/map_marker.png") 17 60, auto !important;
   }
}

.leaflet-dragging .leaflet-grab {
   cursor: move;
}
</style>
