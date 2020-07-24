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
                <li v-for="(putawayItem, index) in items" :key="`putawayItem-${index}`" class="button-item">
                    <PutawayList v-bind:putawayInboundObject="putawayItem"></PutawayList>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import PageHeader from "../components/header/PageHeader";
    import SearchBar from "../components/search/SearchBar";
    import PutawayList from "../components/listCard/PutawayList";

    export default {
        name: "PutawayInbound",
        components: {
            PutawayList,
            PageHeader,
            SearchBar
        },
        props:{

        },
        data(){
            return{
                title: 'Putaway - Inbound',
                searchQuery: '',
                items:[
                    { containerActivity: 'CA-1278-PO-55-123', asn: 'ASN-10/wq/123/tr', loadingDock: 'Ceper', checker: 'Budi', status: 'Not Assigned' },
                    { containerActivity: 'CA-1279-PO-55-121', asn: 'ASN-10/wq/123/tr', loadingDock: 'Dok', checker: 'Budi', status: 'Not Assigned' },
                    { containerActivity: 'CA-1280-PO-57-125', asn: 'ASN-10/wq/123/tr', loadingDock: 'Gde', checker: 'Kurnia', status: 'Not Assigned' }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
    @import "src/styles/page/putawayinbound";
</style>