import { onMounted, reactive, toRefs } from '@vue/composition-api'
import { getImagesByUserApi } from '../services/api'

export function getImagesByUser(username) {
  const data = reactive({
    images: null,
    loading: false,
  })

  const getImagesByUser = async () => {
    data.loading = true
    try {
      const result = await getImagesByUserApi(username)
      data.images = result.data
    } catch (e) {
      console.log({ e })
    } finally {
      data.loading = false
    }
  }

  const dataRefs = toRefs(data)

  onMounted(() => {
    getImagesByUser()
  })

  return {
    ...dataRefs,
  }
}
