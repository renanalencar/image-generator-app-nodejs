import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import * as dotenv from "dotenv";

dotenv.config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT || '';
const azureApiKey = process.env.AZURE_OPENAI_API_KEY || '';

const promptUserImage = "Captain with a parrot on his shoulder"; // Capitão com um papagaio no ombro

export async function main() {
    try {
        console.log("=== Image Generator DALL-E App ===");
        
        const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
        const deploymentName = 'dall-e-3';
        
        const imageResponse = await client.getImages(deploymentName, promptUserImage, {
            n: 1,
            size: "1024x1024",
            responseFormat: "url",
            quality: "standard",
            style: "vivid",
        });

        for (const image of imageResponse.data) {
            console.log(`image generated URL...: ${image.url}`);
        }

    } catch (error) {
        console.log(`The sample encountered an error...: ${error}`);
    }
}

main();