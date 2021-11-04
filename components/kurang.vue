<template>
  <div @click="kurang()" class=" bg-green-gray-300 border-2 border-yellow-400 w-full  rounded flex  w-full">
    <button class="w-full h-10 flex justify-center items-center text-black font-semibold">- decrease</button>
  </div>
</template>

<script>
export default {
  methods: {
    kurang(){
      // this.num = this.num-1
      this.$store.commit('kurangCount')
    }
  },
}
</script>

<style>

</style>
