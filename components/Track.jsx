import React from 'react'

const Track = ({id}) => {
    return (
        <>
            <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`}
                width="100%"
                height="100"
                frameBorder="0"
                allowFullScreen
                allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </>
    )
}

export default Track;