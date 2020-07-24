<template>
    <div class="container-page">
        <div class="place-header">
            <PageHeader v-bind:menuTitle="title"></PageHeader>
        </div>
        <div class="map-box-area">
            <div class="grid-map">
                <div class="row-cell-box" v-for="m in col" :key="`mapDiv-${m}`">
                    <div v-for="n in row" @click="clickCell(m,n)"
                         :key="`mapCell-${n}`"
                         class="one-cell"
                    >
                        <div v-if="activeCellss(m,n)" class="cell-span active"></div>
                        <div v-if="!activeCellss(m,n)" class="cell-span blocked"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageHeader from "../components/header/PageHeader";
    import { blockedCells } from "../astar/SetBlockedCells";

    export default {
        name: "MapInboundPutaway",
        computed:{

        },
        components: {
            PageHeader
        },
        data(){
            return{
                dBlockedCells: blockedCells,
                col: blockedCells.length,
                row: blockedCells[0].length,
                title: 'Map'
            }
        },
        methods: {
            clickCell(i,j){
                console.log(i, ' ', j);
            },
            activeCellss(i,j) {
                if (this.dBlockedCells[i-1][j-1] === 1){
                    console.log(i-1, j-1);
                }
                return this.dBlockedCells[i-1][j-1] === 0;
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/basics/fonts";
    @import "src/styles/basics/viewpage";
    @import "src/styles/page/mapinbound";
</style>