<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './State'

export default {
  props: {
    // recebe duas propriedades, que vai permitir o usuário navegar pelas páginas 
    to: { type: String, required: true },

  },
  // determina se o link está ativo ou não, que me permite atribuir diferentes estilos para os links ativos
  setup(props) {
    // pega a rota atual
    const route = useRoute() // retorna um objeto com o caminho
    // se o caminho for igual ao caminho passado, então a rota será considerada ativa
    const isActive = computed(() => route.path === props.to)
    return { 
      isActive, 
      collapsed 
    }
  }
}
</script>

<template>

<!-- o router link aceita a propriedade 'to' | e passo tbm uma classe que define se o componente está ativo-->
  <router-link :to="to" class="link" :class="{ active: isActive }">

   <!--eu quero que o conteúdo seja mostrado só quando a sidebar estiver expandida-->
      <span v-if="!collapsed">
        <slot /> <!--componente do view que referencia qualquer coisa que é passada dentro do corpo do elemento-->
      </span>
   
  </router-link>
</template>

<style scoped>

.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;

  color: white;
  text-decoration: none;
}

.link:hover {
  background-color: var(--sidebar-item-hover);
}

.link.active {
  background-color: var(--sidebar-item-active);
}

.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>
