import React, { useState, useEffect } from 'react';

const TemplateDisplay = ({ templateText, onTextChange }) => {
  const [editableText, setEditableText] = useState(templateText);

  useEffect(() => {
    setEditableText(templateText); // This ensures the editableText updates when the templateText prop changes.
  }, [templateText]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setEditableText(newText); // Update the local state with the new text.
    onTextChange(newText); // Pass the new text up to the parent component.
  };

  return (
    <div className="template-display mb-3">
      <textarea
        className="form-control"
        value={editableText}
        onChange={handleTextChange} // This will now trigger the local state update and call the passed in onTextChange prop function.
        rows="10"
      ></textarea>
    </div>
  );
};

export default TemplateDisplay;
