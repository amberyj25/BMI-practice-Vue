<template>
<div id="rootDiv">
  <header>
    <bmiInput @submitData="data"></bmiInput>
  </header>
    <main>
      <h1>BMI記錄</h1>
      <ul>
        <bmiResult v-for="item in datas" :height="item.height" :weight="item.weight"></bmiResult>
      </ul>
    </main>
  <footer>
    <bmiLogo></bmiLogo>
  </footer>
</div>
</template>
<script>
import bmiInput from "./components/bmiInput.vue"
import bmiResult from "./components/bmiResult.vue"
import bmiLogo from "./components/bmiLogo.vue"

export default{
  name: 'App',
  components: {
    bmiInput,
    bmiResult,
    bmiLogo
  },
  data(){
    return{
      datas:[
        {
          "height":163,
          "weight":58
        }
      ]
    }
  },
  methods:{
    data(height,weight){
      let inputData={
                    "height":height,
                    "weight":weight
                  };
      this.datas.push(inputData);
    }
  }
}
</script>

<style scoped>
header{
  background-color:lightblue;
  padding: 55px 0;
}
#rootDiv{
  padding:0;
}
main{
  background-color: #f5f2f5;
  height: 380px;
}
main h1{
    margin:0;
    padding: 20px 0;
    text-align: center;
}
main ul {
  margin:0;
}
footer{
  background-color:#B2EBF2;
  padding:25px 0 12px 0;
}
</style>