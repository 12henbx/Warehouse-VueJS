<template>
    <div @click="even" class="card-box">
        <div class="top-card-box">
            <span>Truk 1 - ASN ../qw/123/er</span>
        </div>
        <div class="middle-card-box">
            <div class="left-middle-card">
                <a>05/07/20</a>
            </div>
            <div class="right-middle-card/">
                <a>05.00 - 07.00</a>
            </div>
        </div>
        <div class="bottom-card-box">
            <div class="background-bottom-card">
                <div class="left-bottom-card">
                    <a>Assigned</a>
                </div>
                <div class="right-bottom-card">
                    <a>Pending</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import router from "../../router";
    export default {
        name: "AssignLDList",
        methods: {
            even() {
                router.push("/")
            }
        }
    }
</script>

<style lang="scss" scoped>

    .card-box {
        display: flex;
        flex-direction: column;
        border-top: 1px solid #adadad;
        border-bottom: 1px solid #adadad;
        padding: 10px 15px;
    }

    .card-box:hover {
        background: #dde9fd;
    }

    .middle-card-box{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .background-bottom-card {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background: #adadad;
        border-radius: 4px;
    }
</style>