<template>
    <div class="container-notification">
        <LogoHeader></LogoHeader>
        <MenuHeader v-bind:activeMenu="activeMenu"></MenuHeader>
      <div>
        <ul class="card-list">
          <li v-for="(notificationItem, index) in notificationList" :key="`notificationItem-${index}`" class="button-item">
            <NotificationList v-bind:notificationObject="notificationItem"></NotificationList>
          </li>
        </ul>
      </div>
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
              notificationList: [
                {asn:'ASN-10/wq/123/tr', time: '3 minutes'},
                {asn:'ASN-10/wq/123/tr', time: '9 minutes'},
                {asn:'ASN-12/wq/124/yu', time: '10 minutes'},
                {asn:'ASN-12/wq/124/yu', time: '30 minutes'},
                {asn:'ASN-14/wq/126/io', time: '44 minutes'}
              ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/page/notification";
    @import "src/styles/basics/fonts";
</style>