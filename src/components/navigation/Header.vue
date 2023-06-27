<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { LOCALES } from "@src/i18n/locales/locales";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { SET_LANGUAGE } from "@src/store/actionTypes";
import type { Locales, NavOption, Routes } from "@src/types";
import { MAP_PATH, TASK_PATH } from "@src/router";
import { useRouter } from "vue-router";
import MenuNavDrawer from "./MenuNavDrawer.vue";

// Locale

const { t } = useI18n();

const updateLanguage = (language: Locales) => {
   store.dispatch(SET_LANGUAGE, language);
};

// Store

const store = useStore();

// Router

const router = useRouter();

const navigateTo = (path: Routes) => {
   router.push(path);
};

const navOptions = computed<NavOption[]>(() => [
   { title: t("header.task-nav-option"), path: TASK_PATH },
   { title: t("header.map-nav-option"), path: MAP_PATH },
]);

// Drawer visibility

const showDrawer = ref(false);

const toggleMenuDrawer = () => {
   showDrawer.value = !showDrawer.value;
};
</script>

<template>
   <v-app-bar content-class="elevation-0" app class="bg-white toolbar">
      <v-img max-width="90" class="ml-5" src="/logo.png" />
      <h2 class="px-2">/</h2>
      <v-toolbar-title class="text-no-wrap ml-0 text-grey-darken-1">{{
         t("header.test-task")
      }}</v-toolbar-title>

      <v-toolbar-items variant="plain" class="nav-buttons">
         <h2 class="px-2">/</h2>
         <v-btn
            v-for="navOption in navOptions"
            :key="navOption.title"
            @click="navigateTo(navOption.path)"
            flat
         >
            <h3 class="nav-button-title text-black">
               {{ navOption.title }}
            </h3></v-btn
         >
      </v-toolbar-items>

      <v-menu
         location="bottom start"
         origin="overlap"
         transition="slide-y-transition"
      >
         <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-web"></v-btn>
         </template>

         <v-list :lines="false">
            <v-list-item
               v-for="locale in LOCALES"
               :key="locale.caption"
               @click="updateLanguage(locale.value)"
               >{{ locale.caption }}</v-list-item
            >
         </v-list>
      </v-menu>

      <v-app-bar-nav-icon
         class="burger-menu-icon"
         @click="toggleMenuDrawer"
      ></v-app-bar-nav-icon>
   </v-app-bar>
   <menu-nav-drawer
      v-if="showDrawer"
      :nav-options="navOptions"
      @navigate-to="navigateTo"
   />
</template>

<style scoped>
* {
   font-family: "GTAmericaExpMd", Helvetica, Arial !important;
}

.toolbar {
   border-bottom: 2px solid black;
}

.nav-buttons {
   display: flex;
   align-items: center;
}

.nav-button-title {
   color: black;
}

.burger-menu-icon {
   display: none;
}

@media (max-width: 600px) {
   .nav-buttons {
      display: none;
   }
   .burger-menu-icon {
      display: block;
   }
}
</style>
