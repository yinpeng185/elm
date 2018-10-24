 <template>
 <div>
  <div class="hello">
      <i class="el-icon-arrow-left"></i>
      <span class="span">我的</span>
      <div class="login">
        <img class="qq" src="../../images/qq.png" alt="">
        <span class="login2">登录/注册</span>
        <p class="login3"> <i class="el-icon-mobile-phone"></i>暂无绑定手机号</p>
        <i class="el-icon-arrow-right el"></i>
      </div>
  </div>
  <div class="center">
     <div class="one">
       <span class="yuan">0.00</span>
       <span>元</span>
       <p>我的余额</p>
       </div>
     <div class="two">
       <span  class="ge">0</span>
       <span>个</span>
       <p>我的优惠</p>
       </div>
     <div class="thr">
       <span  class="fen">0</span>
       <span>分</span>       
       <p>我的积分</p>
       </div>
  </div>
<div class="er">
  <div>
    <img src="../../images/bindphone.png" alt="">
    我的订单
    <i class="el-icon-arrow-right el-right"></i>
  </div>
  <div>
    <img src="../../images/bindphone.png" alt="">    
    积分商城
    <i class="el-icon-arrow-right el-right"></i>
  </div>
  <div>
    <img src="../../images/bindphone.png" alt="">
    饿了么会员卡
    <i class="el-icon-arrow-right el-ri"></i>
  </div>
</div>

<div class="san">
 <div>
    <img src="../../images/bindphone.png" alt="">
    服务中心
    <i class="el-icon-arrow-right el-right"></i>
  </div>
  <router-link to="/download">  
    <div>
       <img src="../../images/bindphone.png" alt="">
       下载饿了么APP 
       <i class="el-icon-arrow-right el-r"></i>
    </div>
  </router-link>
</div>

</div>
</template>

<script>
export default {
  name: "my",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
text-decoration: none;
}

.er{
  margin-top:80%; 
  border: 1px solid black;
}
.san{
  margin-top:5%; 
  border: 1px solid black;
}
.el-right{
  margin-top: 2%;
  float: right;
  color: black;
}
.el-ri{
  margin-top: 2%;
  float: right;
  left: 57%;
}
.el-r{
  float: right;
  margin-top: 2%;
  left: 53%;
}
.er div,.san div{
  color: black; 
  height: 30px;
  line-height: 30px;
}
.er div img,.san div img{
  position: relative;
  left: 5px;
  top: 5px;
  margin-right: 5px;
}

div{
  /* border: 1px solid black; */
  color: white;
}
.yuan{
  font-size: 2rem;
  color: orange;
}
.ge{
  font-size: 2rem; 
  color: red;
}
.fen{
  color: green;
  font-size: 2rem;  
}
.hello {
  background: blue;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  padding-top: 10px;
  text-align: center;
  border: 1px solid black;  
}
.center{
  border: 1px solid red;
  position: fixed;
  width: 100%;
  height: 15%;
  top: 26.5%;
  left: 0;
   display: flex;
  justify-content: space-around;
  list-style: none;
  
}
.center ul{
  border: 1px solid black;
  width: 100%;
 
}
.center ul li{
  border: 1px solid black;
}
.one,.two,.thr{
  color: black;
  text-align: center;
  padding-top:3%; 
}
.two{
  padding: 3% 7% 0 7%;
  border-left:1px solid gray;
  border-right:1px solid gray; 
}
.qq {
  width: 70px;
  margin: 30px;
  position: relative;
  left: -60px;
  top: 0px;
  border: 1px solid black;
}
.login {
  width: 100%;
  height: 117px;
  position: absolute;
}
.login2 {
  position: relative;
  left: -75px;
  top: -80px;
}
.login3 {
  position: relative;
  left: 20px;
  top: -90px;
}
.span {
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: 1px solid black;
  margin-right: 30px;
}
.el-icon-arrow-left {
  font-size: 1.2rem;
  float: left;
}
.el {
  color: white;
  position: relative;
  left: 130px;
  top: -130px;
}

</style>


