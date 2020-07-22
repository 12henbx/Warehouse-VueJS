<template>
    <div class="container-page">
        <div class="place-header">
            <PageHeader v-bind:menuTitle="title"></PageHeader>
        </div>
    </div>
</template>

<script>
    import PageHeader from "../components/header/PageHeader";

    export default {
        name: "AddItemPickSalesOrder",
        components: {
            PageHeader,
        },
        props:{

        },
        data(){
            return{
                title: 'Add Item Pick SO'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
    @import "src/styles/page/additempickso";
</style>