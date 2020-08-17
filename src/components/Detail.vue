<template>
  <div v-if="image" style="text-align:center">
    <router-link
      :to="{path: '/'}"
      class="btn btn-light"
      style="border: 1px solid black; margin-top: 20px"
    >Return homepage</router-link>
    <br />
    <br />
    <span>
      Author:
      <router-link
        :to="{ name: 'Author', params: { id: image.id, author: image.author } }"
      >{{ image.author }}</router-link>
    </span>
    <br />
    <span>Created at: {{ image.createdAt.substr(8, 2) + '-' + image.createdAt.substr(5, 2) + '-' + image.createdAt.substr(0, 4) }}</span>
    <br />
    <p>{{ image.description }}</p>

    <img :src="image.image_feed" :alt="image.description" />

    <nav aria-label="Page navigation example">
      <ul
        class="pagination"
        style="justify-content: center; margin-top: 30px; margin-bottom: -25px"
      >
        <li class="page-item" v-if="currentPage > 1">
          <a class="page-link" href="#" v-on:click="paging">Previous</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">{{ currentPage }}</a>
        </li>
        <li class="page-item" v-if="currentPage < maxPage">
          <a class="page-link" href="#" v-on:click="paging">Next</a>
        </li>
      </ul>
    </nav>

    <br />
    <br />

    <div class="row" style="justify-content: center">
      <div class="col-2" v-for="image in imgPaging" :key="image.id">
        <img
          :src="image.image_feed"
          :alt="image.description"
          style="width: 300px; height: 200px; margin-top: 20px; margin-bottom: 10px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Detail',
  data() {
    return {
      image: null,
      images: [],
      imgPaging: [],
      perPage: 6,
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
        this.image = response.data[this.$route.params.id - 1]
        this.images = [...response.data].splice(this.$route.params.id, 15)
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
