<template>
  <div class="q-gutter-y-md q-ml-auto column" style="max-width: 300px">
    <q-select
      color="white"
      dark
      filled
      dense
      use-input
      v-model="userSearch"
      :options="usersList"
      option-value="login"
      label="Find a user"
      @filter="filterFn"
      hide-bottom-space
      hide-dropdown-icon
      hide-selected
      fill-input
      :loading="isLoading"
      @update:model-value="goToUserPage(userSearch)"
      emit-value
    >
      <template v-slot:before-options>
        <p class="text-subtitle1 text-weight-thin text-center q-mt-sm">
          Users found
        </p>
      </template>
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section top avatar>
            <q-avatar color="primary" text-color="white"
              ><img :src="scope.opt.avatar_url" alt=""
            /></q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label text-color="white">{{
              scope.opt.login
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template v-if="!isLoading" v-slot:append>
        <q-icon name="search" />
      </template>
      <template v-slot:no-option>
        <q-item>
          <q-item-section> No Results </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const usersList = computed(() => store.getters['userSearched/usersList']);
    const userSearch = ref(null);
    const isLoading = ref(false);

    function changeIsLoading() {
      isLoading.value = !isLoading.value;
    }

    function filterFn(val, update, abort) {
      if (val.length < 2) {
        abort();
        return;
      }

      update(async () => {
        changeIsLoading();
        await store.dispatch('userSearched/getUsers', val);
        changeIsLoading();
      });
    }

    function goToUserPage(id) {
      router.push(`/user/${id}`);
    }

    return {
      userSearch,
      isLoading,
      usersList,
      filterFn,
      goToUserPage,
    };
  },
};
</script>

<style></style>
