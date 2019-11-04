<template>
    <div class="origin-left my-8">
        <div class="text-3xl font-bold my-6">Widths and whitespace!</div>

        <Header header="Don't be afraid to use some extra divs!" subtext="Never be afraid to throw in an extra wrapper div to use padding instead of using margins. (This is to prevent potential issues with margin collapsing)" />
        <example-code :code="actionStatus" />

        <Header header="Extra!" subtext="Never be afraid to throw in an extra wrapper div to use padding instead of using margins. (This is to prevent potential issues with margin collapsing)" />
        <example-code :code="actionStatus2" />
    </div>
</template>

<script>
    export default {
        props: [],
        data: () => ({
            actionStatus: `<div class="flex flex-col justify-between">
    <div class="flex">
        <div class="w-2/5 mr-24">
            According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam?
        </div>
        <div class="w-2/5">
            Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house! - Hey, Adam. - Hey, Barry.
        </div>
    </div>
</div>
`,
            actionStatus2: `<div class="flex flex-col justify-between">
    <div class="flex">
        <div class="w-2/5">
             <div class="mr-24">
            According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam?
            </div>
        </div>
        <div class="w-2/5">
            Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house! - Hey, Adam. - Hey, Barry.
        </div>
    </div>
</div>
`
        })
    }
</script>
