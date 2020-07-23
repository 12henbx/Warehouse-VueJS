<template>
    <div class="modal-box">
        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option v-for="ld in loadingDockOptions" v-bind:key="ld.index">
                {{ ld.name }}
            </option>
        </select>
        <br>
        <button @click="$emit('editLoadingDock', selected)">Submit</button>
    </div>
</template>

<script>
    export default {
        name: "ChooseLoadingDock",
        data(){
            return{
                loadingDockOptions:[
                    { index: 1, name: 'Batu Ceper'},
                    { index: 2, name: 'Gudang Satu'},
                    { index: 3, name: 'Gudang Dua'},
                    { index: 4, name: 'Gudang Tiga'}
                ],
                selected: '',
            }
        },
        methods:{
            // submitLoadingDock(ld){
            //     // router.push('')
            //     console.log(ld);
            //     this.$emit('editLoadingDock', ld);
            //     console.log('test');
            // }
        }
    }
</script>

<style lang="scss" scoped>

</style>