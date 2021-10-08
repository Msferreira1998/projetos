<template>
    <Background>
        <LoadingScreen
            src="https://miro.medium.com/max/1400/1*l-lCzn_E6dTqbYRKOC8lHw.gif"
            alt="Loading cat"
        />
        <TextT>Carregando</TextT>
    </Background>
</template>

<script>
import * as S from './loading';
export default {
    components: {
        Background: S.Background,
        LoadingScreen: S.LoadingScreen,
        TextT: S.TextT,
    },
};
</script>

<style></style>
