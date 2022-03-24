import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { AssetAllocationChart } from '../components/AssetAllocationChart';
import { SelectClientMessage } from '../components/SelectClientMessage';
import { useClientContext } from '../contexts/ClientContext';

const GetClient = gql`
  query GetClient($clientId: ID!) {
    client(clientId: $clientId) {
      id
      assetAllocations {
        categoryId
        categoryName
        value
        percentage
        children {
          categoryId
          categoryName
          value
          percentage
        }
      }
    }
  }
`;

export function ClientAssetAllocationChartContainer() {
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

  return (
    <AssetAllocationChart sectorAllocations={data.client.assetAllocations} />
  );
}
