const parseGender = (gender) => {
  const isString = typeof gender === 'string';

  if (!isString) return;

  const isGender = ['male', 'female', 'other'].includes(gender);

  if (isGender) return gender;
};

const parseNumber = (number) => {
  const isString = typeof number === 'string';

  if (!isString) return;

  const parsedNumber = parseInt(number);

  if (Number.isNaN(parsedNumber)) return;

  return parsedNumber;
};

export const parseFilterParams = (query) => {
  const { gender, minAge, maxAge, minAvgMark, maxAvgMark } = query;

  const parsedGender = parseGender(gender);
  const parsedMinAge = parseNumber(minAge);
  const parsedMaxAge = parseNumber(maxAge);
  const parsedMinAvgMark = parseNumber(minAvgMark);
  const parsedMaxAvgMark = parseNumber(maxAvgMark);

  return {
    gender: parsedGender,
    minAge: parsedMinAge,
    maxAge: parsedMaxAge,
    minAvgMark: parsedMinAvgMark,
    maxAvgMark: parsedMaxAvgMark,
  };
};
