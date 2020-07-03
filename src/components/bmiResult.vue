<template>  
  <li>
    <span>{{bmiRange}}</span>
    <span>BMI : {{bmi}}</span>
    <span>身高 : {{height}} cm</span>
    <span>體重 : {{weight}} kg</span>
    <span>日期 : {{date}}</span>
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
    },
    date(){
      let todayData = new Date();
      let today = `${todayData.getMonth()+1}/${todayData.getDate()}`;
      return today;
    }
  }
}
</script>

<style scoped>
li{
  width: 690px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 25px auto;
  background-color: yellow;
  padding: 15px 25px;
  border-radius: 15px;
}
</style>