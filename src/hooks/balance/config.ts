import { WALLET_NAMES } from '@/constants'

const EVM_WALLETS_CONFIG = [WALLET_NAMES.MetaMask, WALLET_NAMES.WalletConnect, WALLET_NAMES.Coinbase, WALLET_NAMES.xDefi]

const SOL_WALLETS_CONFIG = [WALLET_NAMES.Phantom]

const COSMOS_WALLETS_CONFIG = [WALLET_NAMES.Keplr]

const UPDATE_DELAY_KEY = 'balance.updateDelay'

export { EVM_WALLETS_CONFIG, SOL_WALLETS_CONFIG, COSMOS_WALLETS_CONFIG, UPDATE_DELAY_KEY }
