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
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
</style>