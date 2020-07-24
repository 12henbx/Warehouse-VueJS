<template>
    <div @click="moveToAssignLd()" class="card-box">
        <div class="top-card-box">
            <span>{{ salesOrderObject.salesOrderNo }}</span>
            <br>
            <span>{{ salesOrderObject.arriveTo }}</span>
        </div>
        <div class="middle-card-box">
            <span><a>{{ salesOrderObject.logistic }}</a></span>
            <span><a>{{ salesOrderObject.airwayBill }}</a></span>
            <a>{{ salesOrderObject.dateSO }}</a>
        </div>
        <div class="bottom-card-box">
            <div class="background-bottom-card">
                <div class="left-bottom-card">
                    <a>{{ salesOrderObject.picker }}</a>
                </div>
                <div class="right-bottom-card">
                    <a>{{ salesOrderObject.handling }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import router from "../../router";

    export default {
        name: "SalesOrderList",
        props: {
            salesOrderObject: Object
        },
        data(){
            return{

            }
        },
        methods:{
            moveToAssignLd(asnNoQuery){
                router.push({ name: 'assign loading dock', query: { term : asnNoQuery } })
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
        flex-direction: column;
    }

    .background-bottom-card {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background: #adadad;
        border-radius: 4px;
    }
</style>