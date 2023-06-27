<script setup lang="ts">
import { watch, computed, onMounted, provide } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import type { Locales, State } from "./types";
import { useDisplay } from "vuetify";
import { IS_MOBILE } from "./constants";

// Hooks

const breakpoint = useDisplay();

// Store

const { state }: { state: State } = useStore();

// Locale

const { locale } = useI18n({ useScope: "global" });

const currentLanguage = computed<Locales>(() => state.language);

// Watchers and life cycles

watch(currentLanguage, () => (locale.value = currentLanguage.value));

onMounted(() => {
   provide(IS_MOBILE, breakpoint.xs.value);
});

// Provide and inject
</script>

<template>
   <router-view />
</template>

<style></style>
