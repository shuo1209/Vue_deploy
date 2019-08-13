<template>
  <div id="el" >
      <button @click="updateMsg">
      {{message}}
      </button>
  </div>
</template>

<script>
export default {
  el:"#el",
  data () {
    return {
      message: 'Vue生命周期'
    }
  },
  beforeCreate(){
      console.log("--------------beforeCreate------------");
      console.log("获取$el:" + this.$el);
      console.log("获取$data:" + this.$data); 
      console.log("获取message:" + this.message) 
  },
  created(){
      console.log("--------------created------------");
      console.log("获取$el:" + this.$el);
      console.log("获取$data:" + this.$data); 
      console.log("获取message:" + this.message) 
  },
  beforeMount(){
      console.log("--------------beforeMount------------");
      console.log("获取$el:" + this.$el);
      console.log("获取$data:" + this.$data); 
      console.log("获取message:" + this.message) 
  },
  mounted(){
      console.log("--------------mounted------------");
      console.log("获取$el:" + this.$el);
      console.log("获取$data:" + this.$data); 
      console.log("获取message:" + this.message) 
  },
  beforeUpdate(){
      console.log("--------------beforeUpdate------------");
      console.log("获取$el:" + this.$el);
      console.log("获取$data:" + this.$data); 
      console.log("获取message:" + this.message) 
  },
  updated(){
      console.log("--------------updated------------");
      console.log("获取$el:" + this.$el);
      console.log("获取$data:" + this.$data); 
      console.log("获取message:" + this.message) 
  },
  beforeDestroy(){
      console.log("--------------beforeDestroy------------");
      console.log("获取$el:" + this.$el);
      console.log("获取$data:" + this.$data); 
      console.log("获取message:" + this.message) 
  },
  destroyed(){
      console.log("--------------destroyed------------");
      console.log("获取$el:" + this.$el);
      console.log("获取$data:" + this.$data); 
      console.log("获取message:" + this.message) 
  },
  methods:{
    updateMsg(){
      this.message = "Vue生命周期update触发"
    }
  }
}
</script>
