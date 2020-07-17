<template>
    <div class="container-page">
        <div class="place-header">
            <PageHeader v-bind:menuTitle="title"></PageHeader>
        </div>
        <div>
            <CADetailHeader></CADetailHeader>
        </div>
        <div>
            <div class="top-item-list">
                <div class="text-h3">
                    <h3>Daftar Barang:</h3>
                </div>
                <div class="button-add-box">
                    <button @click='checkAddItem'>Tambah Produk</button>
                </div>
            </div>
            <div class="middle-list-box">
                <ContainerActivityDetailList></ContainerActivityDetailList>
            </div>
            <div class="bottom-putaway-box">
                <div class="background-bottom-putaway">
                    <button @click="goToMap" class="button-putaway">Putaway</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CADetailHeader from "../components/header/CADetailHeader";
    import PageHeader from "../components/header/PageHeader";
    import router from "../router/index";
    import ContainerActivityDetailList from "../components/listCard/ContainerActivityDetailList";

    export default {
        name: "ContainerActivityDetail",
        components: {
            ContainerActivityDetailList,
            PageHeader,
            CADetailHeader
        },
        data() {
            return {
                title: this.$route.params.id
            }
        },
        methods: {
            checkAddItem(){
                router.push({ path: `/container-activity/${this.$route.params.id}/add-item`})
            },
            goToMap(){

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/page/cadetail";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
</style>