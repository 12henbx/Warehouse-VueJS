<template>
        <header class="header-box">
            <div @click="back" class="icon-box">
                <span class="icon-span">
                    <font-awesome-icon class="back-icon" :icon="['fas', 'arrow-left']" />
                </span>
            </div>
            <div class="title-box">
                <h4 class="menu-title">{{menuTitle}}</h4>
            </div>
            <div class="add-button-box" v-if="menuTitle === 'Tambah Barang CA' || menuTitle === 'Pick Sales Order' || menuTitle === 'Container Activity'">
                <span class="add-button">
                    <button class="add-button" @click="submitItem">Tambah</button>
                </span>
            </div>
            <div class="add-button-box" v-else-if="menuTitle === 'Map Inbound'">
                <span class="add-button">
                    <button class="add-button" @click="scanContainer">Scan Container</button>
                </span>
            </div>
        </header>
</template>

<script>
    import router from "../../router";

    export default {
        name: "PageHeader",
        props:{
            menuTitle:String
        },
        methods: {
            back(){
                router.go(-1)
            },
            submitItem(){
                if (this.menuTitle === 'Tambah Barang CA'){
                    this.$emit('containerActivityProduct');
                }else if (this.menuTitle === 'Container Activity' || this.menuTitle === 'Pick Sales Order'){
                    router.push({ name: 'add container activity'})
                }
            },
            scanContainer(){
                this.$emit('openScanContainer')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";

    .header-box {
        display: flex;
        position: fixed;
        height: 54px;
        max-width: $max-phone-width - 2px;
        width: 100%;
        flex-direction: row;
        align-items: center;
        padding: 0 10px;
        z-index: 100;
        white-space: pre-wrap;
        background-color: #fff;
    }

    .icon-box {
        width: 34.75px;
        margin-right: 20px;
    }
    .back-icon {
        font-size: 28px;
    }

    .title-box {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: flex-start;
        width: 65%;
        margin-right: 20px;
    }

    .menu-title {
        margin-top: 8px;
    }

    .add-button-box{
        display: flex;
        margin-right: 0;
        justify-content: flex-end;
    }

    .add-button{
        display: flex;
        width: 70px;
        font-size: 12px;
    }
</style>