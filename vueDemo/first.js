//实例化个vue对象
new Vue({
	el:"#vue_app",
	data:{
		name:"jhon",
		job:"web开发",
		website:"http://www.thenewstep.com",
		websitebg:"<a href='http://www.thenewstep.com'>Thenewstep</a>"
	},
	methods:{
		greet: function(time){
			return 'Good'+time+" "+this.name+'!'//传值
		}
	}
});