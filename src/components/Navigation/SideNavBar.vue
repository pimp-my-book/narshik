<template>
<div class="wrapper">
     <b-nav vertical class='w-25 h-100'>

        <b-nav-item active>Overview</b-nav-item>
        <B-nav-item>Getting Started</B-nav-item>
    </b-nav>

</div>
   
</template>

<script>
export default {
    name: 'SideNavBar'
}
</script>

<style >

.wrapper{
    display: flex;
    width:100%;
    height: 100vh;
}
.nav {
    background-color: #D4D6C8
}
</style>

