<template>
    <div class="container">
        <div class="section">
            <h1>MCQ Result</h1>
            
            <img src="@/assets/results.png">

            <p>You got {{answer}} Score</p>

            <button class="btnStart" @click="onClickButton">
                TAKE AGAIN
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MCQResult',
        props: ['answer'],
        methods:{
            onClickButton () {
                this.$emit('clicked', false)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .section{
        align-items: center;
        background: #FCEAFE;
        border-radius: 20px;
        padding-top: 59px;
        padding-bottom: 53px;
        width: 50%;
        position: relative;
        text-align: center;
    }
    h1{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        color: #6A1CE8;
    }
    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 29px;
        text-align: center;
        color: #373434;
    }
    .btnStart{
        width: 314px;
        height: 56px;
        background: #6A1CE8;
        border-radius: 5px;
        color: #FFFFFF;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 29px;
    }
</style>