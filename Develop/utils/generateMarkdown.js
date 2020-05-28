function generateMarkdown(data) {
  return `

# **${data.project}**
### ${data.url}

## **Description:**
${data.description}

## **Table of Contents**

### - [Installation](#Installation)

### - [Usage](#Usage)

### - [License](#License)

### - [Contribute](#Contribute)

### - [Tests](#Tests)

### **Installation**
This application will need to run the following commands run to install dependencies: ${data.dependencies}

### **Usage**
${data.usage}

### **License**
This application will require the following Licenses: ${data.licence}

### **Contribute**
If you would like to contribute to this application please note the following: ${data.contributing}

### **Tests**
This application will need the following commands run to test the application: ${data.tests}

**If you have any questions about this project please contact ${data.username} via email at: ${data.email}.**

`;
}

module.exports = generateMarkdown;
