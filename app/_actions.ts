"use server";

import { openai } from "@/utils/OpenAIClient";

export async function transformImageAction({ transformRequest, originalImage }: { transformRequest: string, originaImage: string }) {

  const transform = `Using Cloudinary transformation ${transformRequest} to this ${originalImage}`;

  const openAIRequest = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: transform,
    temperature: 0.2,
    max_tokens: 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })

  const response = openAIRequest.data.choices[0]?.text;

  if (response !== undefined) {
    return response;
  }
}
