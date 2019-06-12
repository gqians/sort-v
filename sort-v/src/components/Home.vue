<template>
  <div>
    <div id="main">

    </div>
    <button @click="bubble_click">bubble</button>
    <button @click="selection_click">selection</button>
    <button @click="insertion_click">insertion</button>
    <button @click="merge_click">merge</button>
    <button @click="quick_click">quick</button>
  </div>
    

</template>

<script>
  import bar from '../utils/bar';
  import bubble from '../utils/bubble-sort';
  import selection from '../utils/selection-sort';
  import insertion from '../utils/insertion-sort';
  import merge from '../utils/merge-sort';
  import quick from '../utils/quick-sort';
    export default {
        name: 'Home',
        props: {
        },
        mounted(){
        },
    methods: {
      bubble_click(){
        let chart = bar.myChart("main");
        let option = bar.option;
        let array = bubble([60, 89, 23, 78, 36,42,72,19,49,73,48]);
        let arr;
        option.title.text = "冒泡排序";
       let dosort= setInterval(() => {
         arr = array.next();
         if (arr.done == true) {
           clearInterval(dosort);
           return;
         }
         
         option.xAxis.data = arr.value;
         option.series[0].data = arr.value;
         chart.setOption(option);
         
       }, 500)

      },
      selection_click() {

        let chart = bar.myChart("main");
        let option = bar.option;
        let array = selection([60, 89, 23, 78, 36, 42, 72, 19, 49, 73, 48]);
        let arr;
        option.title.text = "选择排序";
        let dosort = setInterval(() => {
          arr = array.next();
          if (arr.done == true) {
            clearInterval(dosort);
            return;
          }
          option.xAxis.data = arr.value;
          option.series[0].data = arr.value;
          chart.setOption(option);

        }, 500)

      },
      insertion_click() {
        let chart = bar.myChart("main");
        let option = bar.option;
        let array = insertion([60, 89, 23, 78, 36, 42, 72, 19, 49, 73, 48]);
        let arr;
        option.title.text = "插入排序";
        let dosort = setInterval(() => {
          arr = array.next();
          if (arr.done == true) {
            clearInterval(dosort);
            return;
          }
          option.xAxis.data = arr.value;
          option.series[0].data = arr.value;
          chart.setOption(option);

        }, 500)
      },
      merge_click() {
        let chart = bar.myChart("main");
        let option = bar.option;
        let array = merge([60, 89, 23, 78, 36, 42, 72, 19, 49, 73, 48]);
        let arr;
        option.title.text = "插入排序";
        let dosort = setInterval(() => {
          arr = array.next();
          if (arr.done == true) {
            clearInterval(dosort);
            return;
          }
          option.xAxis.data = arr.value;
          option.series[0].data = arr.value;
          chart.setOption(option);

        }, 500)
      },
      quick_click() {
        let chart = bar.myChart("main");
        let option = bar.option;
        let array = quick([60, 89, 23, 78, 36, 42, 72, 19, 49, 73, 48],0,10);
        let arr;
        option.title.text = "快速排序";
        let dosort = setInterval(() => {
          arr = array.next();
          if (arr.done == true) {
            clearInterval(dosort);
            return;
          }
          option.xAxis.data = arr.value;
          option.series[0].data = arr.value;
          chart.setOption(option);

        }, 500)
      }
    }
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #main {
    width: 600px;
    height: 400px;
    background-color:antiquewhite;
  }
</style>
