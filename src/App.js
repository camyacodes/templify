import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CompanyNameInput from "./components/CompanyNameInput";
import TemplateSearchInput from "./components/TemplateSearchInput";
import TemplateDisplay from "./components/TemplateDisplay";
import SubjectLine from "./components/SubjectLine";
import OutlookButton from "./components/OutlookButton";
import { customizeTemplate } from "./components/utilities";
import templates from "./templates.json";

function App() {
  const [companyName, setCompanyName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [customizedText, setCustomizedText] = useState("");
  const [emailBody, setEmailBody] = useState("");

  const handleTemplateSelection = (template) => {
    if (template) {
      setSelectedTemplate(template);
      setSearchTerm("");
      const newText = companyName ? customizeTemplate(template.body, companyName) : template.body;
      setCustomizedText(newText);
      setEmailBody(newText);
    }
  };

  const clearTemplateSelection = () => {
    setSelectedTemplate(null);
    setCustomizedText("");
    setEmailBody("");
    setSearchTerm(""); // Optionally clear the search term as well
  };

  const handleEmailBodyChange = (newText) => {
    setEmailBody(newText);
  };

  <SubjectLine companyName={companyName} />

  return (
    <div className="App">
      <Header />
      <div className="app-container shadow">
        <CompanyNameInput companyName={companyName} setCompanyName={setCompanyName} />
        
        <TemplateSearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          templates={templates}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={handleTemplateSelection}
          clearSelectedTemplate={clearTemplateSelection}
        />
        <TemplateDisplay templateText={customizedText} onTextChange={handleEmailBodyChange} />
        <OutlookButton subject={`${companyName.toUpperCase()} - White Cap Credit Application - Additional Information Required`} body={emailBody} />
      </div>
    </div>
  );
}

export default App;
