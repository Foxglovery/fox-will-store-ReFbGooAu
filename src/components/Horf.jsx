import React from 'react';

const SendListComponent = ({ items }) => {
  // Check if the current device appears to be mobile.
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // Convert the list items into a single string with line breaks.
  const listString = items.join('\n');
  // URL-encode the content so it can be safely included in a URL.
  const encodedContent = encodeURIComponent(listString);

  // Decide which link to create based on the device type.
  const link = isMobile
    ? `sms:?body=${encodedContent}` // SMS protocol for mobile devices.
    : `mailto:?subject=Your%20List&body=${encodedContent}`; // Email protocol for desktops.

  return (
    <div>
      <h3>Your List:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* When clicked, this button will open the appropriate messaging app */}
      <a href={link}>
        <button>Send List</button>
      </a>
    </div>
  );
};

export default SendListComponent;
