"use client";

export function Scanlines() {
  return (
    <div
      className="
        absolute inset-0 w-full h-full
        opacity-[0.03]
        pointer-events-none
        bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)]
        bg-size-[100%_4px]
      "
    />
  );
}
