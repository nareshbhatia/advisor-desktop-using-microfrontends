import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { PerformanceChart } from '../components/PerformanceChart';
import { SelectClientMessage } from '../components/SelectClientMessage';
import { useClientContext } from '../contexts/ClientContext';

const GetClient = gql`
  query GetClient($clientId: ID!) {
    client(clientId: $clientId) {
      id
      performance {
        name
        data {
          x
          y
        }
      }
    }
  }
`;

export function ClientPerformanceChartContainer() {
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

  return <PerformanceChart performance={data.client.performance} />;
}
