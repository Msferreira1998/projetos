<template>
  <q-page id="user" class="row items-center justify-center">
    <div class="loading" v-if="isLoading"></div>
    <div class="user" v-if="!isLoading">
      <q-card
        class="my-card row q-pa-md"
        style="
          width: 750px;
          background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
        "
      >
        <q-card-section class="col-5 row text-white justify-center">
          <q-avatar
            size="150px"
            font-size="52px"
            color="teal"
            text-color="white"
            class="row"
          >
            <img :src="user.avatar_url" />
          </q-avatar>
          <div class="row justify-between q-my-lg full-width">
            <div class="col-6 text-center">
              <p class="text-h6 text-weight-light">Followers</p>
              <span class="text-body2 text-weight-regular">{{
                user.followers
              }}</span>
            </div>
            <div class="col-6 text-center">
              <p class="text-h6 text-weight-light">Following</p>
              <span class="text-body2 text-weight-regular">{{
                user.following
              }}</span>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="col-7 text-white">
          <div
            class="row justify-between items-center q-pa-sm"
            style="height: 60px"
          >
            <div>
              <span class="row text-h5 text-weight-light">
                {{
                  user.name.length > 18
                    ? `${user.name.substring(0, 18)}...`
                    : user.name
                }}
              </span>
              <span class="row text-weight-light">{{ user.login }}</span>
            </div>
            <q-btn
              outline
              rounded
              color="white"
              label="Repositories"
              @click.stop="OpenDialog"
            />
          </div>
          <div
            class="row full-width justify-between items-center q-pa-sm q-mt-xl"
          >
            <div class="row">
              <span class="q-mr-md text-body1 text-weight-medium">ID:</span>
              <span class="text-body1 text-weight-light">{{ user.id }}</span>
            </div>
            <div class="row full-width q-mt-xs">
              <span class="q-mr-md text-body1 text-weight-medium"
                >Company:</span
              >
              <span class="text-body1 text-weight-light">{{
                user.company ? user.company : 'No registered company'
              }}</span>
            </div>
            <div class="row full-width q-mt-xs">
              <span class="q-mr-md text-body1 text-weight-medium">Email:</span>
              <span class="text-body1 text-weight-light">{{
                user.email ? user.email : 'No registered email'
              }}</span>
            </div>
            <div class="row full-width q-mt-xs">
              <span class="q-mr-md text-body1 text-weight-medium"
                >Twitter:</span
              >
              <span class="text-body1 text-weight-light">{{
                user.twitter_username
                  ? user.twitter_username
                  : 'No registered Twitter'
              }}</span>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Repositories</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <q-list bordered separator>
            <q-item
              v-for="(repo, id) in userRepos"
              :key="id"
              clickable
              v-ripple
              :href="repo.html_url"
              target="_blank"
            >
              <q-item-section>
                <q-item-label>{{ repo.name }}</q-item-label>
                <q-item-label caption>{{ repo.description }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
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
    const userRepos = computed(() => store.getters['userSearched/userRepos']);

    const dialog = ref(false);

    async function loadUser() {
      $q.loading.show();
      await store.dispatch('userSearched/getUserPage', props.userId);
      await store.dispatch('userSearched/getUserRepos', props.userId);
      $q.loading.hide();
      isLoading.value = false;
    }

    function OpenDialog() {
      dialog.value = !dialog.value;
    }

    watch(userId, async () => {
      loadUser();
    });

    onMounted(async () => {
      loadUser();
    });

    return {
      user,
      userRepos,
      isLoading,
      OpenDialog,
      dialog,
    };
  },
};
</script>

<style></style>
