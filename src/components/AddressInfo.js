import React from 'react'
import { Grid, Card, Segment, Header, Label } from 'semantic-ui-react'
import InfoRow from './InfoRow.js'

const PriceDiff = ({ diff, label }) => {
  if (!diff) return null
  return (
    <Label
      color={diff > 0 ? 'green' : 'red'}
    >{`${diff.toFixed(2)}% ${label}`}</Label>
  )
}

const TokenInfo = ({ token }) => {
  const amount = token.balance / Math.pow(10, token.tokenInfo.decimals)
  const price = token.tokenInfo.price
  const fiatAmount = (amount * price.rate).toFixed(2)
  const totalSupply = `${(token.tokenInfo.totalSupply / Math.pow(10, token.tokenInfo.decimals)).toLocaleString()} ${token.tokenInfo.symbol}` 
  const content = (
    <div>
      <p>{`${amount} ${token.tokenInfo.symbol}`}</p>
      <p>{price && `${fiatAmount} ${token.tokenInfo.price.currency}`}</p>
      {price && (
        <Label.Group size='tiny'>
        <PriceDiff diff={token.tokenInfo.price.diff} label='24h' />
        <PriceDiff diff={token.tokenInfo.price.diff7d} label='7d' />
        <PriceDiff diff={token.tokenInfo.price.diff30d} label='30d' />
      </Label.Group>
      )}
    </div>
  )
  const headerContent = price ? (<Label.Group size='small'>
  <PriceDiff diff={token.tokenInfo.price.diff} label='24h' />
  <PriceDiff diff={token.tokenInfo.price.diff7d} label='7d' />
  <PriceDiff diff={token.tokenInfo.price.diff30d} label='30d' />
</Label.Group>) : null
  return (
  <Segment.Group>
    <InfoRow h='h3' title={`${token.tokenInfo.name} (${token.tokenInfo.symbol})`} content={headerContent} />
    <InfoRow title='Balance' content={`${amount} ${token.tokenInfo.symbol}`} />
    {price && <InfoRow title='Fiat Balance' content={`${fiatAmount} ${token.tokenInfo.price.currency}`} />}
    {price && <InfoRow title='Price' content={`${(price.rate*1).toFixed(2)} ${price.currency}`} />}
    <InfoRow title='Contract' content={token.tokenInfo.address} />
    <InfoRow title='Owner' content={token.tokenInfo.owner} />
    <InfoRow title='Holders count' content={token.tokenInfo.holdersCount} />
    <InfoRow title='Total supply' content={totalSupply} />
  </Segment.Group>
  )
}

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
        <InfoRow title={'Transactions'} content={`${address.countTxs} txs`} />
      </Segment.Group>
      <Segment.Group>
        <Segment color='yellow'>
          <Header>Token balances</Header>
        </Segment>
        {address.tokens.map((token, key) => (
          <TokenInfo key={key} token={token} />
        ))}
      </Segment.Group>

    </React.Fragment>
  )
}

export default AddressInfo
