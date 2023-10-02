import requests


def GET(url, headers={}, formatJson = True):
    print(f"Calling GET Call {url} with headers {headers}")

    response = requests.get(url, headers=headers)
    print(str(response.content))
    return response.json() if formatJson else response.content

def POST(url, body, headers={}, formatJson = True):
    print(f"Calling GET Call {url} {body} with headers {headers}")

    response = requests.post(url, json=body, headers=headers)
    return  response.json() if formatJson else response.content
