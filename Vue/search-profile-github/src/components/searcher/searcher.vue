<template>
    <div class="seacher">
        <ContainerBox>
            <Title>Github Profile Search</Title>
            <SearchBox>
                <Input
                    @keypress.enter="search"
                    type="text"
                    placeholder="User Id"
                    v-model="UserId"
                />
                <Button @click="search"><AccountSearchOutline /></Button>
            </SearchBox>
            <Chill src="./img/chill.gif" />
        </ContainerBox>
    </div>
</template>

<script>
import {
    Button,
    SearchBox,
    Title,
    Input,
    ContainerBox,
    Chill,
} from './seacher';
import AccountSearchOutline from 'vue-material-design-icons/AccountSearchOutline.vue';
export default {
    data() {
        return {
            UserId: '',
        };
    },
    methods: {
        search() {
            if (this.UserId.length <= 0) {
                alert('Preencha o campo de busca');
                return;
            }
            this.$router.push(`/user/${this.UserId}`);
        },
    },
    components: {
        Button,
        Title,
        Input,
        ContainerBox,
        Chill,
        AccountSearchOutline,
        SearchBox,
    },
};
</script>

<style></style>
