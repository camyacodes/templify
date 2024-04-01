import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { TiDelete } from 'react-icons/ti';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Import the arrow icons

const TemplateSearchInput = ({ searchTerm, setSearchTerm, templates, setSelectedTemplate, selectedTemplate, clearSelectedTemplate }) => {
  const [showDropdown, setShowDropdown] = useState(false); // Initialize showDropdown to false

  const filterTemplates = (term) => templates.filter(template =>
    template.title.toLowerCase().includes(term.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true); // Show dropdown when typing in the search input
  };

  const handleSelect = (template) => {
    setSelectedTemplate(template);
    setSearchTerm('');
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle the dropdown state
  };

  const badgeStyle = {
    backgroundColor: '#ffcc33',
    cursor: 'pointer',
    height: '38px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 12px',
    borderRadius: '20px',
    width: '100%', // Ensure badge takes full width
  };

  // Style to make text bold
  const boldTextStyle = {
    fontWeight: 'bold',
  };

  return (
    <div className="mb-3">
      {selectedTemplate ? (
        <div style={badgeStyle}>
          <span style={boldTextStyle}>{selectedTemplate.title}</span> {/* Apply boldTextStyle */}
          <TiDelete onClick={clearSelectedTemplate} style={{ color: '#000', marginLeft: '10px', cursor: 'pointer' }} />
        </div>
      ) : (
        <>
          <div style={{ position: 'relative' }}>
            <Form.Control
              type="text"
              placeholder="Search Templates"
              value={searchTerm}
              onChange={handleChange}
            />
            {showDropdown ? (
              <FaAngleUp
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
                onClick={toggleDropdown}
              />
            ) : (
              <FaAngleDown
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
                onClick={toggleDropdown}
              />
            )}
          </div>
          {showDropdown && ( // Only show the dropdown menu when showDropdown is true
            <ListGroup style={{ maxHeight: '8rem', overflowY: 'scroll' }}>
              {filterTemplates(searchTerm).map((template) => (
                <ListGroup.Item key={template.id} action onClick={() => handleSelect(template)}>
                  <span style={boldTextStyle}>{template.title}</span> {/* Apply boldTextStyle to each template title */}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </>
      )}
    </div>
  );
};

export default TemplateSearchInput;
