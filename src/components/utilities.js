// utilities.js

// Function to insert the company name into the template text.
export const customizeTemplate = (template, companyName) => {
    // Here you would replace a placeholder in your template with the company name.
    // Example placeholder in template: "Dear {{companyName}}"
    return template.replace(/{{companyName}}/g, companyName);
  };
 // Function to copy text to clipboard
export const copyToClipboard = (text) => {
  if (navigator.clipboard) { // Modern asynchronous clipboard API
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text successfully copied to clipboard');
      console.log("copied text:" + text)
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  } else { // Fallback for older browsers
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      console.log('Text successfully copied to clipboard');
      console.log("copied text:" + text)

    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }
};

  