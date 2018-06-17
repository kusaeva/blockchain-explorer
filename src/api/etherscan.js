import etherscanApi from 'etherscan-api'
import { config } from '../config'

const api = etherscanApi.init(config.etherscanApiKey)

export function getTokenTransfers (address, resolve, reject) {
  console.log('getTokenTransfers')
  api.account.tokentx(address, null, 1, 'latest', 'desc')
    .then(resolve, reject)
    .catch(reject)
}

export function getTransactions (address, resolve, reject) {
  api.account.txlist(address, 1, 'latest', 'desc')
    .then(resolve, reject)
    .catch(reject)
}

export function getMinedBlocks (address, resolve, reject) {
  api.account.getminedblocks(address)
    .then(resolve, reject)
    .catch(reject)
}