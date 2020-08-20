<template>
  <div v-if="image" style="text-align:center">
    <span>
      Author:
      <router-link :to="{ name: 'Author', params: { author: image.username } }">{{ image.username }}</router-link>
    </span>
    <br />
    <!-- <span>Created at: {{ image.createdAt.substr(8, 2) + '-' + image.createdAt.substr(5, 2) + '-' + image.createdAt.substr(0, 4) }}</span> -->
    <br />
    <p>{{ image.description }}</p>

    <img :src="image.image" :alt="image.description" />
  </div>
</template>

<script>
import { getImageById } from '../compositions/getImageById'

export default {
  name: 'Detail',
  setup(_, ctx) {
    const { image, loading } = getImageById(ctx.root.$route.params.id)

    return {
      image,
      loading,
    }
  },
}
</script>
