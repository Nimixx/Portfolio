import React from 'react';

export default function ProjectStatus() {
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-orange-400 animate-pulse"></div>
        <p className="text-orange-200 font-medium">Ve vývoji</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
        <p className="text-green-200 font-medium">Dokončeno</p>
      </div>
    </>
  );
}
