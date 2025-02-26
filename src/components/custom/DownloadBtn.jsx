import React from "react";

const DownloadButton = ({ fileUrl, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="">
      <button
        onClick={handleDownload}
        className="flex items-center justify-center gap-2 p-2 bg-theme text-black rounded-full font-semibold hover:opacity-90"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM0 16V11H2V14H14V11H16V16H0Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default DownloadButton;
