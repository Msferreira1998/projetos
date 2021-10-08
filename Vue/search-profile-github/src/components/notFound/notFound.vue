<template>
    <div class="not-found">
        <h1>Perfil Não encontrado</h1>
        <button @click="returnHome">Voltar</button>
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

<style></style>
