import re
from dotenv import load_dotenv
load_dotenv()
from flask import Flask, jsonify, request  
from services import OpenAI
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route('/api/data', methods=['POST'])  
def get():
    data = request.get_json() 
    selectedLanguage = data.get("selectedLanguage")
    selectedTone = data.get("selectedTone")
    selectedUseCase = data.get("selectedUseCase")
    productname = data.get("productname")
    productDiscription = data.get("productDiscription")
    
    openai_prompt = f'''
        Everything in the following description is in {selectedLanguage}.
        My product is {productname}. A brief description of the product is: {productDiscription}.
        Generate a {selectedUseCase} platform-optimized description of the product based on the following information:
        I {productDiscription}
        During generation, limit the word count to 280.
        Limit the keyword presence to 4 when generating.
        Make the tone {selectedTone}.
        Add emojis where necessary and appropriate. 😊
        In addition, generate 3 {selectedUseCase} platform-optimized hooks with a {selectedUseCase} tone based on the shared information.
        Add emojis to the captions where possible. 😊
        In addition, generate 5 {selectedUseCase} platform-optimized hashtags focused on keywords, 5 {selectedUseCase} platform-optimized hashtags focused on the industry, 5 {selectedUseCase} platform-optimized hashtags that are a mix of industry and keyword-focused, and 5 {selectedUseCase} service-based keywords based on the shared information.
        Give me the answer in the following format.
        '''
     
    res = OpenAI.getRes(openai_prompt)
    return jsonify(data=res, status=200)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081)
