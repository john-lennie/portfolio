"use client";
import * as React from "react";

function useIsRadixOpen(anchorRef: React.RefObject<Element>) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const anchor = anchorRef.current;
    if (!anchor) return;
    const content = anchor.closest("[data-state]");
    if (!content) return;

    const update = () => setOpen(content.getAttribute("data-state") === "open");
    update();
    const mo = new MutationObserver(update);
    mo.observe(content, { attributes: true, attributeFilter: ["data-state"] });
    return () => mo.disconnect();
  }, []);
  return open;
}

type Source = { src: string; type?: string };

export function DeferredVideo({
  src,
  sources,
  poster,
  unloadOnClose = false,
  ...props
}: {
  src?: string;
  sources?: Source[];
  poster?: string;
  unloadOnClose?: boolean;
} & React.VideoHTMLAttributes<HTMLVideoElement>) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const isOpen = useIsRadixOpen(videoRef);
  const [hasLoadedOnce, setHasLoadedOnce] = React.useState(false);
  const shouldLoad = isOpen || hasLoadedOnce;

  React.useEffect(() => {
    if (isOpen) {
      setHasLoadedOnce(true);
    } else if (unloadOnClose && videoRef.current) {
      const v = videoRef.current;
      v.pause();
      v.removeAttribute("src"); // safe reset
      v.load();
      setHasLoadedOnce(false);
    }
  }, [isOpen, unloadOnClose]);

  return (
    <video ref={videoRef} preload="none" poster={poster} {...props}>
      {shouldLoad &&
        (sources?.length
          ? sources.map((s) => <source key={s.src} src={s.src} type={s.type} />)
          : src
          ? <source src={src} type="video/mp4" />
          : null)}
    </video>
  );
}
