<template>
    <div @click="moveToAssignLd(asnObject.asn)" class="card-box">
        <div class="top-card-box">
            <span>{{ salesOrderObject.asn }}</span>
            <span> - </span>
            <span>{{ salesOrderObject.inventoryType }}</span>
        </div>
        <div class="middle-card-box">
            <div class="left-middle-card">
                <a>{{ salesOrderObject.asnDate }}</a>
            </div>
            <div class="right-middle-card/">
                <a>{{ salesOrderObject.asnDate }}</a>
                <a> - </a>
                <a>{{ salesOrderObject.asnDate }}</a>
            </div>
        </div>
        <div class="bottom-card-box">
            <div class="background-bottom-card">
                <div class="left-bottom-card">
                    <a>{{ salesOrderObject.supplier }}</a>
                </div>
                <div class="right-bottom-card">
                    <a>{{ salesOrderObject.warehouse }}</a>
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
                items: [
                    {salesOrderNo: '', caNo: '', },
                    {},
                    {},
                ]
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
</style>