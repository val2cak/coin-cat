export const truncateName = (name: string, maxLength: number): string => {
  if (name.length > maxLength) {
    return name.substring(0, maxLength) + '...';
  }
  return name;
};
