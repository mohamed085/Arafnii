import Vue from 'vue'

const components = {
  Nav: () => import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => c.default || c),
  Sidebar: () => import('../..\\components\\sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
