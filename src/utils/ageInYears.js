export const ageInYears = (ISODurationAge) => {
  if (ISODurationAge == null) {
    return null;
  }
  const regex = /(?:P)(.*)(?:Y)/;
  const result = regex.exec(ISODurationAge);
  return Number(result[1]);
};
