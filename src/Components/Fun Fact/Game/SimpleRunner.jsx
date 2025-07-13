import React, { useRef, useEffect, useState } from 'react';

const SimpleRunnerResponsive = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size based on container width, maintain 2:1 ratio
    const resizeCanvas = () => {
      const containerWidth = canvas.parentElement.clientWidth;
      canvas.width = containerWidth;
      canvas.height = containerWidth / 2;
    };

    resizeCanvas();

    // Listen for window resize
    window.addEventListener('resize', () => {
      resizeCanvas();
    });

    let playerX = 50;
    let playerY = 0;
    let playerWidth = 40;
    let playerHeight = 50;
    let velocityY = 0;
    let gravity = 1.2;
    let isJumping = false;

    let obstacles = [];
    let obstacleSpeed = 6;

    let gameOver = false;

    let frameCount = 0;

    // Initialize playerY based on canvas height
    const resetPlayerY = () => {
      playerY = canvas.height - playerHeight - 10;
    };
    resetPlayerY();

    const createObstacle = () => {
      obstacles.push({
        x: canvas.width,
        y: canvas.height - 50,
        width: 20 + Math.random() * 30,
        height: 40,
      });
    };

    const handleKeyDown = (e) => {
      if ((e.code === 'Space' || e.code === 'ArrowUp') && !isJumping) {
        velocityY = -20;
        isJumping = true;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const gameLoop = () => {
      if (gameOver) {
        ctx.fillStyle = 'black';
        ctx.font = `${canvas.width / 15}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2);
        ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 50);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw player
      ctx.fillStyle = 'blue';
      ctx.fillRect(playerX, playerY, playerWidth, playerHeight);

      // Update player position
      velocityY += gravity;
      playerY += velocityY;

      if (playerY > canvas.height - playerHeight - 10) {
        playerY = canvas.height - playerHeight - 10;
        velocityY = 0;
        isJumping = false;
      }

      // Create obstacles every 90 frames (~1.5 seconds)
      if (frameCount % 90 === 0) {
        createObstacle();
      }

      // Move and draw obstacles
      ctx.fillStyle = 'red';
      obstacles.forEach((obs, i) => {
        obs.x -= obstacleSpeed;
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);

        // Collision detection
        if (
          playerX < obs.x + obs.width &&
          playerX + playerWidth > obs.x &&
          playerY < obs.y + obs.height &&
          playerY + playerHeight > obs.y
        ) {
          gameOver = true;
        }

        // Remove off-screen obstacles and increment score
        if (obs.x + obs.width < 0) {
          obstacles.splice(i, 1);
          setScore((prev) => prev + 1);
        }
      });

      // Draw score
      ctx.fillStyle = 'black';
      ctx.font = `${canvas.width / 30}px Arial`;
      ctx.textAlign = 'left';
      ctx.fillText(`Score: ${score}`, 10, 30);

      frameCount++;
      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [score]);

  return (
    <div className="flex flex-col items-center justify-center p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Simple Runner Game</h2>
      <p className="mb-2 text-center">Press Space or ↑ to jump over obstacles.</p>
      <canvas
        ref={canvasRef}
        className="border rounded-lg shadow w-full max-w-full"
        style={{ backgroundColor: 'white' }}
      />
    </div>
  );
};

export default SimpleRunnerResponsive;
