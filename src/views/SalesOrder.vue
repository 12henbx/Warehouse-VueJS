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
                <li v-for="(soItem, index) in items" :key="`soItem-${index}`" class="button-item">
                    <SalesOrderList v-bind:salesOrderObject="soItem"></SalesOrderList>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import PageHeader from "../components/header/PageHeader";
    import SearchBar from "../components/search/SearchBar";
    import SalesOrderList from "../components/listCard/SalesOrderList";

    export default {
        name: "SalesOrder",
        components: {
            SalesOrderList,
            PageHeader,
            SearchBar
        },
        props:{

        },
        data(){
            return{
                title: 'Sales Order',
                items: [
                    {salesOrderNo: 'SO/12-34/TP', picker: 'Budi', handling: '', dateSO: '12-03-20', logistic: 'JNE', arriveTo: 'Yogya', airwayBill: 'AIR-90'},
                    {salesOrderNo: 'SO/12-35/TX', picker: 'Kurnia', handling: '', dateSO: '15-03-20', logistic: 'SiCepat', arriveTo: 'Jakarta Barat', airwayBill: 'AIR-99'},
                    {salesOrderNo: 'SO/12-36/TJ', picker: 'Wisnu', handling: '', dateSO: '15-03-20', logistic: 'JNE', arriveTo: 'Jakarta Timur', airwayBill: 'AIR-70'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
    @import "src/styles/page/salesorder";
</style>