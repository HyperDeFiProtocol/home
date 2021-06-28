<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <footer class="">
    <LAutoWidth class="py-32 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div class="px-5 py-2">
          <a href="javascript:void(0)" class="text-base text-gray-500 hover:text-gray-300">
            Terms of Service
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="javascript:void(0)" class="text-base text-gray-500 hover:text-gray-300">
            Privacy Policy
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="javascript:void(0)" class="text-base text-gray-500 hover:text-gray-300">
            Cookie Policy
          </a>
        </div>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        <a href="javascript:void(0)" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Facebook</span>
          <IconFacebook class="h-6 w-6" />
        </a>

        <a href="javascript:void(0)" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Instagram</span>
          <IconInstagram class="h-6 w-6" />
        </a>

        <a href="javascript:void(0)" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Twitter</span>
          <IconTwitter class="h-6 w-6" />
        </a>

        <a href="javascript:void(0)" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">GitHub</span>
          <IconGithub class="h-6 w-6" />
        </a>

        <a href="javascript:void(0)" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Dribble</span>
          <IconDribble class="h-6 w-6" />
        </a>
      </div>
      <p class="mt-8 text-center text-base text-gray-400">
        &copy; 2020 HyperDeFi team. All rights reserved.
      </p>
    </LAutoWidth>
  </footer>

</template>

<script>
export default {
  name: 'SiteFooter',
  // mounted() {
  //   console.log('::: process.env.tokenAddress:', process.env.tokenAddress)
  // }
}
</script>

<style scoped>

</style>
