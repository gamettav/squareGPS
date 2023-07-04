<script setup lang="ts">
import { inject } from "vue";
import { IS_MOBILE } from "@src/constants";
import { useI18n } from "vue-i18n";

// Locale

const { t } = useI18n();

const isMobile = inject(IS_MOBILE);
</script>
<template>
   <v-container class="ma-0">
      <v-row>
         <v-col>
            <h1 class="pb-2">{{ t("view-specific.task.title") }}</h1>
            <p>
               {{ t("view-specific.task.descr") }}
            </p>
         </v-col>
      </v-row>

      <v-row>
         <v-col>
            <h2 class="pt-4 pb-2">
               {{ t("view-specific.task.sections.first.title") }}
            </h2>
            <p>
               {{ t("view-specific.task.sections.first.descr") }}
            </p>
         </v-col>
      </v-row>

      <v-row>
         <v-col>
            <h2 class="pt-4 pb-2">
               {{ t("view-specific.task.sections.second.title") }}
            </h2>
            <p>{{ t("view-specific.task.sections.second.descr") }}</p>

            <v-list tag="ol">
               <v-list-item
                  tag="li"
                  class="numbered-list-item"
                  v-for="(_, index) in 5"
                  :key="index"
               >
                  <i18n-t
                     :keypath="`view-specific.task.sections.second.list[${index}]`"
                     tag="span"
                  >
                     <template v-slot:link>
                        <a target="_blank" href="https://geocode.maps.co/"
                           >https://geocode.maps.co/</a
                        >
                     </template>
                  </i18n-t>
               </v-list-item>
            </v-list>
         </v-col>
      </v-row>

      <v-row>
         <v-col>
            <p>
               {{ t("view-specific.task.sections.third.descr") }}
            </p>
            <v-list tag="ol">
               <v-list-item
                  tag="li"
                  class="numbered-list-item"
                  v-for="(_, index) in 3"
                  :key="index"
               >
                  <span>{{
                     t(`view-specific.task.sections.third.list[${index}]`)
                  }}</span>
               </v-list-item>
            </v-list>
            <p>
               {{ t("view-specific.task.reminder") }}
            </p>
         </v-col>
      </v-row>

      <v-row>
         <v-col>
            <p>{{ t("example") }}:</p>
            <v-img
               class="align-self-center"
               :width="isMobile ? '100%' : '700px'"
               src="/task_example.png"
            />
         </v-col>
      </v-row>
   </v-container>
</template>

<style scoped>
.v-row {
   margin-bottom: 1rem;
}

a:visited {
   text-decoration: none;
   color: black;
}

.numbered-list-item {
   display: list-item;
   list-style-position: inside;
}
</style>

<style>
.v-list-item__content {
   display: inline;
}
</style>
