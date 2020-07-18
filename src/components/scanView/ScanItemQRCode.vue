<template>
    <div class="container-page">
        <qrcode-stream class="qr-stream" @decode="onDecode"></qrcode-stream>
    </div>
</template>

<script>
    import { QrcodeStream } from 'vue-qrcode-reader'

    export default {
        name: "ScanItemQRCode",
        components: {
            QrcodeStream,
        },
        methods: {
            onDecode (decodedString) {
                console.log(decodedString)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";

    .qr-stream{
        display: flex;
        position: absolute;
        height: 100%;
        width: max-content;
    }
</style>