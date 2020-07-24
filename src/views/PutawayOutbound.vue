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
                items: [
                    {},
                ]
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