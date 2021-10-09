<template>
    <div class="home home-container">
        <seacher />
    </div>
</template>

<script>
import Seacher from '../components/searcher.vue';
export default {
    components: {
        Seacher,
    },
};
</script>

<style lang="scss" scoped>
.home-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 5px;
}
</style>
