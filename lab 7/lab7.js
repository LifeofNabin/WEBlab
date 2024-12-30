// Function to convert JSON text to JavaScript object
function convertJsonToObject() {
    let jsonText = document.getElementById('jsonInput').value;
    try {
        let jsonObject = JSON.parse(jsonText);
        document.getElementById('jsonObjectOutput').textContent = JSON.stringify(jsonObject, null, 2);
    } catch (error) {
        document.getElementById('jsonObjectOutput').textContent = "Invalid JSON format!";
    }
}

// Function to convert JSON result into Date
function convertJsonToDate() {
    let jsonText = document.getElementById('jsonDateInput').value;
    try {
        let jsonObj = JSON.parse(jsonText);
        if (jsonObj.date) {
            let date = new Date(jsonObj.date);
            document.getElementById('jsonDateOutput').textContent = date.toString();
        } else {
            document.getElementById('jsonDateOutput').textContent = "Date field not found in JSON.";
        }
    } catch (error) {
        document.getElementById('jsonDateOutput').textContent = "Invalid JSON format!";
    }
}

// Function to convert JSON to CSV
function convertJsonToCsv() {
    let jsonText = document.getElementById('jsonCsvInput').value;
    try {
        let jsonObj = JSON.parse(jsonText);
        let keys = Object.keys(jsonObj[0]);
        let csv = keys.join(",") + "\n";
        jsonObj.forEach(item => {
            csv += keys.map(key => item[key]).join(",") + "\n";
        });
        document.getElementById('csvOutput').textContent = csv;
    } catch (error) {
        document.getElementById('csvOutput').textContent = "Invalid JSON format!";
    }
}

// Function to convert CSV to JSON
function convertCsvToJson() {
    let csvText = document.getElementById('csvJsonInput').value;
    let lines = csvText.split("\n");
    let headers = lines[0].split(",");
    let jsonArray = lines.slice(1).map(line => {
        let values = line.split(",");
        let obj = {};
        values.forEach((value, index) => {
            obj[headers[index]] = value;
        });
        return obj;
    });
    document.getElementById('jsonFromCsvOutput').textContent = JSON.stringify(jsonArray, null, 2);
}

// Function to create hash from string
function createHash() {
    let inputText = document.getElementById('hashInput').value;
    const crypto = require('crypto');
    const hash = crypto.createHash('sha256');
    hash.update(inputText);
    let hashedValue = hash.digest('hex');
    document.getElementById('hashOutput').textContent = hashedValue;
}
