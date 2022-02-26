<script>

import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './State'

export default {
  props: {},
  components: { SidebarLink },

  setup() {
    // importa as configurações da sidebar
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  
  <div class="sidebar" :style="{ width: sidebarWidth }">

    <h1> Pokemons do Zé </h1>

    <SidebarLink class="font" to="/">Home</SidebarLink>
    <SidebarLink class="font" to="/pokeTeam">Create Team</SidebarLink>
    <SidebarLink class="font" to="/teams">Teams</SidebarLink>

  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #031f3a;
  --sidebar-item-hover: #d6c52f,;
  --sidebar-item-active: #030301;
}
</style>


<style scoped>

.font {
  font-size: 1.5rem;
  color: #f8e17b;
  font-family: 'Acme', arial;
}
.sidebar {
  color: #f8e17b;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

</style>
