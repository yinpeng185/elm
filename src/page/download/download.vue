 <template>
  <div>
      
      <div class="hello">
      <router-link to="/MY"><i class="el-icon-arrow-left"></i></router-link>
      <span class="span">下载</span>
     
    
      </div>
        <section>
           <div class="center">
               <img src='../../images/elmlogo.jpeg' >
               <p>下载饿了么APP</p>
               <button>下载</button>
           </div> 
            <!-- <button>下载饿了么APP</button>
            <div class="determine" >下载</div> -->
        </section>
    </div>
</template>

<script>

    export default {
        name:"download",
    
    }
</script>
  
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.hello{
    background: blue;
    text-align: center;
    /* height: 2rem; */
    width: 100%;
    /* border: 5px solid black; */
    position: fixed;
}
.el-icon-arrow-left{
    color: white; 
    font-size: 1.5rem;
    float: left;
    margin-top: 0.3rem;
}
span {
    color: white;
    font-size: 1.5rem;
} 
p{
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.center{
    text-align: center;
    padding-top: 3rem;
}
button{
    color: white;
    background: springgreen;
    border:none;
    width: 15rem;
    height: 3rem;
    font-size: 2rem;
}

</style>
