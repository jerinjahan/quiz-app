<template>
    <div class="container">
        <div class="section">
            <div class="element">Remaining time</div>
            <div class="element">{{hours}} : {{ minutes }} : {{seconds}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Counter',
        props: {
            date: {
                type: String
            }
        },
        data() {
            return {
                timerCount: 10,
                now: Math.trunc((new Date()).getTime() / 1000)
            }
        },
        mounted() {
            window.setInterval(() => {
                this.now = Math.trunc((new Date()).getTime() / 1000);
            },1000);
        },
        computed: {
            dateInMilliseconds() {
                return Math.trunc(Date.parse(this.date) / 1000)
            },
            seconds() {
                let value = (this.dateInMilliseconds - this.now) % 60;
                if (value.toString().length <= 1) {
                    return `0${value}`;
                }
                return value;
            },
            minutes() {
                let value = Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
                if (value.toString().length <= 1) {
                    return `0${value}`;
                }
                return value;
            },
            hours() {
                let value = Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
                if (value < 0) {
                    return '00';
                }
                if (value.toString().length <= 1) {
                    return `0${value}`;
                }
                return value;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .section{
        /* flex:1; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: #FCEAFE;
        border-radius: 20px;
        width: 100%;
        padding-left: 47px;
        padding-right: 49px;
        height:117px ;
    }
    .element{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 35px;
        color: #6A1CE8;
    }
</style>
