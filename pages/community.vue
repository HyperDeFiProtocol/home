<template>
  <LAutoWidth class='py-10 md:py-20'>
    <CH3>
      <span>
        {{ $t('siteNav.community') }}
      </span>

      <template #tag>
        Online
      </template>
    </CH3>

    <div class='mt-12 md:mt-24 mx-auto max-w-3xl px-4 grid grid-cols-2 md:grid-cols-3 gap-6'>
      <a target='_blank' :href='hpLink.twitter()'>
        <IconTwitter class='w-20 h-20' />
        <p>
          Twitter
        </p>
      </a>

      <a target='_blank' :href='hpLink.discord()'>
        <IconDiscord class='w-20 h-20' />
        <p>
          Discord
        </p>
      </a>

      <a target='_blank' :href='hpLink.medium()'>
        <IconMedium class='w-20 h-20' />
        <p>
          Medium
        </p>
      </a>
      <a target='_blank' :href='hpLink.telegram(telegramChannel)'>
        <HeroIconOutlineSpeakerphone class='w-20 h-20' />
        <p>
          {{ $t('siteNav.telegramChannel') }}
        </p>
      </a>

      <a target='_blank' :href='hpLink.telegram()'>
        <IconTelegram class='w-20 h-20' />
        <p>
          {{ $t('siteNav.telegramGroup') }}
        </p>
      </a>

      <a target='_blank' :href='hpLink.reddit()'>
        <IconReddit class='w-20 h-20' />
        <p>
          Reddit
        </p>
      </a>

      <a target='_blank' :href='hpLink.clubHouseRoom()'>
        <HeroIconOutlineMicrophone class='w-20 h-20' />
        <p>
          ClubHouse
        </p>
      </a>

      <a target='_blank' :href='hpLink.githubToForum()'>
        <HeroIconOutlineTemplate class='w-20 h-20' />
        <p>
          {{ $t('siteNav.githubForum') }}
        </p>
      </a>
    </div>
  </LAutoWidth>
</template>

<script>
import hpLink from '~/utils/hpLink'

export default {
  name: 'community',
  data() {
    return {
      //
    }
  },
  computed: {
    hpLink() {
      return hpLink
    },
    telegramChannel() {
      return process.env.telegramChannel
    },
  },
  methods: {
    //
  }
}
</script>

<style scoped lang='scss'>
a {
  @apply p-6 flex flex-col items-center justify-center space-y-6;
  @apply text-gray-600;

  &:hover {
    @apply bg-gray-800 rounded-md text-gray-400;

    p {
      @apply text-gray-300;
    }
  }
}
</style>
