<template>
    <div class="card-box">
        <div class="left-card-box">
            <span class="notif-text">test</span>
            <span class="time-text">test1</span>
        </div>
        <div class="right-card-box">
            <span>testtest</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotificationList"
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/page/home";
    @import "src/styles/basics/fonts";

    .card-box {
        display: flex;
        flex-direction: row;
        padding: 0 15px;
        border-top: 1px solid #adadad;
        border-bottom: 1px solid #adadad;
    }

    .left-card-box {
        display: flex;
        flex-direction: column;
        height: max-content;
        width: 80%;
    }

    .notif-text{
        font-size: 25px;

    }

    .time-text{
        font-size: 14px;
        font-weight: lighter;
    }

    .right-card-box {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>