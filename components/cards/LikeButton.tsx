"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { toggleThreadLike } from "@/lib/actions/thread.actions";

interface Props {
  threadId: string;
  initialLikes: string[];
  currentUserId: string;
}

export default function LikeButton({
  threadId,
  initialLikes,
  currentUserId,
}: Props) {
  const [liked, setLiked] = useState(initialLikes.includes(currentUserId));
  const [count, setCount] = useState(initialLikes.length);
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      try {
        const result = await toggleThreadLike(threadId);
        setLiked(result.liked);
        setCount(result.count);
      } catch (error) {
        console.error("Failed to update like:", error);
      }
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
      aria-label={liked ? "Unlike thread" : "Like thread"}
      aria-pressed={liked}
      className="flex items-center gap-1 disabled:opacity-50"
    >
      <Image
        src={liked ? "/assets/heart-filled.svg" : "/assets/heart-gray.svg"}
        alt=""
        width={24}
        height={24}
      />
      {count > 0 && (
        <span className="text-small-regular text-gray-1">{count}</span>
      )}
    </button>
  );
}
