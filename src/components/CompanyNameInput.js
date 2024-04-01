import React from 'react';
import Form from 'react-bootstrap/Form';

const CompanyNameInput = ({ companyName, setCompanyName }) => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  };

  return (
    <Form className="mb-3" controlId="companyName" onSubmit={handleSubmit}>
      <Form.Control 
        type="text" 
        placeholder="Enter company name" 
        value={companyName} 
        onChange={(e) => setCompanyName(e.target.value)}
      />
    </Form>
  );
};

export default CompanyNameInput;
