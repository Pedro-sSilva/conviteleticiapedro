import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));
  const isPast = targetDate.getTime() < new Date().getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer); // Limpa o intervalo quando o componente é desmontado
  }, [targetDate]);

  function calculateTimeLeft(targetDate: Date) {
    const difference = targetDate.getTime() - new Date().getTime();
    const absoluteDifference = Math.abs(difference);

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return {
      days: Math.floor(absoluteDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((absoluteDifference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((absoluteDifference / (1000 * 60)) % 60),
      seconds: Math.floor((absoluteDifference / 1000) % 60),
    };
  }

  return (
    <div className="flex space-x-4 text-center">
      <div>
        <p className="text-5xl font-bold">{timeLeft.days}</p>
        <p className="text-sm font-poppins">Dias</p>
      </div>
      <div>
        <p className="text-5xl font-bold">{timeLeft.hours}</p>
        <p className="text-sm font-poppins">Horas</p>
      </div>
      <div>
        <p className="text-5xl font-bold">{timeLeft.minutes}</p>
        <p className="text-sm font-poppins">Minutos</p>
      </div>
      <div>
        <p className="text-5xl font-bold">{timeLeft.seconds}</p>
        <p className="text-sm font-poppins">Segundos</p>
      </div>
    </div>
  );
};

export default CountdownTimer;