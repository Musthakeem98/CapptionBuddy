import openai
import os
import json

openai.api_key = os.getenv("OPENAI_APIKEY")

def getRes(prompt):
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        temperature=0,
        max_tokens=512,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )

    response_dict = json.loads(json.dumps(response))
    print(f'Chat GPT response: ', end='')
    print(response_dict)
    response_text = response_dict["choices"][0]["text"]

    return response_text
