'use client';

import { useRef, useEffect } from 'react';

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const size = 800;
    canvas.width = size;
    canvas.height = size;

    // Background gradient (vibrant red to orange)
    const bgGradient = ctx.createLinearGradient(0, 0, size, size);
    bgGradient.addColorStop(0, '#FF0000');
    bgGradient.addColorStop(0.5, '#FF4444');
    bgGradient.addColorStop(1, '#FF6B35');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, size, size);

    // Play button circle (white)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, 280, 0, Math.PI * 2);
    ctx.fill();

    // Play triangle (red)
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.moveTo(320, 260);
    ctx.lineTo(320, 540);
    ctx.lineTo(540, 400);
    ctx.closePath();
    ctx.fill();

    // Text styling
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // "love2watch" text with shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;

    // Main text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 72px Arial, sans-serif';
    ctx.fillText('love2watch', size / 2, 680);

    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Heart accent
    ctx.fillStyle = '#FF1744';
    ctx.font = 'bold 52px Arial, sans-serif';
    ctx.fillText('❤', size / 2 - 180, 120);

    // Eye accent
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.fillText('👁', size / 2 + 180, 120);

  }, []);

  const downloadLogo = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'love2watch-logo.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>love2watch YouTube Channel Logo</h1>
        <div style={styles.canvasContainer}>
          <canvas ref={canvasRef} style={styles.canvas} />
        </div>
        <button onClick={downloadLogo} style={styles.button}>
          Download Logo (PNG)
        </button>
        <p style={styles.description}>
          A vibrant YouTube-style logo for your channel where people will love to watch!
        </p>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  container: {
    textAlign: 'center',
    maxWidth: '900px',
  },
  title: {
    color: '#fff',
    fontSize: '2.5rem',
    marginBottom: '30px',
    fontWeight: 'bold',
  },
  canvasContainer: {
    display: 'inline-block',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
    marginBottom: '30px',
  },
  canvas: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  button: {
    backgroundColor: '#FF0000',
    color: '#fff',
    border: 'none',
    padding: '15px 40px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 0, 0, 0.4)',
  },
  description: {
    color: '#aaa',
    fontSize: '1rem',
    marginTop: '20px',
    lineHeight: '1.6',
  },
};
