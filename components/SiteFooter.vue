<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <footer class="">
    <LAutoWidth class="py-32 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div class="px-5 py-2">
          <nuxt-link :to='localePath("/ido")' class="text-base text-gray-500 hover:text-gray-300">
            <span>
              {{ $t('siteNav.genesis') }}
            </span>
          </nuxt-link>
        </div>

        <div class="px-5 py-2">
          <nuxt-link :to='localePath("/dashboard")' class="text-base text-gray-500 hover:text-gray-300">
            <span>
              {{ $t('siteNav.dashboard') }}
            </span>
          </nuxt-link>
        </div>

<!--        <div class="px-5 py-2">-->
<!--          <a href="javascript:void(0)" class="text-base text-gray-500 hover:text-gray-300">-->
<!--            Terms of Service-->
<!--          </a>-->
<!--        </div>-->

        <div class="px-5 py-2">
          <a href="javascript:void(0)" class="text-base text-gray-500 hover:text-gray-300">
            Cookie Policy
          </a>
        </div>

        <div class="px-5 py-2">
          <nuxt-link :to='localePath("/modes")' class="text-base text-gray-500 hover:text-gray-300">
            {{ $t('siteNav.modes') }}
          </nuxt-link>
        </div>

        <div class="px-5 py-2">
          <nuxt-link :to='localePath("/cache")' class="text-base text-gray-500 hover:text-gray-300">
            {{ $t('siteNav.cache') }}
          </nuxt-link>
        </div>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
<!--        <a href="javascript:void(0)" class="text-gray-400 hover:text-gray-500">-->
<!--          <span class="sr-only">Facebook</span>-->
<!--          <IconFacebook class="h-6 w-6" />-->
<!--        </a>-->

<!--        <a href="javascript:void(0)" class="text-gray-400 hover:text-gray-500">-->
<!--          <span class="sr-only">Instagram</span>-->
<!--          <IconInstagram class="h-6 w-6" />-->
<!--        </a>-->
        <a target='_blank' :href='hpLink.twitter()' class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Twitter</span>
          <IconTwitter class="h-6 w-6" />
        </a>

        <a target='_blank' :href='hpLink.discord()' class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Discord</span>
          <IconDiscord class="h-6 w-6" />
        </a>

        <a target='_blank' :href='hpLink.medium()' class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Medium</span>
          <IconMedium class="h-6 w-6" />
        </a>

        <a target='_blank' :href='hpLink.reddit()' class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Reddit</span>
          <IconReddit class="h-6 w-6" />
        </a>

        <a target='_blank' :href='hpLink.telegram(telegramChannel)' class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Telegram Channel</span>
          <HeroIconOutlineSpeakerphone class="h-6 w-6" />
        </a>

        <a target='_blank' :href='hpLink.telegram()' class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Telegram</span>
          <IconTelegram class="h-6 w-6" />
        </a>

        <a target='_blank' :href='hpLink.clubHouseRoom()' class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">ClubHouse</span>
          <HeroIconOutlineMicrophone class="h-6 w-6" />
        </a>

        <a target='_blank' :href='hpLink.github()' class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">GitHub</span>
          <IconGithub class="h-6 w-6" />
        </a>
      </div>
      <p class="mt-8 text-center text-base text-gray-400">
        &copy; {{ yearRange }} HyperCrypto Labs, All rights reserved.
      </p>
    </LAutoWidth>
  </footer>

</template>

<script>
import hpLink from '~/utils/hpLink'

export default {
  name: 'SiteFooter',
  computed: {
    hpLink() {
      return hpLink
    },
    telegramChannel() {
      return process.env.telegramChannel
    },
    yearRange() {
      const startYear = '2021'
      const date = new Date()
      const thisYear = date.getFullYear().toString()

      if (thisYear === startYear) {
        return startYear
      }

      return startYear + '-' + thisYear
    },
  }
  // mounted() {
  //   console.log('::: process.env.tokenAddress:', process.env.tokenAddress)
  // }
}
</script>

<style scoped>

</style>
