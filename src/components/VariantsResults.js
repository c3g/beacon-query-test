import React from 'react';
import PaginatedTable from './PaginatedTable';
import styled from 'styled-components';

const variantsTableColumns = [
  { dataIndex: 'id', title: 'id' },
  { dataIndex: 'position', title: 'Position' },
  { dataIndex: 'ref', title: 'ref' },
  { dataIndex: 'alt', title: 'alt' },
  { dataIndex: 'variantType', title: 'Variant Type' },
  {
    dataIndex: 'biosamples',
    title: 'Biosamples',
    render: (b) => <BiosamplesLinks>{biosamplesLinks(b)}</BiosamplesLinks>,
  },
];

function biosamplesLinks(bsamples) {
  if (bsamples == null) {
    return '-';
  }
  const links = bsamples.map((b) => {
    return (
      <a target="_blank" rel="noopener noreferrer">
        <p>
          {b.datasetId} ({b.sampleCount})
        </p>
      </a>
    );
  });
  return links;
}
const BiosamplesLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  > a p {
    margin: 0;
    padding: 0;
  }
`;

const variantsTableRows = (variants) => {
  return variants.map((v) => {
    return {
      id: v.variant.variantId,
      position: `${v.variant.start}-${v.variant.end}`,
      ref: v.variant.ref || '-',
      alt: v.variant.alt || '-',
      variantType: v.variant.variantType,
      biosamples: getBiosamples(v),
    };
  });
};

const VariantsResults = ({ queryResults }) => {
  return (
    <PaginatedTable
      rows={variantsTableRows(queryResults.results)}
      columns={variantsTableColumns}
    />
  );
};

function getBiosamples(variant) {
  const datasets = variant.datasetAlleleResponses;
  if (Object.keys(datasets).length === 0) {
    return [];
  }
  const biosamples = [];
  datasets.forEach((d) => {
    if (d.exists) {
      biosamples.push({
        datasetId: d.datasetId,
        sampleCount: d.sampleCount,
      });
    }
  });
  return biosamples;
}

//   biosampleCount: v.datasetAlleleResponses.reduce(
//     (sum, d) => sum + d.sampleCount || 0,
//     0
//   )

export default VariantsResults;

// id  position  Alleles(ref/alt)  variantType  biosampleCount

//   progenetix has id linking to variant details (but example detail is just  "9:21548871-21999595:DEL")
//   to get biosample data for variant":
//  set 'includeDatasetResponses' to 'ALL'
// each variant will have "variant"(json), "variantAnnotations"(json), "handovers"(array), "datasetAlleleResponses"(array)

// then each variant has an accompanying "datasetAlleleResponses" array, one object from each dataset
// each dataset has an "info" key, typically either null or, eg: "info": { "matchingSampleCount": 3 },
// or simply "sampleCount" (either null or int)

// which chromosome is the variant on? This isn't given in the response, unless I'm supposed to infer
// it from the coordinates. It could be inferred from "refseqId" but this is always null (h3Africa beacon is the same)
