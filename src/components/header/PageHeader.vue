<template>
        <header class="header-box">
            <div class="icon-box">
                <span class="icon-span">
                    <font-awesome-icon class="back-icon" :icon="['fas', 'arrow-left']" />
                </span>
            </div>
            <div class="title-box">
                <h3 class="menu-title">{{menuTitle}}</h3>
            </div>
            <div class="add-button-box" v-if="menuTitle === 'Tambah Barang'">
                <span>
                    <button>Tambah</button>
                </span>
            </div>
        </header>
</template>

<script>
    export default {
        name: "PageHeader",
        props:{
            menuTitle:String
        }
    }
</script>

<style lang="scss" scoped>
    .header-box {
        display: flex;
        position: fixed;
        height: 54px;
        width: 100%;
        flex-direction: row;
        align-items: center;
        padding: 0 10px;
        z-index: 100;
    }

    .icon-box {
        width: 34.75px;
        margin-right: 20px;
    }
    .back-icon {
        font-size: 28px;
    }

    .menu-title {
        margin-top: 8px;
    }

    .add-button-box{
        display: flex;
        float: right;
        margin-right: 0;
        position: relative;
        width: 100px;
    }
</style>