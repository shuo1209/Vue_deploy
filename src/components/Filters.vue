<template>
    <div class="wrap">
        <div class="header">过滤器Test</div>
        <div class="main">
            <div>
                <button @click="changeNum(0)">+</button>
                
            </div>
            <div>
                {{ num | addNum}}
            </div>
            <div><button @click="changeNum(-1)">-</button></div>
           
        </div>
    </div>
</template>
<<script>
export default {
    data(){
        return {
            num:0
        }
    },
    filters: {
      addNum: function (value) {
        if (value == 0) return 0
        return "原始值："+value+"，过滤值："+(++value);
      }
    },
    methods: {
        changeNum(val){
            this.num = val == 0?++this.num:--this.num;
        }
    },
}
</script>
<style scoped>
    .wrap{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .main{
        display: flex;
        justify-content: space-around;
    }
</style>

