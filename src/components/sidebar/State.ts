// contém o status da sidebar
import { ref, computed } from 'vue'

// define uma const reativa que me permite mostrar e esconder a sidebar
export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 180
export const SIDEBAR_WIDTH_COLLAPSED = 50

// define uma propriedade computed que vai retornar a largura da sidebar
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)