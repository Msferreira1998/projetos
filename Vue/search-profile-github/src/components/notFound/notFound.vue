<template>
    <Container class="not-found">
        <Title>Perfil não foi encontrado!</Title>
        <Home @click="returnHome">Voltar</Home>
        <Gif
            src="https://c.tenor.com/erCfMTUP6AQAAAAM/bear-love.gif"
            alt="Cute Bear Crying"
        />
    </Container>
</template>

<script>
import * as S from './notFound';
export default {
    components: {
        Container: S.Container,
        Title: S.Title,
        Home: S.Home,
        Gif: S.Gif,
    },
    methods: {
        returnHome() {
            this.$router.push(`/`);
        },
    },
};
</script>

<style></style>
