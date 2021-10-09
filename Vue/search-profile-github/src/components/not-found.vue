<template>
    <div class="not-found container">
        <h1 class="title">Perfil não foi encontrado!</h1>
        <button class="home" @click="returnHome">Voltar</button>
        <img
            class="gif"
            src="https://c.tenor.com/erCfMTUP6AQAAAAM/bear-love.gif"
            alt="Cute Bear Crying"
        />
    </div>
</template>

<script>
export default {
    methods: {
        returnHome() {
            this.$router.push(`/`);
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';
.container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.title {
    font-size: 2.5rem;
    letter-spacing: 1.5px;
    padding: 5px;
    margin-bottom: 10px;
    color: $TextColor;
    font-weight: 600;
    font-style: oblique;
}

.home {
    background-color: $PrimaryColor;
    width: min(150px, 100%);
    height: 50px;
    border: none;
    padding: 5px;
    border-radius: 10px;
    color: $TextColor;
    border: 1px solid $SecondaryColor;
    transition: 0.2s;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    &:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
}

.gif {
    width: 300px;
    border-radius: 15px;
}
</style>
