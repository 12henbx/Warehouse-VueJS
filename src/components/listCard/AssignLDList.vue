<template>
    <div v-on:click="emitToAssignLd(getKey)" class="card-box">
        <div class="top-card-box">
            <div>
                <span>{{ assignObject.loadingDock }}</span>
            </div>
            <div>
                <span>{{ assignObject.truck }}</span>
                <span> - </span>
                <span>{{ assignObject.asn }}</span>
            </div>
        </div>
        <div class="middle-card-box">
            <div class="left-middle-card">
                <a>{{ assignObject.assignDate }}</a>
            </div>
            <div class="right-middle-card/">
                <a>{{ assignObject.assignStartTime }}</a>
                <a> - </a>
                <a>{{ assignObject.assignEndTime }}</a>
            </div>
        </div>
        <div class="bottom-card-box">
            <div class="background-bottom-card">
                <div class="left-bottom-card">
                    <a>{{ assignObject.internalStatus }}</a>
                </div>
                <div class="right-bottom-card">
                    <a>{{ assignObject.externalStatus }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "AssignLDList",
        props: {
            assignObject:Object,
            getKey:Number,
        },
        methods: {
            emitToAssignLd(getKey){
                this.$emit('openModal', getKey)
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

    .middle-card-box{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
    }

    .background-bottom-card {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background: #adadad;
        border-radius: 4px;
    }
</style>