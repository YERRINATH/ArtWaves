import React, { useState } from 'react';

const PdfNote = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [editorContent, setEditorContent] = useState('');

  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    setSelectedPdf(URL.createObjectURL(file));
  }

  const handleDownload = () => {
    // Create a Blob containing the notebook content
    const blob = new Blob([editorContent], { type: 'text/plain' });
    
    // Create a download link and trigger a click on it
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'notebook.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleSaveToMongo = () => {
    // Here you'll implement the logic to save the editorContent to MongoDB
    // You can use fetch or any library like Axios to make an HTTP request to your backend server which interacts with MongoDB
  
    // Example using fetch:
    fetch('save-notepad', {
      method: 'POST', // Assuming you're saving via POST request
      body: JSON.stringify({ content: editorContent }), // Sending editorContent as JSON
      headers: {
        'Content-Type': 'application/json' // Specifying the content type as JSON
      }
    })
    .then(response => {
      if (response.ok) {
        // Handle successful response
        console.log("Saved to MongoDB successfully:", editorContent);
      } else {
        // Handle errors
        console.error("Failed to save to MongoDB:", response.status);
      }
    })
    .catch(error => {
      // Handle network errors or other issues
      console.error("Error occurred while saving to MongoDB:", error);
    });
  }
  

  return (
    <div className="App" style={{padding:'90px'}}>
      {/* File Upload */}
      <input type="file" accept=".pdf" onChange={handlePdfUpload} />

      {/* Display PDF and Notebook */}
      {selectedPdf && (
        <div style={{ display: 'flex' }}>
          {/* PDF Viewer */}
          <div style={{ width: '50%', height: '100vh' }}>
            <embed src={selectedPdf} width="100%" height="100%" />
          </div>

          {/* Text Editor */}
          <div style={{ flex: 1, padding: '20px' }}>
            <h3>Notebook</h3>
            <textarea
              style={{ width: '100%', height: '70%', resize: 'none' }}
              value={editorContent}
              onChange={(e) => setEditorContent(e.target.value)}
            />
            
            {/* Download Button */}
            <button onClick={handleDownload}>Download Notebook</button>
            
            {/* Save Button */}
            <button onClick={handleSaveToMongo}>Save to MongoDB</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfNote;
