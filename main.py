from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_image():
    # Handle image upload
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file:
        # Save the file or process it here
        file.save(f'uploads/{file.filename}')
        return jsonify({'message': 'File successfully uploaded'}), 200

@app.route('/extract-text', methods=['POST'])
def extract_text():
    # Handle text extraction
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file:
        # Process the image and extract text here
        extracted_text = "Sample text extracted from image"
        return jsonify({'text': extracted_text}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
