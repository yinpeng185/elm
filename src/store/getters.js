let getters =  {
    //筛选VIP用户
    vipTodos:(state)=>{
      // state.todos.filter((todo)=>{todo.vip});
      //最简写法
      return state.todos.filter(todo=>todo.vip);
    }
  }
  export {
      getters
  };