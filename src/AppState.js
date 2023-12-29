import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  power: 0,

  clickUpgrades: [
    new Upgrade({
      name: 'kitty-friend',
      qty: 0,
      multiplier: 1,
      price: 20,
      picture: '🐱'
    }),

    new Upgrade({
      name: 'mouse-friend',
      qty: 0,
      multiplier: 3,
      price: 50,
      picture: '🐭'
    }),

    new Upgrade({
      name: 'monkey-friend',
      qty: 0,
      multiplier: 5,
      price: 100,
      picture: '🙊'

    }),

  ],

  autoUpgrades: [
    new Upgrade({
      name: 'elephant-friend',
      qty: 0,
      multiplier: 10,
      price: 500,
      picture: '🐘'
    }),

    new Upgrade({
      name: 'giraffe-friend',
      qty: 0,
      multiplier: 20,
      price: 1000,
      picture: '🦒'
    })
  ]


})
