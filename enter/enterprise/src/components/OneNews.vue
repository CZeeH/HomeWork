<template>
  <div class="news">
    <div class="row ">
      <div class="col-sm">
        <h1>
          {{ newsTitle }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            class="bi bi-chat-left-dots-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            />
          </svg>
        </h1>
         <figcaption class="figure-caption text-right">
            {{newDate}}
          </figcaption>
      </div>
      <div class="w-100"></div>
      <div class="col-sm center">
        <figure class="figure ">
          <img :src="id>1 ? require('../assets/2.jpg') : require('../assets/LJSY.jpg')" class="figure-img img-fluid rounded"  />
          <figcaption class="figure-caption text-right">
            {{text[id]}}
          </figcaption>
        </figure>
      </div>
      <div class="w-100"></div>
      <div class="col-sm" >
        <p class="text-muted" v-for="(item,index) in contains">
          {{item.value}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      id:this.$route.params.id,
      newsTitle: "",
      // imgPath: ['','require("../assets/LJSY.jpg")','require("../assets/18.jpg")'],
      imgPath: require("../assets/LJSY.jpg"),
      text:['','流金岁月宣传','金陵十三钗宣传'],
      contains: [],
      actor: "",
      acMain: "",
      newDate: '',
    };
  },
  components: {},
  mounted() {
    axios
      .get(
        "https://www.fastmock.site/mock/9daf2b94068959c6bbb3fbcd40431b27/enter/api/onenews/id="+this.id
      )
      .then((res) => {
        console.log(res.data);
        this.newsTitle = res.data.onenews.title;
        // this.imgPath = res.data.onenews.img
        this.newDate = res.data.onenews.date
        this.contains = res.data.onenews.contain;
        this.actor = res.data.onenews.actor[0];
        this.acMain = res.data.onenews.actor[1];
        // if(this.id === 1){
        //   this.imgPath = require("../assets/LJSY.jpg")
        // }else{
        //   this.imgPath = require("../assets/2.jpg")
        // }
        console.log(this.imgPath);
      });
  },
};
</script>
<style scoped>
.center{
  text-align: center;
  padding: 15px 0 15px 0;
}

</style>