import React, { useState, useEffect, useRef, useCallback } from "react";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;
  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const CombinedStarryBackground = React.memo(({
  children,
  starDensity = 0.0002,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 2000,
  maxDelay = 5000,
  starColor = "#33c2cc",
  trailColor = "#57db96",
  starWidth = 12,
  starHeight = 2,
  maxShootingStars = 2,
  className,
} = {}) => {
  const [stars, setStars] = useState([]);
  const canvasRef = useRef(null);
  const shootingStarsRef = useRef([]);
  const [, setTick] = useState(0);
  const animationFrameIdRef = useRef(null);
  const createTimeoutsRef = useRef([]);

  const generateStars = useCallback((width, height) => {
    const area = width * height;
    const numStars = Math.floor(area * starDensity);
    return Array.from({ length: numStars }, () => {
      const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.5,
        opacity: Math.random() * 0.15 + 0.10,
        twinkleSpeed: shouldTwinkle
          ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
          : null,
      };
    });
  }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]);

  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
      }
    };

    updateStars();

    let debounceTimer;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(updateStars, 150);
    });

    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      clearTimeout(debounceTimer);
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [generateStars]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        let opacity = star.opacity;
        if (star.twinkleSpeed !== null) {
          opacity = 0.05 + Math.abs(Math.sin(Date.now() * 0.001 / star.twinkleSpeed) * 0.15);
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [stars]);

  const createShootingStar = useCallback(() => {
    if (shootingStarsRef.current.length >= maxShootingStars) return;

    const { x, y, angle } = getRandomStartPoint();
    const newStar = {
      id: Date.now(),
      x,
      y,
      angle,
      scale: 1,
      speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
      distance: 0,
    };

    shootingStarsRef.current.push(newStar);
    setTick((t) => t + 1);

    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    const timeout = setTimeout(createShootingStar, randomDelay);
    createTimeoutsRef.current.push(timeout);
  }, [maxShootingStars, maxSpeed, minSpeed, maxDelay, minDelay]);

  useEffect(() => {
    createShootingStar();

    return () => {
      createTimeoutsRef.current.forEach(clearTimeout);
      createTimeoutsRef.current = [];
    };
  }, [createShootingStar]);

  useEffect(() => {
    const animate = () => {
      let updated = false;

      shootingStarsRef.current = shootingStarsRef.current.filter((star) => {
        const newX = star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
        const newY = star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
        const newDistance = star.distance + star.speed;
        const newScale = 1 + newDistance / 100;

        // Check for finite numbers; if invalid, remove star
        if (
          !Number.isFinite(newX) ||
          !Number.isFinite(newY) ||
          !Number.isFinite(newDistance) ||
          !Number.isFinite(newScale) ||
          newX < -50 ||
          newX > window.innerWidth + 50 ||
          newY < -50 ||
          newY > window.innerHeight + 50
        ) {
          updated = true;
          return false;
        }

        star.x = newX;
        star.y = newY;
        star.distance = newDistance;
        star.scale = newScale;

        updated = true;
        return true;
      });

      if (updated) setTick((t) => t + 1);

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div className={cn("fixed inset-0 w-full h-full", className)} style={{ background: "#030412" }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

      <svg
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
            <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {shootingStarsRef.current.map((star) => {
          const x = star.x;
          const y = star.y;
          const scale = star.scale;
          const angle = star.angle;

          if (
            !Number.isFinite(x) ||
            !Number.isFinite(y) ||
            !Number.isFinite(scale) ||
            !Number.isFinite(angle)
          ) {
            console.warn("Invalid star skipped:", star);
            return null;
          }

          const width = starWidth * scale;
          const height = starHeight;
          const transformX = x + width / 2;
          const transformY = y + height / 2;

          return (
            <rect
              key={star.id}
              x={x}
              y={y}
              width={width}
              height={height}
              fill="url(#gradient)"
              transform={`rotate(${angle}, ${transformX}, ${transformY})`}
            />
          );
        })}
      </svg>

      {/* Render children on top of background */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
});
