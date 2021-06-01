import React, { useCallback } from 'react'
import photos from './photos.json'
import Gallery from 'react-photo-gallery'

function App() {
  const openLightbox = useCallback((event, { photo, index }) => {
    window.open(photo.src, '_blank')
  }, [])

  return (
    <div>
      <Gallery photos={photos} margin={4} onClick={openLightbox} />
    </div>
  )
}

export default App
