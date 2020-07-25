<template>
    <div class="container-page">
        <div class="place-header">
            <PageHeader v-bind:menuTitle="title" v-on:openScanContainer="scanContainerModal"></PageHeader>
        </div>
        <div class="map-box-area">
            <div class="grid-map">
                <div class="row-cell-box" v-for="m in col" :key="`mapDiv-${m}`">
                    <div v-for="n in row" @click="clickCell(m,n)"
                         :key="`mapCell-${n}`"
                         class="one-cell"
                    >
                        <div class="cell-color" :class="activeCellss(m,n)" ></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="scrollmenu">
            <ul class="card-list">
                <li v-for="(productCard, index) in dataItem" :key="`productCard-${index}`" class="button-item">
                    <div @click="setPath(productCard.sku)" class="card">
                        <div class="card-box">
                            <h4><b>{{productCard.sku}}</b></h4>
                            <p>{{productCard.productName}}</p>
                            <a>{{productCard.quantity}}</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <modal name="modal-inbound">
            <qrcode-stream class="qr-stream" @decode="onDecode"></qrcode-stream>
        </modal>
    </div>
</template>

<script>
    import PageHeader from "../components/header/PageHeader";
    import { blockedCells } from "../astar/SetBlockedCells";
    import { ff, graphWithWeight } from "../astar/pathSearchMap";
    import router from "../router";
    // import router from "../router/index";

    export default {
        name: "MapInboundPutaway",
        computed:{

        },
        watch : {
            onCam(val){
                if (val === true){
                    this.$modal.show('modal-inbound')
                    this.onCam = false
                }
            }
        },
        components: {
            PageHeader,
        },
        data(){
            return{
                dBlockedCells: blockedCells,
                onCam: false,
                col: blockedCells.length,
                row: blockedCells[0].length,
                colIdx: 0,
                rowIdx: 0,
                result: 0,
                componentKey: 0,
                title: 'Map Inbound',
                i: 0,
                dataItem:[
                    {sku: 'WH-01-12/99', productName: 'Monitor', quantity: '1', expiredDate: '30-12-2100', asn: 'ASN-10/wq/123/tr'},
                    {sku: 'WH-04-04/90', productName: 'Wired Mouse', quantity: '1', expiredDate: '30-12-2100', asn: 'ASN-12/wq/124/yu'},
                    {sku: 'WH-01-05/10', productName: 'Cable Coax', quantity: '1', expiredDate: '30-12-2100', asn: 'ASN-14/wq/126/io'},
                    {sku: 'WH-09-05/77', productName: 'Headset', quantity: '1', expiredDate: '30-12-2100', asn: 'ASN-14/wq/126/io'}
                ],
                arrIndex: [],
            }
        },
        methods: {
            clickCell(i,j){
                console.log(i, ' ', j);
            },
            activeCellss(i,j) {
                if (this.dBlockedCells[i-1][j-1] === 0){
                    return 'blocked';
                }else if (this.dBlockedCells[i-1][j-1] === 2){
                    return 'active'
                }
                return '';
            },
            setPath(sku){
                // this.$forceUpdate();
                // this.forceRender();
                for (this.i=0; this.i<this.arrIndex.length; this.i++){
                    this.dBlockedCells[this.arrIndex[this.i][0]][this.arrIndex[this.i][1]] = 1;
                }
                this.rowIdx = parseInt(sku.slice(3, 5));
                this.colIdx = parseInt(sku.slice(6, 8));
                this.result = ff(graphWithWeight.grid[18][19], graphWithWeight.grid[this.rowIdx][this.colIdx]);
                // console.log(this.result[0].x);
                // console.log(this.result[0].y);
                for (this.i=0; this.i<this.result.length; this.i++){
                    this.arrIndex.push([this.result[this.i].x, this.result[this.i].y]);
                    const newRow = this.dBlockedCells[this.result[this.i].x].slice(0);
                    newRow[this.result[this.i].y] = 2;
                    this.$set(this.dBlockedCells, this.result[this.i].x, newRow);

                }
                console.log(this.arrIndex)
            },
            scanContainerModal(){
                // router.push({ path: `/container-activity/${this.$route.params.id}/add-item`})
                this.onCam = true
            },
            onDecode (decodedString) {
                console.log(decodedString.toString())
                //TODO : nge-post update status container activity jadi Done
                if (decodedString !== ""){
                    router.push({ path: '/'})
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
    @import "src/styles/page/mapinbound";
</style>