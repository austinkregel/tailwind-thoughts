<style scoped>

</style>

<template>
    <div>
        <div class="flex flex-wrap w-full rounded-lg shadow overflow-hidden">
            <div class="w-full bg-gray-200 text-gray-900 min-h-64 p-4 relative">
                <div v-html="mutableCode"></div>
            </div>
            <div class="w-full text-xs">
                <codemirror v-model="mutableCode" :options="options"></codemirror>
            </div>
        </div>
    </div>
</template>

<script>
    import 'codemirror/theme/material.css'
    import 'codemirror/mode/htmlmixed/htmlmixed'

    export default {
        props: ['code'],
        data: () => ({
            mutableCode: '',
            options: {
                mode: 'htmlmixed',
                tabSize: 4,
                lineNumbers: false,
                lineWrapping: false,
                viewportMargin: 2,
                extraKeys: {
                    'Ctrl-Shft-Space': 'autocomplete'
                },
                theme: 'material',
                electricChars: true
            }
        }),
        mounted() {
            this.mutableCode = this.code;
        }
    }
</script>
