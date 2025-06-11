export function getUserPermissions() {
  // TODO: remplace par une vraie récupération depuis un store (Pinia/Vuex/etc.)
  return ['admin', 'editor']
}

export function isAuthorizedRoute(route) {
  const userPermissions = getUserPermissions()
  return route.meta?.permissions?.some(p => userPermissions.includes(p)) ?? true
}
