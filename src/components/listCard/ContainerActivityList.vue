<template>
    <div @click="moveToDetail(caItem.containerActivity)" class="card-box">
        <div class="top-card-box">
            <div class="container-activity-box">
                <span>{{caItem.containerActivity}}</span>
            </div>
            <div class="container-type-box">
                <span class="type-background">{{caItem.type}}</span>
            </div>
        </div>
        <div class="middle-card-box">
            <span>Container No <span class="tab-item-one">: {{caItem.containerNo}}</span></span>
        </div>
        <div class="middle-card-box">
            <span>Loading &nbsp;<span class="tab-item-two">: {{caItem.loadingDock}}</span></span>
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
    import router from "../../router";

    export default {
        name: "ContainerActivityList",
        props:{
            caItem: Object
        },
        methods: {
            moveToDetail(cActivity) {
                router.push({path: `/container-activity/${cActivity}` })
                // router.push("/") //TODO : push to CA Detail
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

    .top-card-box {
        display: flex;
        flex-direction: row;
        flex-grow: 2;
    }

    .container-activity-box {
        display: flex;
        width: 50%;
    }

    .container-type-box {
        display: flex;
        width: 50%;
        justify-content: flex-end;
    }

    .middle-card-box{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
    }

    .background-bottom-card {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background: #adadad;
        border-radius: 4px;
        margin: 5px 0;
    }

    .tab-item-one{
        padding-left: 10px;
    }

    .tab-item-two{
        padding-left: 49px;
    }

    .type-background{
        background-color: #adadad;
        border-radius: 5px;
        padding: 1px 5px;

    }
</style>