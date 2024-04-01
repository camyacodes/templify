// OutlookButton.js
import React from 'react';

const OutlookButton = ({ subject, body }) => {
  // Encode subject and body to be URL-safe
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  // Create mailto link
  const mailtoLink = `mailto:?subject=${encodedSubject}&body=${encodedBody}`;

  return (
    <a href={mailtoLink} id="email_btn" className="btn mt-3" style={{ backgroundColor: '#ffcc33', color: '#000', borderColor: '#ffcc33' }}>Open in Outlook</a>
  );
};

export default OutlookButton;
