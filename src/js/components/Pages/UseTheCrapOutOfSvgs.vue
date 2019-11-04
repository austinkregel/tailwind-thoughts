<template>
    <div class="origin-left my-8">
        <div class="text-3xl font-bold my-6">Use the crap out of SVGs!</div>
        <Header header="Specifically inline SVGs" subtext="Inline svgs (or component based svgs) let you use tailwind classes inline to help style the svgs." />
        <example-code :code="inlineSvg" class="mt-4" />

        <Header header="SVGs are versatile!" subtext="You can also use SVGs to get diagonal cut-off lines." />
        <example-code :code="horizontalSvg" />
    </div>
</template>

<script>
    export default {
        props: [],

        data() {
            return {
                inlineSvg: `<div class="max-w-xs w-full relative text-gray-600 focus-within:text-blue-500">
    <span class="absolute inset-y-0 left-0 flex items-center pl-4">
        <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
    </span>
    <input class="block w-full rounded-full pl-12 pr-5 py-2 text-lg border-2 border-transparent focus:border-blue-500 shadow focus:outline-none" />
</div>
`,
                horizontalSvg: `<div class="my-8 mx-10 mx-auto px-16 sm:px-24 lg:px-48 bg-gray-200">

    <!-- Carousel Body -->
    <div class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl" style="min-height: 19rem;">
      <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style="min-height: 19rem;">
        <img class="absolute inset-0 w-full h-full object-cover object-center" src="https://stripe.com/img/v3/payments/overview/photos/missguided.jpg" alt="">
        <div class="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
        <div class="absolute inset-0 w-full h-full flex text-2xl items-center justify-center fill-current text-white">
          #TeamTrees4Life
        </div>
      </div>
      <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
        <div class="p-12 md:pr-24 md:pl-16 md:py-12">
          <p class="text-gray-600"><span class="text-gray-900">Bee</span> According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam?.</p>
          <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
            <span>Learn more about our users</span>
            <span class="text-xs ml-1">&#x279c;</span>
          </a>
        </div>
        <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    </div>
  </div>
`
            }
        }
    }
</script>
