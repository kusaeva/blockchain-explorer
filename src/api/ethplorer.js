import { Ethplorer } from 'ethplorer-js'

const ethplorer = new Ethplorer()

export function getAddressInfo (address, resolve, reject) {
  ethplorer.getAddressInfo(address)
    .then(resolve, reject)
    .catch(reject)
}
export default ethplorer