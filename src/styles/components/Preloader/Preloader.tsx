import React, {useState, useEffect} from "react";
import './Preloader.scss';

interface PreloaderProps {
  onComplete: () => void;
}

const Prelosder: REact.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);  
  const [isCoMplete, setIsComplet] = useState(false);

//   useEffect
// }