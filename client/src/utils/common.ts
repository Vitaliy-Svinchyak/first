export function createNumberSequence(n) {
  const res = [];
  for (let i = 0; i < n; i++) res.push(i);
  return res;
}

export function generateID() {
  return Math.random().toString();
}
