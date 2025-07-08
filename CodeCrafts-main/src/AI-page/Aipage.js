import React, { useState, useRef } from 'react';
import styles from './Aipage.module.css';
import GeminiResponse from './GeminiResponse';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('Response will appear here...');
  const [isLoading, setIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const videoRef = useRef(null);

  const API_KEY = "AIzaSyAi_cW6uiwQV1pfoc44rrYPgyHBCsvg6BI";
  const MODEL = "gemini-1.5-flash-latest";

  const getAIResponse = async () => {
    const trimmedPrompt = prompt.trim();
    
    if (!trimmedPrompt) {
      setResponse("Please enter a prompt!");
      return;
    }

    setIsLoading(true);
    setResponse("Thinking...");
    setShowResponse(false);
    
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: trimmedPrompt }]
            }]
          })
        }
      );

      const data = await response.json();
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
      
      if (videoRef.current) {
        videoRef.current.style.opacity = 0;
      }
      
      setTimeout(() => {
        setResponse(generatedText);
        setShowResponse(true);
      }, 500);
      
    } catch (error) {
      setResponse(`Error: ${error.message}`);
      setShowResponse(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getAIResponse();
      setPrompt('');
    }
  };

  return (
    <div className={styles.container}>
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        className={styles.backgroundVideo}
      >
        <source src="https://player.vimeo.com/progressive_redirect/playback/949935228/rendition/1440p/file.mp4?loc=external&signature=8117df7b15d42554e2778b3e4e0d0ab01332afcd659d97595b916ddca56f6d2d" type="video/mp4" />
      </video>
      
      <div className={styles.content}>
        <GeminiResponse 
          response={response} 
          isLoading={isLoading} 
          showResponse={showResponse} 
        />
        
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask Gemini anything..."
            className={styles.promptInput}
            disabled={isLoading}
          />
          <button
            onClick={getAIResponse}
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? '...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;