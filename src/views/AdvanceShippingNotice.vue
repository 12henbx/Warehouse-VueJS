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
                <li v-for="(asnItem, index) in asnList" :key="`activityItem-${index}`" class="button-item">
                    <AdvanceShippingNoticeList v-bind:asnObject="asnItem"></AdvanceShippingNoticeList>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import PageHeader from "../components/header/PageHeader";
    import SearchBar from "../components/search/SearchBar";
    import AdvanceShippingNoticeList from "../components/listCard/AdvanceShippingNoticeList";

    export default {
        name: "AdvanceShippingNotice",
        components: {
            AdvanceShippingNoticeList,
            PageHeader,
            SearchBar
        },
        props:{

        },
        data(){
            return{
                title: 'Advance Shipping Notice',
                asnList: [
                    {asn:'ASN-10/wq/123/tr', inventoryType:'', asnDate:'', supplier:'', warehouse: '', notes: ''},
                    {asn:'ASN-10/wq/123/tr', inventoryType:'', asnDate:'', supplier:'', warehouse: '', notes: ''},
                    {asn:'ASN-12/wq/124/yu', inventoryType:'', asnDate:'', supplier:'', warehouse: '', notes: ''},
                    {asn:'ASN-12/wq/124/yu', inventoryType:'', asnDate:'', supplier:'', warehouse: '', notes: ''},
                    {asn:'ASN-14/wq/126/io', inventoryType:'', asnDate:'', supplier:'', warehouse: '', notes: ''}
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
    @import "src/styles/page/asn";
</style>