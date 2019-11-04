<template>
    <div class="text-xl mt-8 mb-4 font-bold">
        {{ header }}
        <div class="text-xs" v-if="subtext">{{ subtext }}</div>
    </div>

</template>

<script>
    export default {
        props: ['header', 'subtext'],
    }
</script>
