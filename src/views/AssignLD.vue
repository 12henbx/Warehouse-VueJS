<template>
    <div class="container-page">
        <PageHeader></PageHeader>
        <div class="search-area">
            <SearchBar></SearchBar>
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
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/page/assignld";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
</style>