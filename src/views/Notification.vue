<template>
    <div class="container-notification">
        <LogoHeader></LogoHeader>
        <MenuHeader v-bind:activeMenu="activeMenu"></MenuHeader>
        <NotificationList></NotificationList>
    </div>
</template>

<script>
    import LogoHeader from "../components/header/LogoHeader";
    import MenuHeader from "../components/header/MenuHeader";
    import NotificationList from "../components/listCard/NotificationList";

    export default {
        name: "Notification",
        components: {
            LogoHeader,
            MenuHeader,
            NotificationList
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