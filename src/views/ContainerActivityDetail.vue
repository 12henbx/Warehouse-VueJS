<template>
    <div class="container-page">
        <CADetailHeader></CADetailHeader>
    </div>
</template>

<script>
    import CADetailHeader from "../components/header/CADetailHeader";
    export default {
        name: "ContainerActivityDetail",
        components: {
            CADetailHeader
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/page/assignld";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
</style>