export const numbers = Array(12).fill(1).map((_, i) => i + 1);

export const exercises = [ "higher", "one-more", "one-less", "between", "add", "subtract" ]

export const shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

export const synthSpeak = (text, mood = "default") => {
  speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)

  utterance.rate = 1.2

  if (mood === "happy") {
    utterance.rate = 1.3
    utterance.pitch = 1.5
  }

  if (mood === "sad") {
    utterance.rate = 1.4
    utterance.pitch = 0.7
  }

  speechSynthesis.speak(utterance)
}

export const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}