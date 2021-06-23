<template>
  <div class="col-sm"></div>
  <div class="w-100"></div>
  <div class="col-sm">
    <!-- <div class="single-blog" v-for="blog in filteredBlogs">
      <router-link :to="`/blog/${blog.id}`">
        <h2 >{{ blog.title | toUppercase }}</h2></router-link>
      <article>{{ blog.body | snippet }}</article>
    </div> -->
    <div class="single-blog" v-for="news in filteredNews">
      <router-link :to="`/news/${news.id}`" class="tosingle">
        <h2>{{ news.title }}</h2></router-link
      >
      <article>{{ news.body }}</article>
    </div>
  </div>
  <div class="w-100"></div>
  <div class="col-sm">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary" @click="mypre">
        上一页
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        v-for="(item, index) in AllPage"
        @click="now(index)"
      >
        {{ index }}
      </button>
      <button type="button" class="btn btn-secondary" @click="next">
        下一页
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import OneNews from "../components/OneNews.vue";
export default {
  data() {
    return {
      filteredNews: [],
      AllPage: [],
      AllNumber: 0,
      pages: this.$route.params.pages,
      pageNumber: 0,
    };
  },
  mounted() {
    axios
      .get(
        "https://www.fastmock.site/mock/9daf2b94068959c6bbb3fbcd40431b27/enter/api/getall"
      )
      .then((res) => {
        console.log("in  HTTP proxy res -----------------------------------");
        console.log(res.data);
        this.AllPage = res.data;
        this.AllNumber = (this.AllPage / 3)
        this.filteredNews = res.data.slice(0, 3);
      })
      .catch((err) => {
        console.log("in  HTTP proxy err----------------------------------");
        console.error(err);
      });
  },
  methods: {
    mypre: function () {
      let index = this.pageNumber;
      if (index <= 0) {
        alert("已经第一页了");
      } else {
        this.pageNumber--;
        this.changeShow(this.pageNumber);
      }
    },
    now: function (index) {
      if(index>=2){
       this.mypre()
      }else{
        this.next()
      }
    },
    changeShow: function (index) {
      let len = this.filteredNews.length;
      let num = index * 3;
      for (let i = 0; i < len; i++) {
        this.filteredNews.pop();
      }
      for (let i = 0; i < 3; i++) {
        if (this.AllPage[num]) {
          this.filteredNews.push(this.AllPage[num]);
          num++;
        }
      }
    },
    next: function (param) {
      let index = this.pageNumber;
      if (index >= 2) {
        alert("最后一页了");
      } else {
        this.pageNumber++;
        this.changeShow(this.pageNumber);
        console.log(index);
      }
    },
  },
  components: {
    OneNews,
  },
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
  border-radius: 10px;
}
.single-blog:nth-child(odd) {
  background: #e2e3e5;
}
.single-blog:nth-child(even) {
  background: #cce5ff;
}
#show-blog a {
  text-decoration: none;
  color: #444;
}

input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
.tosingle {
  color: black;
  text-decoration: none;
}
</style>
