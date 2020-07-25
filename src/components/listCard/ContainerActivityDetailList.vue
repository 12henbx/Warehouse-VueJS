<template>
    <div @click="moveToDetail(caItem.containerActivity)" class="card-box">
        <div class="top-card-box">
            <span class="supplier-text">
                {{productObject.supplier}}
            </span>
        </div>
        <div class="bottom-card-box">
            <span class="product-name-text">
                {{productObject.productName}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContainerActivityDetailList",
        props: {
            productObject:Object,
        }
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
</style>