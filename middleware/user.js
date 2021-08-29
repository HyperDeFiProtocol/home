export default async function ({route, store, redirect, app }) {
  if (!route.params.username.startsWith('@')) {
    console.error('`username` is not started with a `@`')
    // redirect(app.$i18n.localePath('/user/invalid'))

    redirect(app.localePath('/user/invalid'))
  }
}
