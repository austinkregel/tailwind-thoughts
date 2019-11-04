<template>
    <div class="origin-left my-8">
        <div class="text-3xl font-bold my-6">Breakpoints</div>
        <div>
            <Header header="Declarative" subtext="You must specify the styles you want, when you want them." />
            <example-code :code="declarative" />
        </div>
        <hr class="w-full my-16" />
        <div>
            <Header header="Mobile first" subtext="When using unprefixed classes they'll be shown on all screen sizes unless over written." />
            <example-code :code="responsive"></example-code>
        </div>
        <div class="mb-24"></div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            declarative: `<div class="lg:flex">
    <div class="lg:flex-shrink-0">
        <img class="rounded-lg lg:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt="Woman paying for a purchase">
    </div>
    <div class="mt-4 lg:mt-0 lg:ml-6">
        <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
        <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
</div>
`,
            responsive: `<div class="w-24 h-24 rounded bg-indigo-500 md:bg-pink-500 xl:bg-teal-500"></div>`
        })
    }
</script>
