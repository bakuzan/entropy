export function entropyToWords(entropy: number) {
  if (entropy < 20) {
    return `very weak! Suicide is a viable life choice.`;
  } else if (entropy < 40) {
    return `weak! Pitiful, try again.`;
  } else if (entropy < 60) {
    return `passable! If you are happy with that you'll never improve.`;
  } else if (entropy < 80) {
    return `strong! Strength is good, but don't resuse it.`;
  } else if (entropy < 100) {
    return `very strong! As long as you can remember it!`;
  }

  return `uberstrong! Hackers kneel before your godliness`;
}
