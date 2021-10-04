<template>
    <div class="seacher">
        <ContainerBox>
            <Title>Github Profile Search</Title>
            <SearchBox>
                <Input type="text" placeholder="User Id" />
                <Button><AccountSearchOutline /></Button>
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
