import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Drives a click-interactive "stage pipeline".
 *
 * Shared by:
 *   - the horizontal "Why Partner With Us" pipeline on the About page
 *   - the vertical "Workflow Stages" timeline on the Facility page
 *
 * Returns:
 *   activeStage  0-based index of the current stage (the fill bar reaches this node)
 *   glowKey      bumped on every activation so a keyed glow element can replay its
 *                animation even when the SAME node is clicked again
 *   goToStage(i) activate stage i (user click); briefly pauses autoplay so the
 *                manual pick isn't immediately overridden
 *
 * Autoplay (when enabled) advances 0 -> 1 -> ... -> last -> back to 0.
 */
export default function useStageProgress(
  count,
  { autoPlay = false, interval = 2800, resumeDelay = 7000 } = {}
) {
  const [activeStage, setActiveStage] = useState(0);
  const [glowKey, setGlowKey] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const resumeTimer = useRef(null);

  const goToStage = useCallback(
    (i) => {
      setActiveStage(((i % count) + count) % count);
      setGlowKey((k) => k + 1);
      if (autoPlay) {
        setPlaying(false);
        if (resumeTimer.current) clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => setPlaying(true), resumeDelay);
      }
    },
    [count, autoPlay, resumeDelay]
  );

  useEffect(() => {
    if (!playing) return undefined;
    const id = setInterval(() => {
      setActiveStage((s) => (s + 1) % count);
      setGlowKey((k) => k + 1);
    }, interval);
    return () => clearInterval(id);
  }, [playing, interval, count]);

  useEffect(
    () => () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    },
    []
  );

  return { activeStage, glowKey, goToStage, playing };
}
