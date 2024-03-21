"use client"
import React from 'react'

const DownloadCV = () => {
const handleDownload = () => {
    const cvFilePath = '/assets/resume.pdf';
    const link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#FFD700] via-[#8A2BE2] to-[#4169E1] hover:bg-slate-800 text-white mt-3'>
        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
    </button>
  );
}

export default DownloadCV
