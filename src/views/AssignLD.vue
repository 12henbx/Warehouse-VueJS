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
                <li v-for="(assignItem, index) in items" :key="`assignItem-${index}`" class="button-item">
                    <AssignLDList v-bind:assignObject="assignItem"></AssignLDList>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import PageHeader from "../components/header/PageHeader";
    import SearchBar from "../components/search/SearchBar";
    import AssignLDList from "../components/listCard/AssignLDList";
    export default {
        name: "AssignLD",
        components: {
            PageHeader,
            SearchBar,
            AssignLDList
        },
        data() {
            return {
                term: this.$route.query.term,
                items: [
                    {truck: 'Truk 1', asn:'ASN-10/wq/123/tr', assignDate:'05/07/20', assignStartTime:'05:00', assignEndTime:'07:00', internalStatus:'Assigned', externalStatus:'Pending'},
                    {truck: 'Truk 2', asn:'ASN-10/wq/123/tr', assignDate:'05/07/20', assignStartTime:'07:00', assignEndTime:'08:00', internalStatus:'Assigned', externalStatus:'Pending'},
                    {truck: 'Truk 1', asn:'ASN-12/wq/124/yu', assignDate:'05/07/20', assignStartTime:'08:00', assignEndTime:'09:30', internalStatus:'Assigned', externalStatus:'Pending'},
                    {truck: 'Truk 2', asn:'ASN-12/wq/124/yu', assignDate:'05/07/20', assignStartTime:'09:30', assignEndTime:'11:00', internalStatus:'Assigned', externalStatus:'Pending'},
                    {truck: 'Truk 1', asn:'ASN-14/wq/126/io', assignDate:'05/07/20', assignStartTime:'11:00', assignEndTime:'12:30', internalStatus:'Assigned', externalStatus:'Pending'}
                ],
                searchQuery: this.$route.query.term,
                title: "Assign Loading Dock"
            }
        },
        created() {
            if (this.term != null){
                console.log(this.term)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/page/assignld";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
</style>