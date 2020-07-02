<template>
  <div class="header_content">
    <img src="../assets/bmi_logo.png" alt="bmiLogo" class="bmi_logo">
    <div class="bmi_input">
      <h2>身高cm</h2>
      <input type="text" placeholder="請輸入身高" v-model="height">
      <h2>體重kg</h2>
      <input type="text" placeholder="請輸入體重" v-model="weight">
    </div>
      <button class="submit" @click="submit" >看結果</button>
  </div>
</template>

<script>
export default{
  name: 'BmiInput',
  data(){
    return{
      height:"",
      weight:"",
    }
  },
  methods:{
    submit(){
      if(this.height == "" || this.weight == ""){return};
      this.$emit("submitData",this.height,this.weight);
      this.height= "";
      this.weight= "";
    }
  }
}
</script>
<style scoped>
.header_content{
  width:700px;
  display:flex;
  justify-content:space-between;
  align-items: center;
  margin: 0 auto;
}
.bmi_input input{
  width: 250px;
  height: 25px;
  border:2px solid yellow;
  border-radius: 10px;
  padding: 2px 10px;
}
.bmi_input h2{
  margin: 0 0 12px 0;
  color: blue;
  font-size: 20px;
}
.submit{
  width:120px;
  height:120px;
  border: 2px solid yellow;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  line-height:120px;
}
</style>