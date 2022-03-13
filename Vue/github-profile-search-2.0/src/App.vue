<template>
  <navbar>
    <router-view />
  </navbar>
</template>
<script>
import { defineComponent } from 'vue';
import Navbar from './components/navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },
});
</script>
