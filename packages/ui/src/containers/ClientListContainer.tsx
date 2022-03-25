import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { ClientList } from '../components/ClientList';
import { useClientContext } from '../contexts/ClientContext';

const GetClients = gql`
  query GetClients {
    clients {
      id
      name
      photo
    }
  }
`;

export function ClientListContainer() {
  const { loading, error, data } = useQuery(GetClients);
  const { clientId, setClientId } = useClientContext();

  if (loading) return null;
  if (error) return null;

  const handleClientClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClientId(e.currentTarget.id);
  };

  return (
    <ClientList
      clients={data.clients}
      selectedClientId={clientId}
      onClick={handleClientClick}
    />
  );
}
