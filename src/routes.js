import Detail from './components/Detail.vue'
import Main from './components/Main.vue'
import Author from './components/Author.vue'

export const routes = [
  { path: '/detail', name: 'Detail', component: Detail },
  { path: '/author', name: 'Author', component: Author },
  { path: '/', component: Main },
]
