<template>
    <div class="container">
        <div class="section">
            <h3>{{index+1}}. {{item.title}} </h3>

            <div v-for="(option, index) in item.options" :key="index" >
                <input 
                    type="radio" 
                    :id="index" 
                    :value="option" 
                    v-model="selected"
                    name="option"
                    @click="pickOption(option)"
                >
                <label for="one" class="option">{{option}}</label>
            </div>
            <br><br>
            <!-- <span>Selected : {{ selected }}</span> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Question',
        props:['item','index','list'],
        data() {
            return {
                options: [],
                selected: "",
            };
        },
        methods: {
            pickOption: function(a) {
                this.selected = a;
                if (this.item.answer === a) console.log('Correct ans');
                else console.log('Wrong ans');
                this.$emit('answer', {answer:a,index:this.index});
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        display: flex;
        justify-content: center;
        margin-top: 66px;
    }
    .section{
        background: #FCEAFE;
        border-radius: 20px;
        width: 100%;
        padding-left: 47px;
        padding-right: 49px;
        padding-bottom: 47px;
        text-align: left;
    }
    h3{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 35px;
        color: #6A1CE8;
    }
    .option{
        color: #6A1CE8;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 35px;
        align-items: center;
    }
</style>
