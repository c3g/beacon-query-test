import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import { Form, Button, Input, Select } from "antd";
import { chromosomes, bases } from "../constants";
import { apiPaginationLimit } from "../constants";

const QueryBiosamples = ({ queryData, setQueryData, setApiRoute }) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const handleChange = (data) => {
    // Todo: form verification
  };

  const handleSubmit = (formData) => {
    console.log({ submittedForm: formData });
    setQueryData({
      ...formData,
      includeDatasetResponses: "ALL",
      limit: apiPaginationLimit,
    });
    setApiRoute("/biosamples");
    setHasSubmitted(true);
  };

  const exampleSearch = {
    assemblyId: "GRCh37.p1",
    referenceName: "MT",
    start: "1",
    end: "16569",
  };

  return (
    <>
      {hasSubmitted ? (
        <Redirect push to="/query-results" />
      ) : (
        <Form onFinish={handleSubmit} initialValues={exampleSearch}>
          <Form.Item label="Genome Assembly" name="assemblyId">
            <Select style={{ width: 150 }}>
              {/* <Select.Option value="GRCh37">GRCh37</Select.Option> */}
              <Select.Option value="GRCh37.p1">GRCh37.p1</Select.Option>
              {/* <Select.Option value="GRCh38">GRCh38</Select.Option> */}
            </Select>
          </Form.Item>
          <Form.Item label="Chromosome" name="referenceName">
            <Select showSearch style={{ width: 150 }} onChange={handleChange}>
              {chromosomes.map((chr) => (
                <Select.Option key={chr} value={chr}>
                  {chr}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Reference Base" name="referenceBases">
            <Select showSearch style={{ width: 150 }} onChange={handleChange}>
              {bases.map((b) => (
                <Select.Option key={b} value={b}>
                  {b}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Alternate Base" name="alternateBases">
            <Select showSearch style={{ width: 150 }} onChange={handleChange}>
              {bases.map((b) => (
                <Select.Option key={b} value={b}>
                  {b}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Start" name="start">
            <Input style={{ width: 150 }} onChange={handleChange} />
          </Form.Item>
          <Form.Item label="End" name="end">
            <Input style={{ width: 150 }} onChange={handleChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Query Biosamples
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default QueryBiosamples;

// available data:
// subjectAgeAtCollection
// weightKg
// heightCm
// bloodType (only O+ and A+)
// geographicOrigin
// ethnicity

// no phenotypicFeatures, no diseases,
// to get phenopackets format:
// requestedSchema: ga4gh-phenopacket-biosample-v1.0
