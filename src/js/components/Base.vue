<style scoped>

</style>

<template>
    <div class="flex flex-wrap">
        <div class="w-full md:w-2/6 xl:w-1/6">
            <div class="antialiased min-h-screen p-8">
                <div class="flex justify-center">
                    <nav id="nav" class="w-56 relative">
                        <router-link to="/" class="mb-8 block flex items-center">
                            <svg class="h-10 ml-4 w-10 w-auto hidden md:block" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="url(#paint0_linear)" fill-rule="evenodd" clip-rule="evenodd" d="M32 16C24.8 16 20.3 19.6 18.5 26.8C21.2 23.2 24.35 21.85 27.95 22.75C30.004 23.2635 31.4721 24.7536 33.0971 26.4031C35.7443 29.0901 38.8081 32.2 45.5 32.2C52.7 32.2 57.2 28.6 59 21.4C56.3 25 53.15 26.35 49.55 25.45C47.496 24.9365 46.0279 23.4464 44.4029 21.7969C41.7557 19.1099 38.6919 16 32 16ZM18.5 32.2C11.3 32.2 6.8 35.8 5 43C7.7 39.4 10.85 38.05 14.45 38.95C16.504 39.4635 17.9721 40.9536 19.5971 42.6031C22.2443 45.2901 25.3081 48.4 32 48.4C39.2 48.4 43.7 44.8 45.5 37.6C42.8 41.2 39.65 42.55 36.05 41.65C33.996 41.1365 32.5279 39.6464 30.9029 37.9969C28.2557 35.3099 25.1919 32.2 18.5 32.2Z"></path>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="3.5" y1="16" x2="59" y2="48" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#2298BD"></stop>
                                        <stop offset="1" stop-color="#0ED7B5"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div class="ml-2 font-bold text-xl text-teal-400 font-ubuntu">
                                expanded
                            </div>
                        </router-link>
                        <span v-if="selectedIndex !== -1" class="absolute h-10 w-full bg-white rounded-lg shadow ease-out transition-transform transition-medium"
                              :style="{ transform: `translateY(calc(100% * ${selectedIndex}))` }"></span>
                        <ul class="relative" ref="links" id="links">
                            <navigation-item name="Concepts" link="/" icon="code" />
                            <navigation-item name="Breakpoints" link="/breakpoints" icon="mobile-devices" />
                            <navigation-item name="Utilities" link="/condense-utilities" icon="wrench" />
                            <navigation-item name="SVGs" link="/use-svgs" icon="book-reference" />
                            <navigation-item name="Whitespace" link="/consistent-whitespace" icon="align-left" />
                            <navigation-item name="Semantics..." link="/use-extra-divs" icon="duplicate" />
                            <navigation-item name="Floats Vs. Flexbox" link="/floats-vs-flexbox" icon="show-sidebar" />
                            <navigation-item name="Custom Styles" link="/custom-styles" icon="apparel" />
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="w-full md: w-2/3 xl:w-5/6">
            <transition
                enter-active-class="transition-all opacity-0 transition-fast ease-in transform-offscreen-bottom"
                leave-active-class="transition-all opacity-0 transition-fast ease-in-out transform-offscreen-top"
                enter-class="ease-out transition-transform opacity-100 transition-medium transform-offscreen-bottom"
                leave-class="ease-out transition-transform transition-medium transform-offscreen-top"
                enter-to-class="ease-out transition-transform opacity-75 transition-medium transform-offscreen-base"
                leave-to-class="ease-out transition-transform opacity-25 transition-medium">

                <router-view class="origin-left mx-4"></router-view>
            </transition>
        </div>
        <div class="fixed left-0 bottom-0 my-2 mx-4">
            <a href="https://tailwindcomponents.com/" target="_blank" class="underline">Code example sauce</a>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            activeClasses: 'border-l-4 border-teal-500',
            selectedIndex: -1
        }),
        mounted() {
            this.$router.afterEach(() => {
                let changed = false;
                $(this.$refs.links).children('li').each((i, listElement) => {
                    let linkText = $($(listElement).children('a')[0]).attr('href').replace('#', '');
                    if (this.$route.path === linkText) {
                        this.selectedIndex = i;
                        changed = true;
                    }
                })
                if (!changed) {
                    this.selectedIndex = -1;
                }
            })
        }
    }
</script>
