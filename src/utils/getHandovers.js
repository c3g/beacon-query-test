export const getHandovers = (handovers) => {
  if (handovers == null) {
    return '-';
  }
  return handovers.map((h, index) => {
    return (
      <a href={h.url} target="_blank" rel="noopener noreferrer">
        <p>{h.note}</p>
      </a>
    );
  });
};
