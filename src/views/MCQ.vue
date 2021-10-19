<template>
    <div class="home" v-if="questionStage">
        <div class="wrapper">
            <Counter :date='timer' />

            <Question
                v-for="(item, index) in questions" :key="index" 
                :item='item' 
                :index='index'
                :list='answers'
                :selectedOption='answers[index]'
                v-on:answer="handleAnswer"
            />

            <div class="btnWrapper">
                <button class="btnFinish" @click="goToResult()">
                    FINISH
                </button>
            </div>
        </div>
    </div>

    <div v-if="resultsStage">
        <MCQResult  
            :answer='perc'
            @clicked="resetPage"
        />
    </div>
</template>

<script>
    import Counter from '@/components/Counter.vue'
    import Question from '@/components/Question.vue'
    import MCQResult from '@/components/MCQResult.vue'
    import questionsList from '../assets/data/questions.json'

    export default {
        name: 'MCQ',
        components: {
            Counter,
            Question,
            MCQResult
        },
        data() {
            var minutesToAdd = 30;
            var currentDate = new Date();
            var futureDate = new Date(currentDate.getTime() + minutesToAdd*60000);
            return {
                questionStage:true,
                resultsStage:false,
                questions: questionsList,
                answers:[],
                correct:0,
                perc:null,
                timer: futureDate.toISOString()
            };
        },
        methods:{
            handleAnswer(e) {
                this.answers[e.index] = e.answer;
            },
            goToResult(){
                this.questions.forEach((a, index) => {
                    if(this.answers[index] === a.answer) this.correct++;        
                });
                this.perc = ((this.correct / this.questions.length)*100).toFixed(2);
                this.perc = parseInt(this.perc);
                this.questionStage = false;
                this.resultsStage = true; 
            },
            resetPage(){
                this.questionStage = true;
                this.resultsStage = false;
                this.answers = [];
                this.correct = 0;
                this.perc = null;

                var minutesToAdd = 30;  
                var currentDate = new Date();
                var futureDate = new Date(currentDate.getTime() + minutesToAdd*60000);
                this.timer = futureDate.toISOString();
            }
        }
    }
</script>

<style scoped>
    .home{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btnWrapper{
        text-align: right;
    }
    .btnFinish{
        margin-top: 55px;
        width: 314px;
        height: 56px;
        background: #6A1CE8;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 25px;
        line-height: 29px;
        align-self: flex-end;
    }
</style>
