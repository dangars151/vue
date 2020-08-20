<template>
  <div style="text-align: center">
    Author:
    <h1>{{ this.$route.params.author }}</h1>

    <div class="row" style="justify-content: center">
      <div class="col-3" v-for="image in images" :key="image.id">
        <img
          :src="image.image"
          :alt="image.description"
          style="width: 100%; height: 300px; margin-top: 20px; margin-bottom: 10px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getImagesByUser } from '../compositions/getImagesByUser'
export default {
  name: 'Author',
  setup(_, ctx) {
    const { images, loading } = getImagesByUser(ctx.root.$route.params.author)

    return {
      images,
      loading,
    }
  },
}
</script>