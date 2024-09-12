"use client";

import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="hover:underline w-fit text-tertiary hover:text-white"
    >
      &larr; Go to previous
    </button>
  );
};
