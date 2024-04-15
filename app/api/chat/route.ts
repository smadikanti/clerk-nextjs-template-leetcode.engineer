
// OPEN AI ROUTE
// import OpenAI from 'openai';
// import { OpenAIStream, StreamingTextResponse } from 'ai';
 
// // Create an OpenAI API client (that's edge friendly!)
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });
 
// // IMPORTANT! Set the runtime to edge
// export const runtime = 'edge';
 
// export async function POST(req: Request) {
//   const { messages } = await req.json();
 
//   // Ask OpenAI for a streaming chat completion given the prompt
//   const response = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     stream: true,
//     messages,
//   });
 
//   // Convert the response into a friendly text-stream
//   const stream = OpenAIStream(response);
//   // Respond with the stream
//   return new StreamingTextResponse(stream);
// }

// ANTHROPIC ROUTE
import Anthropic from '@anthropic-ai/sdk';
import { AnthropicStream, StreamingTextResponse } from 'ai';
 
// Create an Anthropic API client (that's edge friendly)
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
 
export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();
 
  // Ask Claude for a streaming chat completion given the prompt
  const response = await anthropic.messages.create({
    messages,
    model: 'claude-2.1',
    stream: true,
    max_tokens: 3000,
  });
 
  // Convert the response into a friendly text-stream
  const stream = AnthropicStream(response);
 
  // Respond with the stream
  return new StreamingTextResponse(stream);
}

// HUGGING FACE ROUTE
// import { HfInference } from '@huggingface/inference';
// import { HuggingFaceStream, StreamingTextResponse } from 'ai';
// import { experimental_buildOpenAssistantPrompt } from 'ai/prompts';

// // Create a new HuggingFace Inference instance
// const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// // IMPORTANT! Set the runtime to edge
// export const runtime = 'edge';

// export async function POST(req: Request) {
//   // Extract the `messages` from the body of the request
//   const { messages } = await req.json();

//   const response = Hf.textGenerationStream({
//     // model: 'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
//     model: 'TheBloke/deepseek-coder-6.7B-instruct-GGUF',    
//     inputs: experimental_buildOpenAssistantPrompt(messages),
//     parameters: {
//       max_new_tokens: 200,
//       // @ts-ignore (this is a valid parameter specifically in OpenAssistant models)
//       typical_p: 0.2,
//       repetition_penalty: 1,
//       truncate: 1000,
//       return_full_text: false,
//     },
//   });

//   // Convert the response into a friendly text-stream
//   const stream = HuggingFaceStream(response);

//   // Respond with the stream
//   return new StreamingTextResponse(stream);
// }