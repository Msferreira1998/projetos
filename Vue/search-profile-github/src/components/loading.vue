<template>
    <div class="background">
        <img
            class="loading-screen"
            src="https://miro.medium.com/max/1400/1*l-lCzn_E6dTqbYRKOC8lHw.gif"
            alt="Loading cat"
        />
        <h2 class="loadind-text">Carregando</h2>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

.background {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: $BackgroundColor;
}

.loading-screen {
    width: 400px;
}

.loadind-text {
    font-size: 2.5rem;
    letter-spacing: 1.5px;
    padding: 5px;
    margin-bottom: 10px;
    color: $TextColor;
    font-weight: 600;
    font-style: oblique;
}
</style>
