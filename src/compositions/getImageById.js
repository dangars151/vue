import { onMounted, reactive, toRefs } from '@vue/composition-api'
import { getImageByIdApi } from '../services/api'

export function getImageById(id) {
  const data = reactive({
    image: null,
    loading: false,
  })

  const getImageById = async () => {
    data.loading = true
    try {
      const result = await getImageByIdApi(id)
      data.image = result.data
    } catch (e) {
      console.log({ e })
    } finally {
      data.loading = false
    }
  }

  const dataRefs = toRefs(data)

  onMounted(() => {
    getImageById()
  })

  return {
    ...dataRefs,
  }
}
