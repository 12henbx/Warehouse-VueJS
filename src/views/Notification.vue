<template>
    <div class="container-home">
        <LogoHeader></LogoHeader>
        <MenuHeader v-bind:activeMenu="activeMenu"></MenuHeader>
    </div>
</template>

<script>
    import LogoHeader from "../components/header/LogoHeader";
    import MenuHeader from "../components/header/MenuHeader";

    export default {
        name: "Notification",
        components: {
            LogoHeader,
            MenuHeader
        },
        data() {
            return {
                activeMenu: 'notification',
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/page/notification";
    @import "src/styles/basics/fonts";
</style>