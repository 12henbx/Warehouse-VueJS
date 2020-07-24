<template>
    <div class="container-page">
        <div class="place-header">
            <PageHeader v-bind:menuTitle="title"></PageHeader>
        </div>
        <div>
            <CADetailHeader></CADetailHeader>
        </div>
        <div>
            <div class="top-item-list">
                <div class="text-h3">
                    <h3>Daftar Barang:</h3>
                </div>
                <div class="button-add-box">
                    <button @click='checkAddItem'>Tambah Produk</button>
                </div>
            </div>
            <div class="middle-list-box">
                <ContainerActivityDetailList></ContainerActivityDetailList>
            </div>
            <div class="bottom-putaway-box">
                <div class="background-bottom-putaway">
                    <button @click="goToPutaway" class="button-putaway">Putaway</button>
                </div>
            </div>
            <modal name="example">
                <qrcode-stream class="qr-stream" @decode="onDecode"></qrcode-stream>
            </modal>
        </div>
    </div>
</template>

<script>
    import CADetailHeader from "../components/header/CADetailHeader";
    import PageHeader from "../components/header/PageHeader";
    import router from "../router/index";
    import ContainerActivityDetailList from "../components/listCard/ContainerActivityDetailList";
    // import { QrcodeStream } from 'vue-qrcode-reader'

    export default { // TODO : get list of product item
        name: "ContainerActivityDetail",
        watch : {
            onCam(val){
                if (val === true){
                    console.log("satu")
                    this.$modal.show('example')
                    this.onCam = false
                }
            }
        },
        components: {
            ContainerActivityDetailList,
            PageHeader,
            CADetailHeader,
            // QrcodeStream
        },
        data() {
            return {
                title: this.$route.params.id,
                onCam: false,
                productName: ''
            }
        },
        methods: {
            checkAddItem(){
                // router.push({ path: `/container-activity/${this.$route.params.id}/add-item`})
                this.onCam = true
            },
            goToPutaway(){
                router.push({ path: '/putaway-inbound/', query: { caNumber : this.title } })
            },
            onDecode (decodedString) {
                console.log(decodedString.toString())
                if (decodedString !== ""){
                    this.productName = decodedString.toString();
                    router.push({ path: `/container-activity/${this.$route.params.id}/add-item`, query: { productName : this.productName } })
                    // router.push({ name: name, query: { term : query } })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/page/cadetail";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
</style>