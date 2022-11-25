import React from 'react';

const PodcastPlayer = ({file}) => {
  return (
    <div className='player-bottom'>
        <audio className='audioplayer' src={file} controls></audio>
    </div>
  )
}

export default PodcastPlayer;