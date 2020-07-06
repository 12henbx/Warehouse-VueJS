<template>
    <button @click="navigateMenu(textMenu.link)" type="button" class="menu-btn">
        <span class="menu-title">{{ textMenu.name }}</span>
        <span class="notif-count" v-if="textMenu.new > 0">{{ textMenu.new }} new</span>
    </button>
</template>

<script>
    import router from "../../router";

    export default {
        name: "HomeButton",
        props: {
            textMenu:Object
        },
        data() {
            return {

            }
        },
        methods: {
            navigateMenu(name){
                router.push({ name })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .menu-btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 60px;
        margin: 5px 0;
        border: 1px solid #000;
        border-radius: 5px;
        background: #fff;
    }

    .menu-btn:hover {
        background: #42b983;
    }

    .menu-title {
        font-size: 18px;
        font-weight: normal;
        color: #000;
    }

    .notif-count {
        font-size: 12px;
        font-weight: bolder;
        color: #000;
    }
</style>