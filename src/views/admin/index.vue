<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>Full name</th>
        <th>E-mail</th>
        <th>Password</th>
        <th>Total tasks</th>
        <th>Completed</th>
        <th>In progress</th>
      </tr>
      <tr v-for="data in usersDataList" :key="data">
        <td>{{data.user.id}}</td>
        <td>{{data.user.fullName}}</td>
        <td>{{data.user.email}}</td>
        <td>{{data.user.password}}</td>
        <td>{{data.tasks.length}}</td>
        <td>{{completedCount(data.tasks)}}</td>
        <td>{{data.tasks.length - completedCount(data.tasks)}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import api from "@/service/api";

export default {
  name: "index",
  data() {
    return {
      usersDataList: []
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      api.admin.findAllUsers().then((response) => {
        this.usersDataList = response.data;
      })
    },
    completedCount(tasks) {
      let count = 0;
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].isFinished) {
          count++
        }
      }
      return count
    },
  }
}
</script>

<style scoped>
table {
  margin-top: 20px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  border-radius: 5px;
  box-shadow: 0 13px 13px rgba(20, 23, 38, 0.02);
}
td, th {
  border: none;
  padding-left: 23px;
  padding-top: 10px;
  padding-bottom: 10px;
}
th {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  line-height: 15px;
  background-color: #FAFAFB;
  color: rgba(0, 0, 0, 0.8);
  color: black;
  font-size: 14px;
  font-family: Poppins-Regular, system-ui;
}
td {
  text-align: center;
  color: black;
  font-size: 14px;
  font-family: Poppins-Light, system-ui;
}
</style>