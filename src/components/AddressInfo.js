import React from 'react'
import { Grid, Card, Segment, Header, Label } from 'semantic-ui-react'
import InfoRow from './InfoRow.js'
import TokenBalanceInfo from './TokenBalanceInfo.js'

const AddressInfo = ({ address }) => {
  const withUnit = count => `${count} Ether`

  return (
    <React.Fragment>
      <Segment.Group>
        <Segment color='teal'>
          <Header>Address information</Header>
        </Segment>
        <InfoRow title={'Address'} content={address.address} />
        <InfoRow title={'Balance'} content={withUnit(address.ETH.balance)} />
        <InfoRow title={'Total In'} content={withUnit(address.ETH.totalIn)} />
        <InfoRow
          title={'Total Out'}
          content={withUnit(address.ETH.totalOut)}
        />
        <InfoRow title={'Transactions'} content={`${address.countTxs.toLocaleString()} txs`} />
      </Segment.Group>
      <Segment.Group>
        <Segment color='yellow'>
          <Header>Token balances</Header>
        </Segment>
        {address.tokens.map((token, key) => (
          <TokenBalanceInfo key={key} token={token} />
        ))}
      </Segment.Group>
    </React.Fragment>
  )
}

export default AddressInfo
