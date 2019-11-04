<template>
    <div class="origin-left my-8">
        <div class="text-3xl font-bold my-6">Don't be afraid to use some extra divs!</div>

        <Header header="Floating a button" subtext="Floats change the order in which you would expect an element too be rendered." />
        <example-code :code="float" />

        <Header header="Flexbox all the things" subtext="Flexbox lets you position things and keep your markup sane." />
        <example-code :code="flexbox" />
    </div>
</template>

<script>
    export default {
        props: [],
        data: () => ({
            flexbox: `<div class="flex justify-end">
    <button id="flexbox-top" class="align-middle text-center select-none border font-normal whitespace-no-wrap mt-2 py-1 px-2 rounded text-base leading-normal no-underline text-blue-500 hover:text-white hover:bg-blue-500 border-blue-500">Top</button>
    <button id="flexbox-bottom" class="align-middle text-center select-none border font-normal whitespace-no-wrap mt-2 ml-4 py-1 px-2 rounded text-base leading-normal no-underline text-blue-100 hover:text-blue-500  bg-blue-500 hover:bg-transparent border-blue-500">Bottom</button>
</div>`,
            float: `<div>
    <button id="float-top" class="float-right align-middle text-center select-none border font-normal whitespace-no-wrap mt-2 py-1 px-2 rounded text-base leading-normal no-underline text-blue-500 hover:text-white hover:bg-blue-500 border-blue-500">Top</button>
    <button id="float-bottom" class="float-right align-middle text-center select-none border font-normal whitespace-no-wrap mt-2 mr-4 py-1 px-2 rounded text-base leading-normal no-underline text-blue-100 hover:text-blue-500  bg-blue-500 hover:bg-transparent border-blue-500">Bottom</button>
</div>`
        })
    }
</script>
