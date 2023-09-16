export const uniqId = (): string => {
  return "id" + Math.random().toString(16).slice(2);
};
