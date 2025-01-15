'use client'
import React, { useState, useRef, useEffect } from 'react';

const musicFiles = [
    { name: 'Phosphor', file: 'Phosphor.mp3' },
    { name: 'FadingWind', file: 'FadingWind.mp3' },
    { name: 'SAPARTION', file: 'SAPARTION.mp3' },
];

const MusicPlayer: React.FC = () => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isHidden, setIsHidden] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const currentTrack = musicFiles[currentTrackIndex];

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleDurationChange = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    const nextTrack = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % musicFiles.length);
        setCurrentTime(0);
        setIsPlaying(false);
    };

    const previousTrack = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + musicFiles.length) % musicFiles.length);
        setCurrentTime(0);
        setIsPlaying(false);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = `/music/${currentTrack.file}`;
            audioRef.current.load();
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentTrack, isPlaying]);

    const toggleHidden = () => {
        setIsHidden(!isHidden);
    };

    return (
        <>
            {isHidden ? (
                <div
                    className="fixed left-4 bottom-4 w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                    onClick={toggleHidden}
                >
                    <span className="text-white">🎵</span>
                </div>
            ) : (
                <section className="fixed left-4 bottom-4 w-[300px] bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-xl p-4 shadow-lg">
                    <div className="p-4">
                        <audio
                            ref={audioRef}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleDurationChange}
                        />
                        <div className="flex flex-col items-center space-y-2">
                            <div className="flex items-center justify-center w-full mb-2">
                                <img src={`/music/${currentTrack.name}.jpg`} alt="封面" className="w-16 h-16 rounded-full shadow-md" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-white">{currentTrack.name}</h3>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <button onClick={previousTrack} className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-900 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M4.308 7h8.136c.307 0 .556.224.556.5s-.249.5-.556.5H4.308l4.096 4.096a.5.5 0 0 1-.707.707L3.454 8.561a1.5 1.5 0 0 1-.433-.925a.45.45 0 0 1 0-.272c.03-.338.175-.666.433-.925l4.243-4.242a.5.5 0 1 1 .707.707z"/></svg>
                                </button>
                                <button onClick={togglePlay} className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-900 transition-colors duration-300">
                                    {isPlaying ? (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M4 2.5c0-.276.232-.5.5-.5c.276 0 .5.229.5.5v11c0 .276-.232.5-.5.5a.503.503 0 0 1-.5-.5zm7 0c0-.276.232-.5.5-.5c.276 0 .5.229.5.5v11c0 .276-.232.5-.5.5a.503.503 0 0 1-.5-.5z"/></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M4.608 3.063C4.345 2.895 4 3.089 4 3.418v9.167c0 .329.345.523.608.356l7.2-4.584a.426.426 0 0 0 0-.711zm.538-.844l7.2 4.583a1.426 1.426 0 0 1 0 2.399l-7.2 4.583C4.21 14.38 3 13.696 3 12.585V3.418C3 2.307 4.21 1.624 5.146 2.22"/></svg>)}
                                </button>
                                <button onClick={nextTrack} className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-900 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M11.692 7H3.556C3.249 7 3 7.224 3 7.5s.249.5.556.5h8.136l-4.096 4.096a.5.5 0 0 0 .707.707l4.243-4.242c.258-.259.403-.587.433-.925a.45.45 0 0 0 0-.272a1.5 1.5 0 0 0-.433-.925L8.303 2.197a.5.5 0 1 0-.707.707z"/></svg>
                                </button>
                            </div>
                            <div className="flex items-center w-full">
                                <p className="text-gray-300 text-sm">{formatTime(currentTime)}</p>
                                <input
                                    type="range"
                                    min="0"
                                    max={duration}
                                    value={currentTime}
                                    onChange={(e) => {
                                        if (audioRef.current) {
                                            audioRef.current.currentTime = parseFloat(e.target.value);
                                            setCurrentTime(parseFloat(e.target.value));
                                        }
                                    }}
                                    className="range-input w-full mx-4 bg-gray-200 rounded-full h-2 focus:outline-none"
                                />
                                <p className="text-gray-300 text-sm">{formatTime(duration)}</p>
                            </div>
                            <button onClick={toggleHidden} className="absolute top-2 right-2 mt-2 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-900 bg-opacity-50 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M7.293 8L3.146 3.854a.5.5 0 1 1 .708-.708L8 7.293l4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708z"/></svg>
                            </button>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default MusicPlayer;
