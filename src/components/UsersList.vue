<template>
<table class="table userListTable table-info" >
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col" class="text-center">Nickname</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user, index) in users" :userid="user.id" class="userListTableRow">
      <td>{{user.id}}</td>
      <td>{{user.nickname}}</td>
      <td><svg @click="deleteUser(index)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></td>
    </tr>
  </tbody>
</table>
</template>

<script>
import store from '@/store'
export default {
  name: 'UsersList',
  data(){
    return{
      users: store.state.users //получение юзеров из vuex
    }
  },
  methods: {
    deleteUser(index){ //удаление юзера по клику
      store.commit('deleteUser', index); //удаление из vuex
    }
  }
}
</script>

<style scoped lang="scss">
  .userListTable{
    width: auto;
    margin-left: auto;
    margin-right: auto;
    background: #E0FFFF;
    border-collapse: collapse;

    th, td{
      padding: 0.5em 1em;
      &:first-child{
        padding-left: 2.5em;
      }
      &:last-child{
        padding-right: 2.5em;
      }
    }


    td svg{
      cursor: pointer;
    }
  }

  /*.userListTableRow{
    td{
    }
  }*/
</style>
