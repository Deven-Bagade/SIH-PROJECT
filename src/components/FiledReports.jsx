import React, { useState, useEffect } from 'react';
import './FiledReports.css'; // Import CSS for styling

function FiledReports() {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    // Load saved report data from localStorage
    const savedReportData = localStorage.getItem('reportData');
    if (savedReportData) {
      try {
        const parsedData = JSON.parse(savedReportData);
        if (Array.isArray(parsedData)) {
          setReportData(parsedData);
        } else {
          console.error('Parsed data is not an array:', parsedData);
          setReportData([]);
        }
      } catch (error) {
        console.error('Error parsing localStorage data:', error);
        setReportData([]);
      }
    } else {
      setReportData([]);
    }
  }, []);

  return (
    <div className="filed-reports-container">
      <h1>Filed Reports</h1>
      {reportData.length === 0 ? (
        <p>No reports filed yet.</p>
      ) : (
        <ul className="report-list">
          {reportData.map((report, index) => (
            <li key={index} className="report-item">
              <h2>{report.name}</h2>
              <p><strong>Location:</strong> {report.location}</p>
              <p><strong>Category:</strong> {report.category}</p>
              <p><strong>Description:</strong> {report.description}</p>
              <p><strong>Contact Info:</strong> {report.contactInfo}</p>
              {report.imagePreview && (
                <div className="image-preview">
                  <img
                    src={report.imagePreview}
                    alt="Report"
                    style={{ maxWidth: '60vh', maxHeight: '60vh' }}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FiledReports;
