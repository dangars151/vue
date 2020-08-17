<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul
        class="pagination"
        style="justify-content: center; margin-top: 30px; margin-bottom: -25px"
      >
        <li class="page-item" v-if="currentPage > 1">
          <a class="page-link" href="#" v-on:click="paging">Previous</a>
        </li>
        <li class="page-item" v-if="currentPage > 2">
          <a class="page-link" href="#" v-on:click="paging">{{ currentPage-2 }}</a>
        </li>
        <li class="page-item" v-if="currentPage > 1">
          <a class="page-link" href="#" v-on:click="paging">{{ currentPage-1 }}</a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="#" v-on:click="paging">{{ currentPage }}</a>
        </li>
        <li class="page-item" v-if="currentPage < maxPage">
          <a class="page-link" href="#" v-on:click="paging">{{ currentPage+1 }}</a>
        </li>
        <li class="page-item" v-if="currentPage < maxPage-1">
          <a class="page-link" href="#" v-on:click="paging">{{ currentPage+2 }}</a>
        </li>
        <li class="page-item" v-if="currentPage < maxPage">
          <a class="page-link" href="#" v-on:click="paging">Next</a>
        </li>
      </ul>
    </nav>

    <div class="row m-5" id="content">
      <div class="col-2 m-3 card" v-for="image in imgPaging" :key="image.id">
        <a :href="image.image_feed">
          <img
            :src="image.image_feed"
            :alt="image.description"
            style="width: 100%; height: 250px; padding:10px"
          />
        </a>
        <div class="card-body">
          <p class="card-title">
            Author:
            <router-link
              :to="{ name: 'Author', params: { id: image.id, author: image.author } }"
            >{{ image.author }}</router-link>
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
import axios from 'axios'

export default {
  name: 'Main',
  data() {
    return {
      images: null,
      imgPaging: [],
      perPage: 10,
      currentPage: 1,
      maxPage: 0,
    }
  },
  mounted() {
    axios
      .get(
        'https://5f3798a9bbfd1e00160bf413.mockapi.io/api/v1/list-feed/list-feed'
      )
      .then((response) => {
        this.maxPage = Math.ceil(response.data.length / this.perPage)
        this.images = response.data
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
      } else if (e.target.innerHTML == 'Next') {
        if (this.currentPage < this.maxPage) {
          this.currentPage += 1
        }
      } else {
        this.currentPage = parseInt(e.target.innerHTML)
      }
      let start = this.perPage * (this.currentPage - 1)
      this.imgPaging = [...this.images].splice(start, this.perPage)
    },
  },
}
</script>
