import React, { useState } from 'react';
import './CourseDetail.css';
import { useParams } from 'react-router-dom';

const courseDetails = {
  1: {
    title: "JavaScript Basics",
    videos: [
      {
        videoId: "sBzRwqWRuUE",
        notes: "Introduction to JavaScript: A versatile language for the web.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-tYsGcoQGklsok2p7_qm8lvSztxGVaYiAw&s",
      },
      {
        videoId: "1Rs2ND1ryYc",
        notes: "JavaScript ES6: Learn the new features of ES6.",
        image: "path/to/javascript-es6.jpg",
      },
    ],
  },
  2: {
    title: "React.js Fundamentals",
    videos: [
      {
        videoId: "dGcsHMXbSOA",
        notes: "React Introduction: Build UI components using React.",
        image: "path/to/react-detail.jpg",
      },
      {
        videoId: "hQAHSlTtcmI",
        notes: "Understanding React Hooks: Modern React state management.",
        image: "path/to/react-hooks.jpg",
      },
    ],
  },
  3: {
    title: "Node.js for Beginners",
    videos: [
      {
        videoId: "TlB_eWOl64w",
        notes: "Node.js Overview: JavaScript on the server-side.",
        image: "path/to/node-detail.jpg",
      },
      {
        videoId: "U8XF6wAMJNc",
        notes: "Express.js Basics: Build web applications with Node.js.",
        image: "path/to/express.jpg",
      },
    ],
  },
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseDetails[id];

  const [progress, setProgress] = useState(0);
  const [completedVideos, setCompletedVideos] = useState([]);
  const [selectedNotes, setSelectedNotes] = useState('');

  const handleVideoPlay = (index) => {
    if (!completedVideos.includes(index)) {
      const updatedCompletedVideos = [...completedVideos, index];
      setCompletedVideos(updatedCompletedVideos);
      const newProgress = (updatedCompletedVideos.length / course.videos.length) * 100;
      setProgress(newProgress);
      window.open(`https://www.youtube.com/watch?v=${course.videos[index].videoId}`, '_blank');
    }
  };

  const handleShowNotes = (notes) => {
    setSelectedNotes(notes);
  };

  return (
    <div className="course-detail">
      <h2 className="course-title">{course.title}</h2>

      <div className="progress-bar-container">
        <p>Progress: {Math.round(progress)}%</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="video-list">
        {course.videos.map((video, index) => (
          <div key={index} className="video-item">
            <img src={video.image} alt={video.notes} className="video-image" />
            <div className="video-info">
              <h3>{video.notes}</h3>
              <div className="button-container">
                <button
                  className="play-video-button"
                  onClick={() => handleVideoPlay(index)}
                >
                  Play Video
                </button>
                <button
                  className="notes-button"
                  onClick={() => handleShowNotes(video.notes)}
                >
                  Show Notes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedNotes && (
        <div className="notes-modal">
          <h4>Notes:</h4>
          <p>{selectedNotes}</p>
          <button onClick={() => setSelectedNotes('')}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
