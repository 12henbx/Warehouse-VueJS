<template>
    <div class="container-page">
        <div class="place-header">
            <PageHeader v-bind:menuTitle="title"></PageHeader>
        </div>
        <div class="search-area">
            <SearchBar v-bind:searchQuery="searchQuery"></SearchBar>
        </div>
        <div>
            <ul class="card-list">
                <li v-for="(pickSOItem, index) in items" :key="`pickSOItem-${index}`" class="button-item">
                    <PickSalesOrderList v-bind:pickSalesOrderObject="pickSOItem"></PickSalesOrderList>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import PageHeader from "../components/header/PageHeader";
    import SearchBar from "../components/search/SearchBar";
    import PickSalesOrderList from "../components/listCard/PickSalesOrderList";

    export default {
        name: "PickSalesOrder",
        components: {
            PickSalesOrderList,
            PageHeader,
            SearchBar
        },
        props:{

        },
        data(){
            return{
                title: 'Pick Sales Order',
                items: [
                    {containerActivity: '', salesOrder: ''},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
    @import "src/styles/page/picksalesorder";
</style>