<template>
    <div class="container-page">
        <qrcode-stream @decode="onDecode"></qrcode-stream>
        <qrcode-drop-zone></qrcode-drop-zone>
        <qrcode-capture></qrcode-capture>
    </div>
</template>

<script>
    import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

    export default {
        name: "ScanItemQRCode",
        components: {
            QrcodeStream,
            QrcodeDropZone,
            QrcodeCapture
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
</style>