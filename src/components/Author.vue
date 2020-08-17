<template>
  <div style="text-align: center">
    <router-link
      :to="{path: '/'}"
      class="btn btn-light"
      style="border: 1px solid black; margin-top: 20px"
    >Return homepage</router-link>
    <br />
    <br />Author:
    <h1>{{ this.$route.params.author }}</h1>
    <nav aria-label="Page navigation example">
      <ul
        class="pagination"
        style="justify-content: center; margin-top: 30px; margin-bottom: -25px"
      >
        <li class="page-item">
          <a class="page-link" href="#" v-on:click="paging" v-if="currentPage > 1">Previous</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">{{ currentPage }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" v-on:click="paging" v-if="currentPage < maxPage">Next</a>
        </li>
      </ul>
    </nav>
    <br />
    <br />
    <div class="row" style="justify-content: center">
      <div class="col-3" v-for="image in imgPaging" :key="image.id">
        <img
          :src="image.image_feed"
          :alt="image.description"
          style="width: 100%; height: 300px; margin-top: 20px; margin-bottom: 10px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Author',
  data() {
    return {
      images: [],
      imgPaging: [],
      perPage: 8,
      currentPage: 1,
      maxPage: 1,
    }
  },
  mounted() {
    axios
      .get(
        `https://5f3798a9bbfd1e00160bf413.mockapi.io/api/v1/list-feed/list-feed`
      )
      .then((response) => {
        this.images = [...response.data].splice(this.$route.params.id, 32)
        this.maxPage = Math.ceil(this.images.length / this.perPage)
        let start = this.perPage * (this.currentPage - 1)
        this.imgPaging = [...this.images].splice(start, this.perPage)
      })
  },
  methods: {
    paging: function (e) {
      if (e.target.innerHTML == 'Previous') {
        if (this.currentPage > 1) {
          this.currentPage -= 1
        }
      } else {
        if (this.currentPage < this.maxPage) {
          this.currentPage += 1
        }
      }

      let start = this.perPage * (this.currentPage - 1)
      this.imgPaging = [...this.images].splice(start, this.perPage)
    },
  },
}
</script>