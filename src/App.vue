<template>
  <div id="app" no-scroll>
    <lucky-card v-for="i in total" :value="nums[i - 1]"></lucky-card>
    <mu-footer></mu-footer>
  </div>
</template>

<script>
import LuckyCard from './components/LuckyCard'
import MuFooter from './components/MuFooter'

const sleep = async (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default {
  name: 'app',
  components: {
    LuckyCard,
    MuFooter
  },
  data () {
    return {
      nums: [],
      isRunning: false,
      total: 5
    }
  },
  created () {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 32) {
        if (this.isRunning) {
          this.stop()
        } else {
          this.start()
        }
        e.preventDefault()
      }
    })
  },
  methods: {
    async start () {
      this.isRunning = true
      while (this.isRunning) {
        this.update()
        await sleep(100)
      }
    },
    stop () {
      this.isRunning = false
    },
    update () {
      let nums = []
      for (let i = 0; i < this.total; ++i) {
        nums.push(Math.floor(Math.random() * 800 + 1))
      }
      this.nums = nums
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  background-image: url(./assets/background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
