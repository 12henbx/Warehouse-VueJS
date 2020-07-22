<template>
    <div @click="even" class="card-box">

    </div>
</template>

<script>
    export default {
        name: "SalesOrderList"
    }
</script>

<style lang="scss" scoped>
    .card-box {
        display: flex;
        width: 100%;
        flex-direction: column;
        border-top: 1px solid #adadad;
        border-bottom: 1px solid #adadad;
        padding: 10px 15px;
    }

    .card-box:hover {
        background: #dde9fd;
    }
</style>