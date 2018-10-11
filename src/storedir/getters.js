const sidebarOpened = state => state.app.sidebar.opened
const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation
const config = state => state.app.config
const palette = state => state.app.palette
const isLoading = state => state.app.isLoading
const swaggerPaths = state => state.app.swaggerPaths
const eventBus = state => state.app.eventBus
const producers = state => state.app.producers
const apibundle = state => state.app.apibundle
const apiversion = state => state.app.apiversion
const users = state => state.app.users
const profileNotifs = state => state.app.profileNotifs
const loading = () => {
  return false
}

export {
  toggleWithoutAnimation,
  sidebarOpened,
  config,
  palette,
  isLoading,
  loading,
  swaggerPaths,
  eventBus,
  producers,
  profileNotifs,
  apibundle,
  apiversion,
  users
}
