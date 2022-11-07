const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/nuxt-app/'
        }
      }
    : {}

export default {
  ...routerBase
}