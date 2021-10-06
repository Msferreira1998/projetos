<template>
    <Container class="home">
        <Seacher />
    </Container>
</template>

<script>
import * as S from './home';

import Seacher from '../../components/searcher/searcher.vue';
export default {
    components: {
        Container: S.HomeContainer,
        Seacher,
    },
};
</script>
