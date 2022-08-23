<template>
    <v-date-picker 
        v-model="date" 
        @click="dateSelect"
    />
</template>

<script>


export default {
    name: 'CommonCal',
    data () {
        return {
            date : new Date()
        }
    },
    methods: {
        dateSelect() {
            console.log("dateSelect11")
        }
    },
}
</script>
