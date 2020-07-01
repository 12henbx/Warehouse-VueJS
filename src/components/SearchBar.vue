<template>
    <div class="search-box">
        <label class="highlight-bottom">
            <div class="text-search-box">
                <span class="text-search"><font-awesome-icon class="search-icon" :icon="['fas', 'search']" /></span>
            </div>
            <div class="input-search-box">
                <input type="text" class="input-search" placeholder="Search" aria-label="Search"/>
            </div>
        </label>
    </div>
</template>

<script>
    export default {
        name: "SearchBar"
    }
</script>

<style lang="scss" scoped>
    @import "src/styles/basics/variables";
    @import "src/styles/basics/fonts";
    .input-search {
        /*border-bottom: 2px solid #adadad;*/
        /*position: relative;*/
        /*margin: 30px 0;*/
        width: 200px;
        border: 0;
        outline: 0;
        /*float: left;*/
    }

    .sp-search {
        /*float: left;*/
    }

    .search-box{
        /*display: flex;*/
        overflow: hidden;
        width: 300px;
        height: 100px;
        /*vertical-align: middle;*/
        /*white-space: nowrap;*/
        /*position: relative;*/
    }

    .highlight-bottom {
        display: flex;
        background-color: transparent;
        border-bottom: 2px solid $border-bottom-color;
        align-items: stretch;
        height: fit-content;
        width: max-content;
        z-index: 0;
        position: relative;
    }

    .text-search-box {
        margin-right: 10px;
    }

    .input-search-box {
        margin-bottom: 5px;
    }

    .search-icon {
        font-size: 22px;
    }

    /*.search-box .sp-search{*/
    /*    position: absolute;*/
    /*    top: 50%;*/
    /*    margin-left: 17px;*/
    /*    margin-top: 17px;*/
    /*    z-index: 1;*/
    /*    color: #4f5b66;*/
    /*}*/
</style>