<template>
    <div @click="goToMap(putawayInboundObject.containerActivity)" class="card-box">
        <div class="top-card-box">
            <span>{{ putawayInboundObject.containerActivity }}</span>
            <span> - </span>
            <span>{{ putawayInboundObject.asn }}</span>
        </div>
        <div class="middle-card-box">
            <span><a>{{ putawayInboundObject.loadingDock }}</a></span>
        </div>
        <div class="bottom-card-box">
            <div class="background-bottom-card">
                <div class="left-bottom-card">
                    <a>{{ putawayInboundObject.checker }}</a>
                </div>
                <div class="right-bottom-card">
                    <a>{{ putawayInboundObject.status }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PutawayOutboundList",
        props: {
            putawayOutboundObject: Object
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
</style>