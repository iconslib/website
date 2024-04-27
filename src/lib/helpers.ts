export function humanizeClassCase(inputString: string) {
  const words = inputString.split(/(?=[A-Z])/);
  return words.join(' ').toLowerCase();
}
