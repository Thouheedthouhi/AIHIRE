function SpeakingWave() {
  return (
    <div className="flex h-12 items-end gap-1">

      {[18, 28, 36, 26, 42, 30, 18, 34, 22].map(
        (height, index) => (
          <div
            key={index}
            className="animate-pulse rounded-full bg-violet-500"
            style={{
              width: "6px",
              height: `${height}px`,
              animationDelay: `${index * 0.1}s`,
            }}
          />
        )
      )}

    </div>
  );
}

export default SpeakingWave;