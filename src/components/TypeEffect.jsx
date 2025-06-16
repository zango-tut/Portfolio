import { useEffect, useState } from 'react';

const TypingEffect = () => {
  const [headingText, setHeadingText] = useState('');
  const [paragraphText, setParagraphText] = useState('');
  const headingFullText = 'Mujahid Zafree';
  const paragraphFullText = 'Creative Developer & Digital Designer | Building immersive web experiences | Focused on performance, accessibility, and beautiful interfaces';
  
  const [headingIndex, setHeadingIndex] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect for heading
  useEffect(() => {
    if (headingIndex < headingFullText.length) {
      const timeout = setTimeout(() => {
        setHeadingText(prev => prev + headingFullText[headingIndex]);
        setHeadingIndex(prev => prev + 1);
      }, 150); // Adjust typing speed for heading

      return () => clearTimeout(timeout);
    } else {
      // Start typing paragraph after heading is done
      if (paragraphIndex < paragraphFullText.length) {
        const timeout = setTimeout(() => {
          setParagraphText(prev => prev + paragraphFullText[paragraphIndex]);
          setParagraphIndex(prev => prev + 1);
        }, 50); // Faster typing speed for paragraph

        return () => clearTimeout(timeout);
      }
    }
  }, [headingIndex, paragraphIndex]);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400 mb-4 md:mb-6`}>
        {headingText}
        <span className={showCursor ? 'opacity-100' : 'opacity-0'}>|</span>
      </h1>
      <p className={`text-lg md:text-xl text-gray-300 mb-6 md:mb-8`}>
        {paragraphText}
        <span className={showCursor && headingIndex === headingFullText.length ? 'opacity-100' : 'opacity-0'}>|</span>
      </p>
    </div>
  );
};

export default TypingEffect;