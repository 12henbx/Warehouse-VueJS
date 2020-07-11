<template>
    <div class="container-page">
        <div class="place-header">
            <PageHeader></PageHeader>
        </div>
    </div>
</template>

<script>
    import PageHeader from "../components/header/PageHeader";
    export default {
        name: "ContainerActivity",
        components: {
            PageHeader
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/page/containeractivity";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
</style>