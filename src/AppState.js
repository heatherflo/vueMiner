import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  power: 0,

  clickUpgrades: [
    new Upgrade({
      name: 'Pong Blade',
      qty: 0,
      multiplier: 1,
      price: 50,
      picture: '🏓'
    }),
  ]



})
