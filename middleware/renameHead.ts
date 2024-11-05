export default defineNuxtRouteMiddleware((to,_) => {
  useHead({
    title: `当前页面-${String(to.path)}`,
    meta: [
      {name: 'description', content: `当前页面-${String(to.path)}`}
    ]
  })
})