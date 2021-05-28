import React from 'react';
import PaginatedTable from './PaginatedTable';

const variantsTableColumns = [
  { dataIndex: 'id', title: 'id' },
  { dataIndex: 'position', title: 'Position' },
  { dataIndex: 'ref', title: 'ref' },
  { dataIndex: 'alt', title: 'alt' },
  { dataIndex: 'variantType', title: 'Variant Type' },
  { dataIndex: 'biosampleCount', title: 'Biosample count' },
];

const variantsTableRows = (variants) => {
  return variants.map((v) => {
    return {
      id: v.variant.variantId,
      position: `${v.variant.start}-${v.variant.end}`,
      ref: v.variant.ref || '-',
      alt: v.variant.alt || '-',
      variantType: v.variant.variantType,
      biosampleCount: v.datasetAlleleResponses.reduce(
        (sum, d) => sum + d.sampleCount || 0,
        0
      ),
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

// datasetAlleleResponses
// sum all sample counts

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
