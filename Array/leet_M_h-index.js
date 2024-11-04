var hIndex = function (citations) {
  citations.sort((a, b) => a - b);
  const n = citations.length;
  let hIndex = 0;

  for (let i = 0; i < n; i++) {
    const current = citations[i];
    if (current === 0) continue;

    const remain = n - i;
    if (remain >= current) hIndex = Math.max(hIndex, current);
    else hIndex = Math.max(hIndex, remain);
  }
  return hIndex;
};
