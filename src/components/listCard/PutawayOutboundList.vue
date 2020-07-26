<template>
    <div @click="goToMap(putawayOutboundObject.containerActivity)" class="card-box">
        <div class="top-card-box">
            <span>{{ putawayOutboundObject.containerActivity }}</span>
            <span> - </span>
            <span>{{ putawayOutboundObject.asn }}</span>
        </div>
        <div class="middle-card-box">
            <span><a>{{ putawayOutboundObject.loadingDock }}</a></span>
        </div>
        <div class="bottom-card-box">
            <div class="background-bottom-card">
                <div class="left-bottom-card">
                    <a>{{ putawayOutboundObject.checker }}</a>
                </div>
                <div class="right-bottom-card">
                    <a>{{ putawayOutboundObject.status }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import router from "../../router";

    export default {
        name: "PutawayOutboundList",
        props: {
            putawayOutboundObject: Object
        },
        methods: {
            goToMap(cActivity){
                router.push({ path: `/putaway-inbound/${cActivity}/map-inbound`})
            }
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