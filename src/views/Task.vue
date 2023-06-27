<script setup lang="ts">
import { inject } from "vue";
import { IS_MOBILE } from "@src/constants";

const isMobile = inject(IS_MOBILE);
</script>
<template>
  <!-- TODO: Move markup to locale -->
  <v-container class="ma-0">
    <v-row>
      <v-col>
        <h1 class="pb-2">Тестовое задание SquareGPS</h1>
        <p>
          Необходимо с помощью
          <strong>Vuejs, Vuex, VueRouter, Vuetify</strong> написать приложение.
          Хэдер приложения должен содержать меню из 2-х пунктов: О задании и
          Карта. В основной части приложения должно отображаться содержимое
          разделов.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2 class="pt-4 pb-2">Раздел “О задании”</h2>
        <p>
          В разделе должен быть текст этого задания, сверстанный аналогично.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2 class="pt-4 pb-2">Раздел “Карта”</h2>
        <p>На экране должны быть карта и список:</p>
        <v-list tag="ol">
          <v-list-item tag="li" class="numbered-list-item">
            <span>
              При клике на кнопку добавления, карта должна перейти в режим
              добавления маркера: в месте клика должен появиться маркер, а в
              списке - запись с адресом точки
            </span>
            <v-spacer :height="50"></v-spacer>
            <span>
              Для поиска адреса можно использовать любое бесплатное API для
              геокодирования, например:
              <a target="_blank" href="https://geocode.maps.co/"
                >https://geocode.maps.co/</a
              >
            </span>
            <v-spacer></v-spacer>
            <span>
              В случае, если адрес не найден, необходимо вывести ошибку и не
              добавлять маркер в список.
            </span>
          </v-list-item>
          <v-list-item tag="li" class="numbered-list-item">
            <span>
              При клике на маркер должна подсвечиваться запись в списке</span
            >
          </v-list-item>
          <v-list-item tag="li" class="numbered-list-item">
            При клике на запись в списке карта должна центрироваться на маркере
          </v-list-item>
          <v-list-item tag="li" class="numbered-list-item">
            Маркеры должны храниться локально и не пропадать после перезагрузки
            страницы
          </v-list-item>
          <v-list-item tag="li" class="numbered-list-item">
            В адресной строке должен отображаться id выбранного маркера
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <p>
          Локальное хранение данных должно быть организовано в виде сервиса,
          эмулирующего бекенд. (Необходим класс Backend, который
          псевдо-асинхронно сохраняет данные в localStorage)
        </p>
        <strong>Дополнительно:</strong>
        <v-list tag="ol">
          <v-list-item tag="li" class="numbered-list-item">
            <span>Продумать отображение на мобильных устройствах</span>
          </v-list-item>
          <v-list-item tag="li" class="numbered-list-item">
            Предусмотреть локализацию
          </v-list-item>
          <v-list-item tag="li" class="numbered-list-item">
            Необходимо с помощью jest написть 1 модульный тест на любой
            компонент
          </v-list-item>
        </v-list>
        <p>
          <strong>Напоминание:</strong> тестовое задание призвано показать
          умение писать хороший модульный код, а также умение пользоваться
          указанными технологиями и не только. Этим кодом нужно гордиться.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <p>Пример:</p>
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
