<template>
    <div class="card-box">
        <div class="container-type-box">
            <span class="container-type"></span>
        </div>
        <div class="top-card-box">
            <span>{{caItem.containerActivity}}</span>
        </div>
        <div class="middle-card-box">
            <span>{{caItem.containerNo}}</span>
        </div>
        <div class="middle-card-box">
            <span>{{caItem.loadingDock}}</span>
        </div>
        <div class="bottom-card-box">
            <div class="background-bottom-card">
                <div class="left-bottom-card">
                    <span>{{caItem.checker}}</span>
                </div>
                <div class="right-bottom-card">
                    <span>{{caItem.status}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContainerActivityList",
        props:{
            caItem: Object
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