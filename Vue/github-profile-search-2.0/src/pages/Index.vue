<template>
  <q-page class="row fit items-center justify-center column">
    <q-avatar size="300px" square>
      <img src="../assets/img/octocat.png" />
    </q-avatar>
    <p class="text-h6 text-blue-grey-10">Search github user profiles</p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
});
</script>

<style lang="scss" scoped>
.search-card {
  min-width: min(400px, 100%);
  max-width: 40vw;
}
</style>
