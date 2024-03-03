import React, { useState } from "react";
import useSound from "use-sound";
import { Button } from "react-bootstrap";

const Canto = ({ urlSonido }) => {
  const [play, { stop }] = useSound(urlSonido);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (isPlaying) {
      // Detener la reproducción si ya está reproduciéndose
      stop();
    } else {
      // Iniciar la reproducción si no está reproduciéndose
      play();
    }

    // Actualizar el estado
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Button onClick={handleClick}>{isPlaying ? "Detener" : "Canto"}</Button>
    </>
  );
};

export default Canto;
