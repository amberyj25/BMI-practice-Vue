<template>  
  <li>
    <span>{{bmiRange}}</span>
    <span>BMI : {{bmi}}</span>
    <span>height : {{height}} cm</span>
    <span>weight : {{weight}} kg</span>
  </li>
</template>
<script>
export default{
  props:["height","weight"],
  data(){
    return{
      newHeight: this.height/100,
      newWeight: this.weight,
    }
  },
  computed:{
    bmi(){
      return Math.round(this.newWeight/Math.pow(this.newHeight,2))
    },
    bmiRange(){
      if(this.bmi < 18.5){
        return "良好"
      }else if(this.bmi > 27){
        return "努力減肥"
      }else{
        return "正常"
      }
    }
  }
}
</script>

<style scoped>
li{
  width: 700px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 25px auto;
  background-color: yellow;
  padding: 15px 25px;
}
</style>