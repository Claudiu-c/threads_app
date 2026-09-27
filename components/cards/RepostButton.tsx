"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { repostThread } from "@/lib/actions/thread.actions";
import { useRouter } from "next/navigation";

interface Props {
  threadId: string;
  currentUserId: string;
  repostedBy: string[];
}

export default function RepostButton({
  threadId,
  currentUserId,
  repostedBy,
}: Props) {
  const [reposted, setReposted] = useState(repostedBy.includes(currentUserId));
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleRepost() {
    startTransition(async () => {
      try {
        await repostThread(threadId);
        setReposted(true);
        window.location.reload();
      } catch (error) {
        console.error("Failed to repost:", error);
      }
    });
  }

  return (
    <button
      type="button"
      onClick={handleRepost}
      disabled={isPending || reposted}
      aria-label={reposted ? "Already reposted" : "Repost thread"}
      title={reposted ? "Reposted" : "Repost"}
      className="flex items-center gap-1 disabled:opacity-60"
    >
      <Image src="/assets/repost.svg" alt="" width={24} height={24} />
      {reposted && (
        <span className="text-small-regular text-gray-1">Reposted</span>
      )}
    </button>
  );
}
