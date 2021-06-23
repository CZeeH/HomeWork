<template>
  <div >
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #7952b3"
  >
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">关于我们</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shownews/1" class="nav-link">新闻</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="pad"></div>
  <div class="container">
    <router-view></router-view>
  </div>
  <div class="row gap">
  <hr>
    <div class="col-sm">
    </div>
    <div class="col-sm">
    联系方式：
      <div class="ER">我是联系方式</div>
    </div>
    <div class="col-sm">
      二维码：
      <div class="ER">我是二维码</div>
    </div>
    <div class="col-sm">
    </div>
  </div>
  </div>
  
</template>
<script>
export default {};
</script>
<style scoped>
.pad{
    height: 50px;
}
.gap{
  padding-top: 150px;
}
.ER{
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 10px;
}
</style>