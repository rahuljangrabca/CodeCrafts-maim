import React, { useEffect, useRef, useState } from 'react';
import styles from './GeminiResponse.module.css';

const GeminiResponse = ({ response, isLoading, showResponse }) => {
  const [displayedResponse, setDisplayedResponse] = useState('');
  const responseRef = useRef(null);

  useEffect(() => {
    if (response === 'Thinking...') {
      setDisplayedResponse(response);
      return;
    }

    let currentIndex = 0;
    const responseWords = response.split(' ');
    setDisplayedResponse('');

    const intervalId = setInterval(() => {
      if (currentIndex < responseWords.length) {
        setDisplayedResponse(prev => 
          prev ? `${prev} ${responseWords[currentIndex]}` : responseWords[currentIndex]
        );
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [response]);

  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollTop = responseRef.current.scrollHeight;
    }
  }, [displayedResponse]);

  return (
    <div 
      ref={responseRef}
      className={`${styles.response} ${isLoading ? styles.typing : ''} ${
        showResponse ? styles.visible : ''
      }`}
    >
      {displayedResponse || '\u00A0'}
    </div>
  );
};

export default GeminiResponse;