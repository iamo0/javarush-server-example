function clamp(val, min, max) {
  return Math.max(Math.min(val, max), min);
}

module.exports = { clamp };
