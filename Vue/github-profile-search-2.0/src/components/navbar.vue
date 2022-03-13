<template>
  <div>
    <q-layout view="lHh lpr lFf" container class="shadow-2 window-height">
      <q-header elevated>
        <q-toolbar class="glossy">
          <q-avatar class="lt-md" square size="40px">
            <img src="../assets/img/octocat.png" alt="" />
          </q-avatar>
          <q-toolbar-title class="gt-sm"
            >Github Profile Search 2.0</q-toolbar-title
          >
          <search-bar />
        </q-toolbar>
      </q-header>

      <q-footer class="bg-grey-4 text-dark" style="height: 20px">
        <p class="text-caption text-right q-mr-md">
          Developed by
          <a
            style="text-decoration: none"
            class="text-blue-grey-7"
            target="_blank"
            href="https://github.com/Msferreira1998"
            >Matheus Ferreira</a
          >
        </p>
      </q-footer>

      <q-page-container>
        <q-page>
          <slot />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import searchBar from './searchBar.vue';

export default defineComponent({
  name: 'navbar',
  components: {
    searchBar,
  },
});
</script>

<style></style>

SearchBar
