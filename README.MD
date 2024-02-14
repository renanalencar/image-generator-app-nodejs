[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

# React Native Track: NLW Expert

Simple Image Generator App is a simplistic yet powerful image generator tool developed using Node.js and TypeScript. It interfaces directly with Azure's OpenAI Service to leverage the DALL-E model's capabilities, enabling users to generate complex images from textual descriptions.

This project was developed during the Webinar conducted by Glaucia Lemos and promoted by DIO.
## Authors

- [@renanalencar](https://www.github.com/renanalencar)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Tech Stack

**Server:** Node.js, Typescript, nodemon, concurrently


## Installation

Install image-generator-app-nodejs with npm

```bash
  cd image-generator-app-nodejs
  npm install
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`AZURE_OPENAI_ENDPOINT`

`AZURE_OPENAI_API_KEY`

Used to authenticate with the Azure OpenAI. Retrieve these values from an Azure OpenAI instance in the Azure Portal.
## Run Locally

Clone the project

```bash
  git clone https://github.com/renanalencar/image-generator-app-nodejs
```

Go to the project directory

```bash
  cd image-generator-app-nodejs
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Lessons Learned

Integrating the Azure OpenAI Service into our Node.js project was a remarkably smooth and straightforward process. Azure's well-documented APIs and the comprehensive SDK provided by Microsoft made it easy to get started. Setting up the API keys and authentication was a breeze, thanks to clear guidelines and examples. 

The service's client library for Node.js offered intuitive methods to interact with the OpenAI models, allowing us to quickly integrate advanced AI functionalities into our application. The seamless integration not only saved us valuable development time but also enabled us to leverage powerful AI features without needing deep expertise in machine learning. 

Overall, the experience of using the Azure OpenAI Service in a Node.js project was very positive, highlighting the ease of use and developer-friendly nature of Azure's cloud services.
## Related

Here are some related projects

- [Create your own ChatGPT with Retrieval-Augmented-Generation](https://aka.ms/ws/openai-rag)
 - [Curso - Inteligência Artificial Generativa para Iniciantes](https://microsoft.github.io/generative-ai-for-beginners/#/translations/pt-br/)
 - [ChatGPT + Enterprise data with Azure OpenAI and Azure AI Search](https://github.com/Azure-Samples/azure-search-openai-javascript)
 - [Crie Aplicações Inteligentes com TypeScript, Azure OpenAI e GitHub Copilot](https://www.youtube.com/live/t5OFk0YmIwE?si=KJo-EB5FI3uvwpl0)