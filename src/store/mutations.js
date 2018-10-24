export default{
    //store.commit（‘方法名’，附加参数），触发incurement，会把state给带过来
    //state是自动过来的，n是附加的
    increment (state,obj) {
      //变更状态
      // state.count++;
      this.state.count+=obj.n1;
    },
    //减少
    reduce(state,n = 1){
      //setTimeout(()=>{
        //文档意思：不能同步刷新了
        //测试结果：可以同步刷新
        state.count-=n;        
      //},100);
    }
  }