<template>
    <div class="container-page">
        <LogoHeader></LogoHeader>
        <MenuHeader v-bind:activeMenu="activeMenu"></MenuHeader>
    </div>
</template>

<script>
    import LogoHeader from "../components/header/LogoHeader";
    import MenuHeader from "../components/header/MenuHeader";
    export default {
        name: "Statistics",
        components: {
            LogoHeader,
            MenuHeader
        },
        data() {
            return {
                activeMenu: 'statistics',
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/page/statistics";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
</style>