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

    return (
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
                        <button onClick={previousTrack} className="bg-pink-600 text-white rounded-full p-2 hover:bg-pink-500 transition-colors duration-300">
                            上一曲
                        </button>
                        <button onClick={togglePlay} className="bg-pink-600 text-white rounded-full p-2 hover:bg-pink-500 transition-colors duration-300">
                            {isPlaying ? "暂停" : "播放"}
                        </button>
                        <button onClick={nextTrack} className="bg-pink-600 text-white rounded-full p-2 hover:bg-pink-500 transition-colors duration-300">
                            下一曲
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
                </div>
            </div>
        </section>
    );
};

export default MusicPlayer;
