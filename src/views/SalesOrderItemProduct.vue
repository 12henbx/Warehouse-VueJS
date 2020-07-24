<template>
    <div class="container-page">
        <div class="place-header">
            <PageHeader v-bind:menuTitle="title"></PageHeader>
        </div>
        <div>
            <SOItemList></SOItemList>
        </div>
    </div>
</template>

<script>
    import router from "../router/index";
    import SOItemList from "../components/listCard/SOItemList";
    import PageHeader from "../components/header/PageHeader";

    export default {
        name: "SalesOrderItemProduct",
        components: {
            SOItemList,
            PageHeader
        },
        data(){
            return{
                title: `SO - ${this.$route.params.id}`,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
    @import "src/styles/page/salesorderitemproduct";
</style>