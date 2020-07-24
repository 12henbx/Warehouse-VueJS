<template>
    <div @click="moveToDetail(caItem.containerActivity)" class="card-box">
        <div class="left-card-box">
            <span class="supplier-text">
                PT. Makmur Jaya
            </span>
        </div>
        <div class="right-card-box">
            <span class="product-name-text">
                Choco Cheese Roll
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SOItemList"
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

    .supplier-text{
        font-size: 14px;
        color: #404040;
    }

    .product-name-text{
        font-size: 18px;
    }

    .right-card-box {

    }

    .left-card-box {

    }
</style>