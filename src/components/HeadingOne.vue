<template>
    <p :class="[small ? 'text-sm font-body' : 'text-lg font-body' ]">
    <a
    :href="url" 
    class="no-underline ">    
    {{text}}
    </a>
    </p>
</template>
<script>
export default {
    name:'HeadingOne',
    props: {
        text: String,
        small: Boolean,
        url: String 
    }
}
</script>