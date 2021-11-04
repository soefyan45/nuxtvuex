<template>
  <div @click="tambah()" class=" bg-green-600 flex  w-full items-center rounded px-4">
    <button class="w-full h-10 flex justify-center items-center text-white font-semibold">+ increase</button>
  </div>
</template>

<script>
export default {
  methods: {
    tambah(){
      this.$store.commit('tambahCount')
    },
  },
}
</script>

<style>

</style>
