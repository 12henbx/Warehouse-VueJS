<template>
    <div>
        <l-map style="height: 350px" :zoom="zoom" :center="center">
            <l-tile-layer :url="url"></l-tile-layer>
            <l-geo-json :geojson="geojson"></l-geo-json>
        </l-map>
    </div>
</template>

<script>
    import {LGeoJson, LMap, LTileLayer} from 'vue2-leaflet';
    import product from './geoson.js';

    export default {
        name: "MapInboundPutaway",
        components: {
            LMap,
            LTileLayer,
            LGeoJson
        },
        data(){
            return {
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                zoom: 8,
                center: [43.21031,46.26841],
                geojson: null,
                egojson: product.features,
            }
        },
        async created() {
            // const response = await fetch("https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson")
            const response = await fetch(this.egojson);
            this.geojson = await response.json();
        }
    }
</script>

<style lang="scss" scoped>

</style>