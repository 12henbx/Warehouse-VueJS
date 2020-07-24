<template>
    <div class="detail-box">
        <div class="background-detail-box">
            <div>
                <ul :style="gridStyle" class="card-grid">
                    <li v-for="(item, index) in detailItem" :key="`item-${index}`" class="button-item">
                        <a>{{ item }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CADetailHeader",
        props:{
            caDetailObject: Object
        },
        data() {
            return{
                detailItem: [
                    "c. activity", "l. dock", "c. number", "status", "checker"
                ]
            }
        },
        computed: {
            gridStyle() {
                return {
                    // total column and each width
                    gridTemplateColumns: 'repeat(2, 1fr)'
                }
            },
        },
    }
</script>

<style lang="scss" scoped>

    .card-grid {
        display: grid;
        //grid-gap: 1em;
        text-align: center;
        padding-top: 10px;
        grid-template: 40px 40px 40px/ auto auto; // height height height (row) / width width (column)
        font-size: 22px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    .background-detail-box {
        height: 200px;
        background-color: deepskyblue;
        border-radius: 0 0 150% 150%/0 0 100% 100%;
    }
</style>