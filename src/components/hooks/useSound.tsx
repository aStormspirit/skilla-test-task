import { useEffect } from "react";

const useSound = () => {
  const ctx = new AudioContext();
  let audio: any;

  useEffect(() => {
    fetch(
      `https://api.skilla.ru/mango/getRecord?record=MToxMDA2NzYxNToxNDMwMDM3NzExNzow&partnership_id=578`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer testtoken",
        },
      }
    )
      .then((data) => data.arrayBuffer())
      .then((arrayBuffer) => ctx.decodeAudioData(arrayBuffer))
      .then((decodedAudio) => {
        audio = decodedAudio;
      });
  }, []);

  function playback() {
    const playSound = ctx.createBufferSource();
    playSound.buffer = audio;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
  }

  return playback;
};

export default useSound;
