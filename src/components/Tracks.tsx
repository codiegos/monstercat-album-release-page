import { useState, useRef } from 'react'
import { mediaIcons } from '../data/Icons'
import { PauseIcon, PlayIcon, ShareIcon } from './Icons'
import { tracks } from '../data/Tracks'

import Tooltip from './Tooltip'
interface AudioElement extends HTMLAudioElement {
  play: () => Promise<void>
  pause: () => Promise<void>
}
function Tracks (): JSX.Element {
  const audioRef = useRef<AudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayAudio = async (): Promise<void> => {
    if (audioRef.current === null) return
    isPlaying ? await audioRef.current.pause() : await audioRef.current.play()
    setIsPlaying(!isPlaying)
  }
  return (
    <section className='relative flex flex-col items-start px-48 xl:min-h-screen bg-primary'>
      <div className='flex flex-col justify-center w-full pr-16'>
        <div className='my-12 flex flex-col gap-12 whitespace-nowrap'>
          <h1 className='text-2xl tracking-widest md:text-5xl'>
            STREAM IT YOUR WAY
          </h1>
          <ul className='flex items-center'>
            {mediaIcons.map(mediaIcon => (
              <li key={mediaIcon.tooltip} className='ring-1 ring-white p-7 '>
                <a href='#' className='relative group flex justify-center'>
                  {mediaIcon.logo}
                  <Tooltip text={mediaIcon.tooltip} />
                </a>
              </li>
            ))}
          </ul>
          <h1 className='text-2xl tracking-widest md:text-5xl pt-12'>
            TRACK LIST
          </h1>
          <ol className='flex flex-col gap-10'>
            {tracks.map(track => (
              <li
                className='flex items-center justify-between gap-4'
                key={track.listNumber}
              >
                <div className='flex items-center justify-center gap-8'>
                  <span className='text-lg w-4'>{track.listNumber}</span>
                  <button onClick={handlePlayAudio}>
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                  </button>
                  <audio
                    controls={false}
                    ref={audioRef}
                    id={`audio ${track.listNumber}`}
                  >
                    <source src={'./example.mp3'} type='audio/mpeg' />
                    Your browser does not support the audio element.
                  </audio>
                  <div className='flex flex-col'>
                    <span className='text-lg'>{track.name}</span>
                    <span className='text-xs font-extralight tracking-widest'>
                      {track.artist}
                    </span>
                  </div>
                </div>
                <div className='flex items-center gap-20'>
                  <span className='text-lg'>{track.duration}</span>
                  <ShareIcon />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
export default Tracks
