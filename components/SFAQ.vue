<template>
  <div>
    <LAutoWidth class="py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="lg:max-w-2xl lg:mx-auto lg:text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p class="mt-4 text-gray-400">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.</p>
      </div>
      <div class="mt-20">
        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          <div>
            <dt>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </dt>
            <dd>
              Morbi blandit, tellus eu rhoncus aliquet, nisl nibh malesuada ante, sed consequat dui ligula sed lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas tellus nisi, tincidunt lobortis commodo vitae, laoreet at erat.
            </dd>
          </div>

          <div>
            <dt>
              Mauris fringilla maximus dolor eu pretium?
            </dt>
            <dd>
              Quisque vitae nisi egestas sem vulputate porta eget non massa. Sed rutrum urna eros, nec dapibus eros lobortis commodo. Sed posuere nisi sed nibh hendrerit, cursus elementum nibh ultricies. Nunc ac suscipit arcu.
            </dd>
          </div>

          <div>
            <dt>
              Donec quis odio vitae orci condimentum sodales?
            </dt>
            <dd>
              Phasellus vel fringilla leo. Morbi bibendum lectus ut enim rutrum, vitae sollicitudin ante bibendum. Praesent egestas iaculis leo. Nunc ligula ipsum, accumsan nec accumsan eu, ultricies eget diam. Vestibulum semper id felis nec consequat. Maecenas nec ipsum molestie, tincidunt orci eget, congue felis.
            </dd>
          </div>


          <div>
            <dt>
              Proin ipsum orci, dapibus vitae faucibus ut, dapibus vel arcu?
            </dt>
            <dd>
              Sed ac odio velit. Mauris tempor accumsan suscipit. Etiam fermentum sapien nec molestie feugiat. Donec vitae est nec sapien ultrices euismod. Quisque vel ante ac eros facilisis consectetur.
            </dd>
          </div>
        </dl>
      </div>
    </LAutoWidth>
  </div>

</template>

<script>
export default {
  name: 'SFAQ'
}
</script>

<style scoped lang='scss'>

dt {
  @apply font-semibold text-white;
}

dd {
  @apply mt-3 text-gray-400;
}

</style>
