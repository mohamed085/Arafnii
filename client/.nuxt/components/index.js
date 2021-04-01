export { default as Nav } from '../..\\components\\Nav.vue'
export { default as Sidebar } from '../..\\components\\sidebar.vue'

export const LazyNav = import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => c.default || c)
export const LazySidebar = import('../..\\components\\sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => c.default || c)
