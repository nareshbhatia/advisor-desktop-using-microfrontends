import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { SelectClientMessage, useClientContext } from 'ui-common';
import { ClientProfile } from '../components/ClientProfile';

const GetClient = gql`
  query GetClient($clientId: ID!) {
    client(clientId: $clientId) {
      id
      photo
      name
      email
      phone
      dob
      retirementAge
    }
  }
`;

export function ClientProfileContainer() {
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

  return <ClientProfile client={data.client} />;
}
