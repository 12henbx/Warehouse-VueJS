<template>
    <div @click="moveToAssignLd(asnObject.asn)" class="card-box">
        <div class="top-card-box">
            <span>No ASN: {{ asnObject.asn }}</span>
            <span> - </span>
            <span>Inventory: {{ asnObject.inventoryType }}</span>
        </div>
        <div class="middle-card-box">
            <a>Tanggal ASN : {{ asnObject.asnDate }}</a>
        </div>
        <div class="bottom-card-box">
            <div class="background-bottom-card">
                <div class="left-bottom-card">
                    <a>Supplier: {{ asnObject.supplier }}</a>
                </div>
                <div class="right-bottom-card">
                    <a>Warehouse: {{ asnObject.warehouse }}</a>
                </div>
            </div>
          <div>
            <a>Notes: {{ asnObject.notes }}</a>
          </div>
        </div>
    </div>
</template>

<script>
    import router from "../../router";

    export default {
        name: "AdvanceShippingNoticeList",
        props:{
            asnObject: Object
        },
        methods: {
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