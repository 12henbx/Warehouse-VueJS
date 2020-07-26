<template>
    <div class="container-page">
        <div class="place-header">
            <PageHeader v-bind:menuTitle="title"></PageHeader>
        </div>
        <div>
            <div class="dialog-box">
                <div>
                    <input placeholder="No. Container Activity">
                    <button @click="scanAddContainerActivity"> + </button>
                </div>
                <div>
                    <select v-model="selected">
                        <option disabled value="">Please select one</option>
                        <option>Reguler</option>
                        <option>Reject</option>
                    </select>
                    <button class="btn-tambah" @click="tambahBtn">Tambah</button>
                </div>
            </div>
        </div>
        <modal name="modal-add-ca">
            <qrcode-stream class="qr-stream" @decode="onDecode"></qrcode-stream>
        </modal>
    </div>

</template>

<script>
    import PageHeader from "../components/header/PageHeader";
    import router from "../router";

    export default {
        name: "AddContainerActivity",
        components: {
            PageHeader
        },
        data(){
            return {
                title: "Add C. A.",
            }
        },
        methods: {
            scanAddContainerActivity(){
                this.$modal.show('modal-add-ca')
            },
            onDecode (decodedString) {
                console.log(decodedString.toString())
                if (decodedString !== ""){
                    router.go(-1);
                    //TODO : nge-post container activity baru
                }
            },
            tambahBtn(){
                router.go(-1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/page/addcontaineractivity";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
</style>