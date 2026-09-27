"use client";

import Image from "next/image";
import { useState } from "react";

export default function ShareButton({ threadId }: { threadId: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = `${window.location.origin}/thread/${threadId}`;

    try {
      if (navigator.share) {
        await navigator.share({ title: "Thread", url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        console.error("Could not share thread:", error);
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Share thread"
      title={copied ? "Link copied!" : "Share thread"}
      className="flex items-center gap-1"
    >
      <Image src="/assets/share.svg" alt="" width={24} height={24} />
      {copied && (
        <span className="text-small-regular text-gray-1">Copied!</span>
      )}
    </button>
  );
}
