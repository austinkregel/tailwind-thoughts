<template>
    <div class="origin-left my-8">
        <div class="text-3xl font-bold my-6">Don't use duplicate utilities</div>
        <div>
            <Header header="Don't use duplicate utilities" subtext="Using ml-2 and mr-2 should be condensed to mx-2." />

            <example-code :code="abuseUtilities" class="mt-4" />
            <example-code :code="notAbuseUtilities" class="mt-4"/>
        </div>
        <div class="mt-4">
            Using condensed utilities will help limit the number of places you'll have fewer where you might mix up the sizes.
        </div>
        <div class="mt-24"></div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            abuseUtilities: `<div class="flex">
    <div class="border border-red-500 pl-4 pr-4">
        <div class="w-24 h-24 rounded bg-blue-500" />
    </div>
</div>
`,
            notAbuseUtilities: `<div class="flex">
    <div class="border border-red-500 px-4">
        <div class="w-24 h-24 rounded bg-blue-500" />
    </div>
</div>
`,
            responsive: `<div class="w-24 h-24 rounded bg-indigo-500 md:bg-pink-500 xl:bg-teal-500"></div>`
        })
    }
</script>
