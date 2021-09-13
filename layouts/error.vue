<template>
  <LAutoWidth class="px-4 py-32 sm:px-6 sm:py-64 md:grid md:place-items-center lg:px-8">
    <div class="max-w-max mx-auto">
      <main class="sm:flex">
        <p class="text-4xl font-extrabold text-gray-600 sm:text-5xl">
          {{ error.statusCode }}
        </p>
        <div class="sm:ml-6">
          <div class="sm:border-l sm:border-gray-600 sm:pl-6 text-gray-500">
            <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Error
            </h1>
            <p class="mt-4 text-base">
              {{ error.message }}
            </p>
          </div>
          <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <nuxt-link :to='localePath("/")' class='btn'>
              Go back home
            </nuxt-link>
          </div>
        </div>
      </main>
    </div>
  </LAutoWidth>
</template>

<script>
export default {
  name: 'error',
  props: [
    'error'
  ],
}
</script>

<style scoped>

</style>
