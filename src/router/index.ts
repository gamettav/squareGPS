import { createRouter, createWebHistory } from "vue-router";
import Task from "../views/Task.vue";
import Map from "../views/Map.vue";
import { DefaultLayout, SideBarLayout } from "../components";
import { Routes } from "@src/types";
import type { RouteRecordRaw } from "vue-router";

export const TASK_PATH = Routes.TASK_PATH;
export const MAP_PATH = Routes.MAP_PATH;
export const MAP_MARKER_PATH = Routes.MAP_MARKER_PATH;

const routes: RouteRecordRaw[] = [
   {
      path: TASK_PATH,
      component: DefaultLayout,
      children: [
         {
            path: TASK_PATH,
            name: "task",
            component: Task,
         },
      ],
   },
   {
      path: MAP_MARKER_PATH,
      component: SideBarLayout,
      children: [
         {
            path: "",
            name: "map",
            component: Map,
         },
      ],
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
