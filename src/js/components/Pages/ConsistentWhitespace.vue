<template>
    <div class="origin-left my-8">
        <div class="text-3xl font-bold my-6">Consistency with whitespace</div>
        With spacing, I try to always adjust things based on the top and left spacings (margin/paddings) in most cases.
        This is because in 95% of cases you don't want one element to move another. (With margin bottom for example, your saying that everything after the element should be moved)

        In the other like 5%, they're conditional based, in which you don't want the rest of your styles/elements to know the thing exists.

        <Header header="Use top/left whitespacing or of bottom/right, not both." subtext="(Keep it  consistent)" />
        <example-code :code="notBoth" />
    </div>
</template>

<script>
    export default {
        props: [],
        data: () => ({
            notBoth: `<div class="w-full md:w-1/4 mx-auto">
    <div class="bg-white shadow-md rounded px-8 py-6 flex flex-col">
        <div>
            <label class="block text-gray-700 text-sm font-bold" for="username">
                Username
            </label>
            <input class="shadow appearance-none border rounded w-full mt-2 py-2 px-2 text-gray-700" id="username" type="text" placeholder="Username">
        </div>
        <div class="mt-4">
            <label class="block text-gray-700 text-sm font-bold" for="password">
                Password
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full mt-2 py-2 px-2 text-gray-700" id="password" type="password" placeholder="******************">
            <p class="text-red-500 text-xs italic mt-2">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between mt-6">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="button">
                Sign In
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-600" href="#">
                Forgot Password?
            </a>
        </div>
    </div>
</div>`
        })
    }
</script>
