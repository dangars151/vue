import { reactive, toRefs, onMounted } from '@vue/composition-api'
import { getImages } from '../services/api'

export function getAllImages(currentPage) {
  const data = reactive({
    images: null,
    loading: false,
  })

  const getAllImages = async () => {
    data.loading = true
    try {
      const result = await getImages(currentPage)
      data.images = result.data
    } catch (e) {
      console.log({ e })
    } finally {
      data.loading = false
    }
  }

  const dataRefs = toRefs(data)

  onMounted(() => {
    getAllImages()
  })

  return {
    ...dataRefs,
  }
}
