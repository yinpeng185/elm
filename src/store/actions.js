export default{
    //context:上下文，类似store对象
    asyReduce (context,n) {
      //异步请求成功后，触发mutation函数
      setTimeout(()=>{
        context.commit('reduce',n);        
      },1000);
    }
  }