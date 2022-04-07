import { reactive } from 'vue'

export const store = reactive({
  red: 232,
  green: 80,
  blue: 91,
  happy: {
    red: 81,
    green: 196,
    blue: 211,
  },
  sad: {
    red: 176,
    green: 134,
    blue: 255,
  },
  surprised: {
    red: 10,
    green: 191,
    blue: 83,
  },
  stressed: {
    red: 255,
    green: 146,
    blue: 19,
  },
  feeling: null,
  on: false,
  //ip: "192.168.178.99",
  ip: "4.3.2.1",
  triggerWood: false,
})