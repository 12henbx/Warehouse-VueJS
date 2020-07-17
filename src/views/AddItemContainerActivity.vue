<template>
    <div class="container-page">
        <div class="place-header">
            <PageHeader v-bind:menuTitle="title"></PageHeader>
        </div>
        <div class="supplier-input-box">
            <label class="highlight-bottom">
                <div class="text-user-box">
                    <span class="text-user"><font-awesome-icon class="search-icon" :icon="['fas', 'user']" /></span>
                </div>
                <div class="input-username-box">
                    <input class="username-input" type="text">
                </div>
            </label>
        </div>
        <div class="product-input-box">
            <label class="highlight-bottom">
                <div class="text-user-box">
                    <span class="text-user"><font-awesome-icon class="search-icon" :icon="['fas', 'user']" /></span>
                </div>
                <div class="input-username-box">
                    <input class="username-input" type="text">
                </div>
            </label>
        </div>
        <div class="expired-input-box">
            <label class="highlight-bottom">
                <div class="text-user-box">
                    <span class="text-user"><font-awesome-icon class="search-icon" :icon="['fas', 'user']" /></span>
                </div>
                <div class="input-username-box">
                    <input class="username-input" type="text">
                </div>
            </label>
        </div>
        <div class="quantity-input-box">
            <label class="highlight-bottom">
                <div class="text-user-box">
                    <span class="text-user"><font-awesome-icon class="search-icon" :icon="['fas', 'user']" /></span>
                </div>
                <div class="input-username-box">
                    <input class="username-input" type="text">
                </div>
            </label>
        </div>
    </div>
</template>

<script>
    import PageHeader from "../components/header/PageHeader";
    export default {
        name: "AddItemContainerActivity",
        components: {
            PageHeader
        },
        data(){
            return{
                title: 'Tambah Barang'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
    @import "src/styles/page/additemcontainer";
</style>