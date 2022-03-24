import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { NetWorthView } from '../components/NetWorthView';
import { SelectClientMessage } from '../components/SelectClientMessage';
import { useClientContext } from '../contexts/ClientContext';

const GetClient = gql`
  query GetClient($clientId: ID!) {
    client(clientId: $clientId) {
      id
      cashBalance
      investmentTotal
    }
  }
`;

export function ClientNetWorthContainer() {
  const { clientId } = useClientContext();
  const { loading, error, data } = useQuery(GetClient, {
    variables: {
      clientId,
    },
    skip: !clientId || clientId.length === 0,
  });

  if (!clientId) return <SelectClientMessage />;
  if (loading) return null;
  if (error) return null;

  return data.client ? (
    <NetWorthView
      cashBalance={data.client.cashBalance}
      investmentTotal={data.client.investmentTotal}
    />
  ) : null;
}
