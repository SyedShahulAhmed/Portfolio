import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import pdf from '../assets/Resume/resume.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Resume() {
  const [scale, setScale] = useState(getInitialScale());
  const [error, setError] = useState(null);

  // Function to determine initial scale based on window width
  function getInitialScale() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) return 0.45; // Mobile screens
    if (screenWidth <= 768) return 0.75; // Tablets
    return 1.2; // Larger screens
  }

  // Update scale dynamically on window resize
  useEffect(() => {
    const handleResize = () => setScale(getInitialScale());
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentLoadError = (err) => setError(err.message);

  return (
    <div className="flex  justify-center mb-10   shadow-lg mx-auto my-4">
      <div className="g rounded-lg border border-gray-300 w-full max-w-2xl md:max-w-3xl lg:max-w-5xl overflow-hidden bg-white shadow-lg">
        {error ? (
          <p className="text-red-500 text-center">Error loading PDF: {error}</p>
        ) : (
          <Document
            className="w-full  h-auto flex justify-center"
            file={pdf}
            onLoadError={onDocumentLoadError}
          >
            <Page
              pageNumber={1}
              scale={scale} // Dynamic scale for responsiveness
              renderTextLayer={false}
              className="overflow-hidden mx-auto" // Center the PDF on smaller screens
            />
          </Document>
        )}
      </div>
    </div>
  );
}

export default Resume;
