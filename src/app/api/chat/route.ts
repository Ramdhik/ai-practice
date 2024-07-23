import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText } from 'ai';

// Allow streaming responses up to 30 seconds

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    messages,
  });
  // return result.toAIStreamResponse();
}
