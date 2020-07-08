<template>
    <div class="container-page">
        <PageHeader></PageHeader>
        <div class="search-area">
            <SearchBar v-bind:searchQuery="searchQuery"></SearchBar>
        </div>
        <div>
            <AssignLDList></AssignLDList>
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
                items: [],
                searchQuery: this.$route.query.term
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