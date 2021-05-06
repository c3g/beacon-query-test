// mostly helper functions to unpackage data

const datasetsTableHeader = [
  { id: "name", label: "Dataset", minWidth: 80 },
  { id: "variantCount", label: "Variant Count", minWidth: 40, align: "right" },
  { id: "sampleCount", label: "Sample Count", minWidth: 40, align: "right" },
  { id: "accessType", label: "Access Type", minWidth: 90 },
  { id: "assemblyId", label: "Assembly id", minWidth: 50, align: "left" },
  { id: "createdDateTime", label: "Created", minWidth: 100, align: "right" },
];

//   similar code repeated below for other cases, could be consolidated
const makeDatasetsTableRows = (rawDatasets) => {
  const rows = [];
  rawDatasets.forEach((dataset) => {
    rows.push({
      name: dataset.name || "-",
      variantCount: dataset.variantCount || "-",
      sampleCount: dataset.sampleCount || "-",
      accessType: dataset.info.accessType || "-",
      assemblyId: dataset.assemblyId || "-",
      createdDateTime: dataset.createDateTime || "-",
    });
  });
  return rows;
};

const biosamplesTableHeader = [
  { id: "biosampleId", label: "id", minWidth: 20 },

  { id: "description", label: "Description", minWidth: 20 },
  {
    id: "sampleOriginDetail",
    label: "Sample Origin",
    minWidth: 30,
    align: "right",
  },
  {
    id: "collectionDate",
    label: "Collection Date",
    minWidth: 40,
    align: "right",
  },
  {
    id: "subjectAgeAtCollection",
    label: "Subject Age (yrs)",
    minWidth: 20,
  },
];
// TO FIX, wrong categories XXXXXXXXXXXXXXXXXXXXXXXXXXX


const makeBiosampleTableRows = (rawBiosamples) => {
  console.log({ makeBiosamplesTableRowsInput: rawBiosamples });

  const rows = [];
  rawBiosamples.forEach((b) => {
    rows.push({
      biosampleId: b.biosampleId || "-",
      description: b.description || "-",
      sampleOriginDetail: b.sampleOriginDescriptors[0].sampleOriginDetail || "-",
      collectionDate: b.collectionDate || "-",
      subjectAgeAtCollection: ageInYears(b.subjectAgeAtCollection) || "-",
    });
  });
  // console.log({ rows: rows });
  return rows;
};

// TODO
const individualsTableHeader = [
  { id: "description", label: "Description", minWidth: 115 },
  {
    id: "sampleOriginDetail",
    label: "Sample Origin",
    minWidth: 120,
    align: "right",
  },
  {
    id: "collectionDate",
    label: "Collection Date",
    minWidth: 40,
    align: "right",
  },
  {
    id: "subjectAgeAtCollection",
    label: "Subject Age At Collection",
    minWidth: 90,
  },
];

// TODO
const makeIndividualTableRows = (rawIndividuals) => {
  console.log({ makeIndividualTableRowsInput: rawIndividuals });

  const rows = [];
  rawIndividuals.forEach((i) => {
    rows.push({
      description: i.name || "",
      sampleOriginDetail: i.variantCount || "",
      collectionDate: i.sampleCount || "",
      subjectAgeAtCollection: i.info.accessType || "",
    });
  });
  // console.log({ rows: rows });
  return rows;
};

// TODO: not sure what to do with this one yet
const variantsTableHeader = [];
const makeVariantsTableRows = () => {};

//   ------------------

// pie chart functions
const makeKeyValuePairsArray = (obj) => {
  return Object.entries(obj).map(([key, value]) => ({ key, value }));
};

// given, eg {"female":10,"male":7},
// return pie chart format: [{name: 'female', value: 10}, {name: 'male', value: 7}]
const formatForPieChart = (data) => {
  const arr = makeKeyValuePairsArray(data);
  return arr.map((e) => ({ name: e.key, value: e.value }));
};

// given an array of objects and selected keys,
// total the number of appearances of different values for each key
const getTotals = (arr, keys) => {
  let summaryObject = {};
  keys.forEach((key) => {
    summaryObject[key] = {};
  });
  arr.forEach((arrElement) => {
    for (const [key, value] of Object.entries(arrElement)) {
      if (keys.includes(key)) {
        if (value in summaryObject[key]) {
          summaryObject[key][value] += 1;
        } else {
          summaryObject[key][value] = 1;
        }
      }
    }
  });
  return summaryObject;
};

const ageInYears = (ISODurationAge) => {
  const regex = /(?:P)(.*)(?:Y)/;
  const result = regex.exec(ISODurationAge);
  return Number(result[1]);
};

// collect biosample "subjectAgeAtCollection" stats and sort into bins by decade
const subjectAgeStats = (results) => {
  // ugly but straightforward
  const ages = {
    0: 0,
    10: 0,
    20: 0,
    30: 0,
    40: 0,
    50: 0,
    60: 0,
    70: 0,
    80: 0,
    90: 0,
    100: 0,
  };
  results.forEach((e) => {
    let age, ageBin;
    const ISOAge = e.subjectAgeAtCollection;
    if (ISOAge != null) {
      age = ageInYears(ISOAge);
      ageBin = 10 * Math.floor(age / 10);
      if (ageBin > 100) {
        ageBin = 100;
      }
      ages[ageBin] += 1;
    }
  });
  return ages;
};

//   want eg { sexes:{'male": 32, 'female": 66}, ...}
const getCohortData = (results) => {
  console.log({ cohortresults: results });

  const cohortData = {};
  //only one cohort in test API, this will need exanding
  cohortData.sexes = {};

  // only one test event, also will need exanding
  const eventGenders = results[0].collectionEvents[0].eventGenders;
  if (eventGenders.availability) {
    eventGenders.distribution.forEach((e) => {
      cohortData.sexes[e.type.label] = e.count;
    });
  }
  // todo: more (age range, ethnicity, etc)
  console.log({ cohortdata: cohortData });

  return cohortData;
};

// I'm guessing there's a more systematic solution for this
const labelDictionary = {
  "PATO:0000384": "Male",
  "PATO:0000383": "Female",
  "HANCESTRO:0021": "Chinese",
  "NCIT:C42331": "African",
  "GAZ:00002641": "England",
  "GAZ:00002459": "United States of America",
};

module.exports = {
  datasetsTableHeader,
  makeDatasetsTableRows,
  biosamplesTableHeader,
  makeBiosampleTableRows,
  individualsTableHeader,
  makeIndividualTableRows,
  variantsTableHeader,
  makeVariantsTableRows,
  getTotals,
  getCohortData,
  formatForPieChart,
  subjectAgeStats,
};
