

export function shortAmount(num: number): string {
  return ('' + num).substring(0, 2) + 'K+';
}
