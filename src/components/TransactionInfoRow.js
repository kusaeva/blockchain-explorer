import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

const TransactionInfoRow = ({title, content}) => {
  return (
    <Grid>
      <Grid.Column width={4}>
        <Header as='h4'>{title}</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <p>{content}</p>
      </Grid.Column>
    </Grid>
  )
}

export default TransactionInfoRow
