
# Sipendik

**Sipendik** is a web application designed to assist with the nutritional status assessment of children using a combination of modern web technologies and machine learning. This project utilizes a combination of React, Express.js, Flask, and TensorFlow.js to provide a comprehensive tool for health professionals and caregivers.

## Features

- **BMI Calculator:** Input various health metrics to calculate Body Mass Index (BMI) and assess nutritional status.
- **Data Visualization:** View and print results in a well-formatted PDF.
- **Responsive Design:** Built with Bootstrap to ensure usability on both desktop and mobile devices.

## Technologies Used

- **Frontend:** React, Bootstrap
- **Backend:** Express.js, Flask
- **Machine Learning:** TensorFlow.js, scikit-learn
- **Database:** PostgreSQL
- **Deployment:** Firebase, Cloudflare

## Installation

### Prerequisites

- Node.js
- Python
- PostgreSQL

### Clone the Repository

```bash
git clone https://github.com/yourusername/sipendik.git
cd sipendik
```
### Frontend Setup

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

### Backend Setup

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Create a virtual environment and activate it:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Start the Flask server:
   ```bash
   flask run
   ```

### Machine Learning Model

1. Navigate to the `ml_model` directory:

   ```bash
   cd ml_model
   ```

2. Install the necessary Python packages:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. **Run the Frontend and Backend Servers**: Ensure both React and Flask servers are running.

2. **Access the Application**: Open your web browser and navigate to `http://localhost:3000` to interact with the application.

3. **Input Data**: Enter the required information into the form and submit to calculate the BMI.

4. **Print Results**: View and print the results using the provided functionality.

## Contributing

We welcome contributions to improve **Sipendik**. Please follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React Bootstrap** for providing excellent UI components.
- **TensorFlow.js** for enabling machine learning in the browser.
- **Flask** for serving the machine learning model.
- **Express.js** for creating the backend API.

## Contact

For any inquiries or support, please reach out to [your-email@example.com](mailto:your-email@example.com).

```

You can adjust any specific details to match your actual setup or preferences. Let me know if you need any modifications or additional sections!
```
