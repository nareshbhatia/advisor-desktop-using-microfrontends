import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { AccountList } from '../components/AccountList';
import { SelectClientMessage } from '../components/SelectClientMessage';
import { useClientContext } from '../contexts/ClientContext';

const GetAccounts = gql`
  query GetAccounts($clientId: ID!) {
    accounts(clientId: $clientId) {
      id
      name
      accountNumber
      imageId
    }
  }
`;

export function ClientAccountsContainer() {
  const { clientId } = useClientContext();
  const { loading, error, data } = useQuery(GetAccounts, {
    variables: {
      clientId,
    },
    skip: !clientId || clientId.length === 0,
  });

  if (!clientId) return <SelectClientMessage />;
  if (loading) return null;
  if (error) return null;

  const handleAccountClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`Account ${e.currentTarget.id}`);
  };

  return <AccountList accounts={data.accounts} onClick={handleAccountClick} />;
}
