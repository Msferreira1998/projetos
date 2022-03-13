<template>
  <q-page class="row fit items-center justify-center column">
    <q-avatar size="300px" square>
      <img src="../assets/img/octocat.png" />
    </q-avatar>
    <p class="text-h6 text-blue-grey-10">You need help?</p>
    <q-btn
      label="Click Here!"
      @click.stop="dialog = !dialog"
      flat
      color="blue-grey-8"
    ></q-btn>
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Close icon</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return {
      dialog: ref(false),
    };
  },
});
</script>

<style lang="scss" scoped>
.search-card {
  min-width: min(400px, 100%);
  max-width: 40vw;
  // @media (max-width: $breakpoint-xs-max) {
  //   min-width: ;
  // }
}
</style>
