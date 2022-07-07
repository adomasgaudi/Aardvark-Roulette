import {defineStore} from 'pinia'
import moment from 'moment';

const awesome = async(promise) => {
  try{
    const res = await promise;
    const data = await res.json();
    return [data, null] as any
  } catch(error) {
    return [null, error]
  }
}

const timeNow = () => {
  const now = moment().format("HH:mm:ss")
  const mili = moment().valueOf().toString().slice(-3)
  return `${now}.${mili}`
}

const api = `https://dev-games-backend.advbet.com/v1/ab-roulette/`;



const useUrlData = defineStore("main", {
  state: () => ({
    data: {} as any,
    startDelta: {} as {fake: number, last: number, text: string},
    eventsArr: [],
    logText: [],
    errorText: null,
    loading: false,
    timerRunning: false
  }),
  actions: {


    async getGame() {
      this.loading = true;
      await this.pushLogText(`${timeNow()} Loading game...`)
      await this.getConfig();
      await this.getStatsNext();
      await this.getHistory();
      this.loading = false;
      await this.pushEventArr(`Game ${this.data.history[0].id.toString().slice(-3)}  ended with: ${this.data.history[0].result}`)
      if(this.timerRunning === false) {
        await this.wait()
      }
    },
    
    async getSpin() {
      console.log('get spin');
      this.startDelta.text = "Spinning the wheel!!"
      await this.pushEventArr(`Game ${this.data.history[0].id.toString().slice(-3)}  ended with: ${this.data.history[0].result}`)
      await setTimeout(async () => {
        await console.log('now');
        await this.getGameById()
        await this.getStatsNext()
        this.startDelta.text = ""
        await this.wait()
      }, 3000)
      
    },







    async getConfig() {
      const [config, error] = await awesome(fetch(`${api}1/configuration`));
      await this.pushLogText(`${timeNow()} GET .../configuration`)

      if(config) await this.addData({ ...this.data, config })
      if(error) this.errorText = error.message
    },

    async getStatsNext() {
      const [next] = await awesome(fetch(`${api}1/nextGame`));
      await this.pushLogText(`${timeNow()} GET .../nextGame`)
      const [stats] = await awesome(fetch(`${api}1/stats`));
      await this.pushLogText(`${timeNow()} GET .../stats`)

      if(next) {
        
        this.loading = false
        await this.addData({ ...this.data, next, stats })
        console.log(next);
        
        await this.addstartDelta({
          ...this.startDelta,
          last: next.startDelta,
          fake: next.startDelta - 2,
        });
      }
    },
    async getGameById() {
      console.log('last game');
    },
    async getHistory() {
      const [history, error] = await awesome(fetch(`${api}1/history`));
      await this.pushLogText(`${timeNow()} GET .../history`)

      if(history) await this.addData({ ...this.data, history })
      if(error) this.errorText = error.message
    },
    async getSchedule() {
      console.log('shedule');
    },







    addData(data: {}) {
      this.data = data
    },
    addstartDelta(data: {fake: number, last: number, text: string}) {
      this.startDelta = data
    },
    wait() {
      
      this.pushLogText(`${timeNow()} Sleeping till next game`)
      this.timerRunning = true;
      const interval = setInterval(() => {
        if(this.startDelta.fake > 0){
          this.startDelta.fake--;
        }else{
          clearInterval(interval);
          this.timerRunning = false;
          this.getSpin()
        }
      }, 1000);
    },
    pushLogText(data) {
      this.logText.push(data)
    },
    pushEventArr(data) {
      this.eventsArr.push(data)
    }
  }
})


export {useUrlData}