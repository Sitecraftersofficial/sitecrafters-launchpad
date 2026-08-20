// HERO BACKGROUND — edit everything about the hero visual here.
//
// kind:    "gradient" (no media) | "image" | "video"
// src:     for "image": any URL or /public path (e.g. "/hero.jpg")
//          for "video": an .mp4/.webm URL or /public path (e.g. "/hero.mp4")
// poster:  still image shown while a video loads
// overlay: 0 = no dark veil, 1 = fully dark. Raise it if text is hard to read.
// blur:    slight background blur in px (0 = off)
// position: CSS object-position, e.g. "center", "top", "50% 30%"

export const heroMedia = {
  kind: "gradient" as "gradient" | "image" | "video",
  src: "",
  poster: "",
  overlay: 0.55,
  blur: 0,
  position: "center",
} as const;

// Hero copy. Change the headline words and rotating phrases here.
export const heroCopy = {
  eyebrowFallback: "Kigali, Rwanda",
  headline: "Why be open 8 hours",
  headlineAccent: "when you can sell 24?",
  subline:
    "Your shop closes at 6pm. Your website doesn't. SiteCrafters builds business websites in Rwanda that answer questions, show your prices and take enquiries while you sleep — on a simple monthly plan.",
  // Rotating proof phrases under the headline (edit / add freely).
  rotating: [
    "Open at 2am.",
    "Answering on WhatsApp.",
    "Showing your prices.",
    "Taking enquiries.",
    "Working weekends.",
  ],
} as const;
