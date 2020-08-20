<template>
  <div>
    <ul class="pagination">
      <!-- <li class="page-item" v-if="currentPage > 1">
        <a class="page-link" href="#">Prev</a>
      </li>-->
      <li class="page-item">
        <a class="page-link" href="#">{{ currentPage }}</a>
      </li>
      <!-- <li class="page-item">
        <a class="page-link" href="#" @click="clickNext">Next</a>
      </li>-->
    </ul>

    <div class="row m-5" id="content">
      <div class="col-2 m-3 card" v-for="image in images" :key="image.id">
        <a :href="image.image_feed">
          <img
            :src="image.image"
            :alt="image.description"
            style="width: 100%; height: 250px; padding:10px"
          />
        </a>
        <div class="card-body">
          <p class="card-title">
            Author:
            <router-link
              :to="{ name: 'Author', params: { author: image.username } }"
            >{{ image.username }}</router-link>
          </p>
          <router-link
            class="btn btn-primary"
            :to="{ name: 'Detail', params: { id: image.id } }"
          >Xem chi tiet</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllImages } from '../compositions/getAllImages'
//import { computed } from '@vue/composition-api'
//import { reactive } from '@vue/composition-api'

export default {
  name: 'Main',
  setup(_, ctx) {
    // const state = reactive({
    //   currentPage: 1,
    //   images: computed(() => getAllImages(state.currentPage).images),
    //   //images: getAllImages(1).images,
    // })
    // console.log(state.images)
    // get image
    let currentPage = ctx.root.$route.query.page
    if (!currentPage) {
      currentPage = 1
      ctx.root.$router.push({ query: { page: 1 } })
    }

    let { images, loading } = getAllImages(currentPage)
    // watchEffect(() => {
    //   console.log(state.currentPage)
    // })
    function clickNext() {
      // console.log(state.images)
      //currentPage++
      // console.log(state.currentPage)
      // state.images = getAllImages(state.currentPage).images
    }

    return {
      images,
      loading,
      currentPage,
      clickNext,
    }
  },
}
</script>

<style>
.pagination {
  justify-content: center;
  margin-top: 30px;
  margin-bottom: -30px;
}
</style>