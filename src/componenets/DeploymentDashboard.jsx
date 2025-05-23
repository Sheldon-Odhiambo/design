import React from 'react';
import '../styles/DeploymentDashboard.css';

const StatusBox = ({ label, count }) => (
  <div className="status-box">
    <div className="status-count">{count}</div>
    <div className="status-label">{label}</div>
  </div>
);

const PlatformSection = ({ platform, version, date }) => (
  <div className="section">
    <div className="section-header">
      <strong>{platform}</strong> update status<br />
      Latest: {version} | Posted: {date}
    </div>
    <div className="status-container">
      <StatusBox label="Up to date" count={1000} />
      <StatusBox label="Failed" count={50} />
      <StatusBox label="Waiting" count={500} />
      <StatusBox label="Downloading" count={50} />
      <StatusBox label="Installing" count={50} />
      <StatusBox label="Not assigned" count={50} />
      <StatusBox label="Total" count={1700} />
    </div>
  </div>
);

export default function DeploymentDashboard() {
  return (
    <div className="wrapper">
      <h2>Overall deployment status for each platform</h2>
      <PlatformSection platform="macOS" version="macOS 15.2 (ABCD1234)" date="17 November 2024" />
      <PlatformSection platform="iOS" version="iOS 18.2 (ABCD1234)" date="17 November 2024" />
      <PlatformSection platform="iPadOS" version="iPadOS 18.2 (ABCD1234)" date="17 November 2024" />
    </div>
  );
}
