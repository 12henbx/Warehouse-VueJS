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
                    <PutawayOutboundList v-bind:putawayOutboundObject="putawayItem"></PutawayOutboundList>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import PageHeader from "../components/header/PageHeader";
    import SearchBar from "../components/search/SearchBar";
    import PutawayOutboundList from "../components/listCard/PutawayOutboundList";

    export default {
        name: "PutawayOutbound",
        components: {
            PutawayOutboundList,
            PageHeader,
            SearchBar
        },
        props:{

        },
        data(){
            return{
                title: 'Putaway - Outbound',
                items:[
                    { containerActivity: 'CA-1278-PO-55-132', asn: 'ASN-10/wq/123/tr', loadingDock: 'Ceper', checker: 'Budi', status: 'Not Assigned' },
                    { containerActivity: 'CA-1279-PO-55-112', asn: 'ASN-10/wq/123/tr', loadingDock: 'Dok', checker: 'Budi', status: 'Not Assigned' },
                    { containerActivity: 'CA-1280-PO-57-152', asn: 'ASN-10/wq/123/tr', loadingDock: 'Gde', checker: 'Kurnia', status: 'Not Assigned' }
                ],
                searchQuery: '',
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
    @import "src/styles/page/putawayoutbound";
</style>