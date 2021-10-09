<template>
    <div class="seacher">
        <div class="container-box">
            <h1 class="title">Github Profile Search</h1>
            <div class="search-box">
                <input
                    class="search-input"
                    @keypress.enter="search"
                    type="text"
                    placeholder="User Id"
                    v-model="UserId"
                />
                <button class="search-btn" @click="search">
                    <AccountSearchOutline />
                </button>
            </div>
            <img src="../img/chill.gif" class="chill" />
        </div>
    </div>
</template>

<script>
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
        AccountSearchOutline,
    },
};
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';
.container-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
    width: min(40rem, 100vw);
    background-color: $ComplementarColor;
    -webkit-box-shadow: 0px 3px 20px -3px #000000;
    box-shadow: 0px 3px 20px -3px #000000;
}

.title {
    font-size: 1.5rem;
    letter-spacing: 1.5px;
    padding: 5px;
    margin-bottom: 10px;
    color: $TextColor;
    font-weight: 500;
    font-style: oblique;
}

.search-box {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
}

.search-input {
    padding: 15px;
    margin-right: 6px;
    font-size: 12px;
    border: none;
    width: 180px;
    transition: 0.5s;
    border-radius: 10px;

    &:focus {
        outline: none;
        border: 0.5px solid $ComplementarColor;
        width: 200px;
    }
}

.search-btn {
    background-color: $PrimaryColor;
    border: none;
    padding: 5px;
    border-radius: 10px;
    color: $SecondaryColor;
    transition: 0.2s;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    &:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
}

.chill {
    width: min(15rem, 100%);
    border-radius: 30px;
}
</style>
