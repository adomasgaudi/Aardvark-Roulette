import {defineStore} from 'pinia'
import moment from 'moment';

const fetcher = async(url: string) => {
  try{
    const res = await fetch(url);
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
interface dataT {
  history: unknown, 
  config: {
    name: string, 
    slots: number, 
    results: string[], 
    colors: {}, 
    positionToId: {}
  }, 
  stats: {result: number, count:number}[], 
  getById: unknown, 
  next: unknown,
}

const useUrlData = defineStore("main", {
  state: () => ({
    data: {} as dataT,
    startDelta: {} as startDeltaT,
    logText: [] as string[],
    errorText: null,
    loading: false,
    timerRunning: false,
    urlText: "" as string,
  }),
  actions: {
    async getGame(url: string) {
      this.loading = true;
      this.pushLogText(`${timeNow()} Loading game...`)
      await this.getConfig(url);
      await this.getStatsNext(url);
      const history = await this.getHistory(url);
      if(this.data.history) await this.getById(url, this.data.history[0].id.toString())
      this.loading = false;
      if(this.timerRunning === false) {
        this.timerInit()
      }
    },
    async getSpin(url: string) {
      this.startDelta.text = "Spinning the wheel!!"
      setTimeout(async () => {
        await this.getStatsNext(url)
        const history = await this.getHistory(url);
        if(this.history) await this.getById(url, this.history[0].id.toString())
        this.startDelta.text = ""
        this.timerInit()
      }, 3000)
      
    },
    async getById(url: string, id: string) {
      const [gameById, error] = await fetcher(`${url}/game/${id}`);
      this.pushLogText(`${timeNow()} GET .../game/{id}`)
      if(gameById) this.addData({ ...this.data, gameById })
      if(error) this.errorText = error.message
    },
    async getConfig(url: string) {
      const [config, error] = await fetcher(`${url}/configuration`);
      this.pushLogText(`${timeNow()} GET .../configuration`)
      
      if(config) this.addData({ ...this.data, config })
      if(error) this.errorText = error.message
    },
    async getStatsNext(url: string) {
      const [next] = await fetcher(`${url}/nextGame`);
      this.pushLogText(`${timeNow()} GET .../nextGame`)
      const [stats] = await fetcher(`${url}/stats?limit=200 `);
      this.pushLogText(`${timeNow()} GET .../stats?limit=200`)
      if(next) {
        this.loading = false
        this.addData({ ...this.data, next, stats })
        this.addstartDelta({
          ...this.startDelta,
          last: next.startDelta,
          fake: next.startDelta - 2,
        });
      }
    },
    async getHistory(url: string) {
      const [history, error] = await fetcher(`${url}/history`);
      this.pushLogText(`${timeNow()} GET .../history`)
      
      if(history) this.addData({ ...this.data, history })
      if(error) this.errorText = error.message
    },
    timerInit() {
      this.pushLogText(`${timeNow()} Sleeping till next game`);
      this.timerRunning = true;
      this.startDelta.timer = 0;
    },
    addData(data: dataT) {
      this.data = data
    },
    addstartDelta(data: startDeltaT) {
      this.startDelta = data
    },
    addUrlText(data: string) {
      this.urlText = data
    },
    pushLogText(data: string) {
      this.logText.push(data)
    },
  }
})


export {useUrlData}