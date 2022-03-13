<template>
  <div id="user">
    <div class="loading" v-if="isLoading"></div>
    <div class="user" v-if="!isLoading">
      <q-parallax :src="user.avatar_url" :speed="0.5">
        {{ user.name }}
      </q-parallax>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line prettier/prettier
import {
  computed, onMounted, ref, watch,
} from 'vue';
import { useStore } from 'vuex';
import { useQuasar } from 'quasar';

export default {
  props: { userId: { type: String, required: true } },
  setup(props) {
    const store = useStore();
    const $q = useQuasar();
    const isLoading = ref(true);

    const user = computed(() => store.getters['userSearched/userPage']);

    const userId = computed(() => props.userId);

    watch(userId, async () => {
      $q.loading.show();
      await store.dispatch('userSearched/getUserPage', props.userId);
      $q.loading.hide();
      isLoading.value = false;
    });

    onMounted(async () => {
      $q.loading.show();
      await store.dispatch('userSearched/getUserPage', props.userId);
      $q.loading.hide();
      isLoading.value = false;
    });

    return {
      user,
      isLoading,
    };
  },
};
</script>

<style></style>
