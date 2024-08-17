export default function fetchImages(q) {
  const params = new URLSearchParams({
    key: '45476779-a37d3eb685934422065bcfa30',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
