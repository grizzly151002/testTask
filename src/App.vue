<template>
  <h1 class="text-center mt-5">Таблица пользователей</h1>
  <users-list />
</template>

<script>
  import UsersList from "@/components/UsersList"
  export default{
    components:{
      UsersList
    }
  }
</script>
<style lang="scss">
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1{
    font-size: 1.5em;
  }
</style>
