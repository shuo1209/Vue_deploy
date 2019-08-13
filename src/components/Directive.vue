<template>
    <div class="wrap">
        <div class="header">自定义指令Test</div>
        <div class="main">
            <div>
                <button @click="changeNum(0)">+</button>
                
            </div>
            <div v-change="num">
                0
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
    directives:{
        change:{
            bind(el,bindings){
                console.log("指令绑定成功！");
                console.log(bindings);
                el.innerHTML = bindings.value;
            },
            update: function (el,bindings) {
                console.log('指令的数据变化');
                console.log(bindings);
                el.innerHTML = bindings.value;
            },
            unbind: function () {
                console.log('解除绑定');
            }
        }
    },
    methods: {
        changeNum(val){
            this.num = val == 0?++this.num:--this.num;
            console.log(this.num)
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

