export const getFirstAndSecondLines = (str: string) => {
  const [firstLine, secondLine] = str.split('\n');
  return { firstLine, secondLine };
};
