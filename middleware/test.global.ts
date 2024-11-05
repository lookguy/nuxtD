export default defineNuxtRouteMiddleware((_,from)=>{
  if(from.name !== '404'){
    console.log('我是全局中间件')
  }
})