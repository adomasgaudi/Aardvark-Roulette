import {defineStore} from 'pinia'
import moment from 'moment';

const awesome = async(promise: any) => {
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

interface startDeltaT {fake: number; last: number; text: string; timer: number}

//

const useUrlData = defineStore("main", {
  state: () => ({
    data: {} as any,
    startDelta: {} as startDeltaT,
    logText: [] as string[],
    errorText: null,
    loading: false,
    timerRunning: false,
  }),
  actions: {
    async getGame(url: string) {
      this.loading = true;
      await this.pushLogText(`${timeNow()} Loading game...`)
      await this.getConfig(url);
      await this.getStatsNext(url);
      await this.getHistory(url);
      this.loading = false;
      if(this.timerRunning === false) {
        await this.wait(url)
      }
    },
    async getSpin(url: string) {
      this.startDelta.text = "Spinning the wheel!!"
      await setTimeout(async () => {
        await this.getStatsNext(url)
        await this.getHistory(url);
        this.startDelta.text = ""
        await this.wait(url)
      }, 3000)
      
    },
    async getConfig(url: string) {
      const [config, error] = await awesome(fetch(`${url}/configuration`));
      await this.pushLogText(`${timeNow()} GET .../configuration`)

      if(config) await this.addData({ ...this.data, config })
      if(error) this.errorText = error.message
    },
    async getStatsNext(url: string) {
      const [next] = await awesome(fetch(`${url}/nextGame`));
      await this.pushLogText(`${timeNow()} GET .../nextGame`)
      const [stats] = await awesome(fetch(`${url}/stats?limit=200 `));
      await this.pushLogText(`${timeNow()} GET .../stats?limit=200`)
      if(next) {
        this.loading = false
        await this.addData({ ...this.data, next, stats })
        await this.addstartDelta({
          ...this.startDelta,
          last: next.startDelta,
          fake: next.startDelta - 2,
        });
      }
    },
    async getHistory(url: string) {
      const [history, error] = await awesome(fetch(`${url}/history`));
      await this.pushLogText(`${timeNow()} GET .../history`)

      if(history) await this.addData({ ...this.data, history })
      if(error) this.errorText = error.message
    },
    addData(data: {}) {
      this.data = data
    },
    addstartDelta(data: startDeltaT) {
      this.startDelta = data
    },
    wait(url: string) {
      
      this.pushLogText(`${timeNow()} Sleeping till next game`)
      this.timerRunning = true;
      this.startDelta.timer = 0;
      const interval = setInterval(() => {
        if(this.startDelta.fake > 0){
          this.startDelta.fake--;
          this.startDelta.timer++
        }else{
          clearInterval(interval);
          this.timerRunning = false;
          this.getSpin(url)
        }
      }, 1000);
    },
    pushLogText(data: string) {
      this.logText.push(data)
    },
  }
})


export {useUrlData}