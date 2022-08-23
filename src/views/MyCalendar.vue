<template>
    <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Check Bootstrap
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
    <VCalendar/>
</template>

<script>
import VCalendar from  '@/components/CommonCal.vue'

export default {
    name: 'MyCalendar',
    components: {
        VCalendar
    },
    data() {
        return{
            userName: "",
            date: new Date()
        }
    },
    methods:{
        async readUserName() {
            const params = {
                userID : "P000000001"
            }
            const result = await this.$store.dispatch('getUserName', params);
            console.log(result);
            console.log(this.$store.state.userName)
            this.userName = this.$store.state.userName
        }
    }

}
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {
        
//     },
// })
</script>
