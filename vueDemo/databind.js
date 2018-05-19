new Vue({
	el:"#vue-app",
	data:{
		name:"hello",
		age:""
	},
	methods:{
		logName:function(){
         // this.name=this.$refs.name.value;
           // console.log(this.$refs.name.value);
          },
          logAge:function(){
          	// this.age=this.$refs.age.value;
          	// console.log(this.$refs.age.value);
          }
	}
});