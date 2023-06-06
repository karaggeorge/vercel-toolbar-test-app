'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const params = useSearchParams();
  const [hash, setHash] = useState<string>();

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  return (
    <div>
      <p>{params.toString()}</p>
      <span>{hash}</span>
    </div>
  );
}
