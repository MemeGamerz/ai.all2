'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate real-world applications of SynapseAI across different industries.
 *
 * - generateIndustryApplications - A function that generates industry-specific applications.
 * - GenerateIndustryApplicationsInput - The input type for the generateIndustryApplications function.
 * - GenerateIndustryApplicationsOutput - The return type for the generateIndustryApplications function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateIndustryApplicationsInputSchema = z.object({
  industries: z
    .array(z.string())
    .describe(
      'An array of industries for which to generate example applications.'
    ),
});
export type GenerateIndustryApplicationsInput = z.infer<
  typeof GenerateIndustryApplicationsInputSchema
>;

const GenerateIndustryApplicationsOutputSchema = z.object({
  applications: z.array(z.string()).describe('Generated applications for each industry.'),
});
export type GenerateIndustryApplicationsOutput = z.infer<
  typeof GenerateIndustryApplicationsOutputSchema
>;

export async function generateIndustryApplications(
  input: GenerateIndustryApplicationsInput
): Promise<GenerateIndustryApplicationsOutput> {
  return generateIndustryApplicationsFlow(input);
}

const generateIndustryApplicationsPrompt = ai.definePrompt({
  name: 'generateIndustryApplicationsPrompt',
  input: {schema: GenerateIndustryApplicationsInputSchema},
  output: {schema: GenerateIndustryApplicationsOutputSchema},
  prompt: `You are an AI expert specializing in generating real-world applications of AI technologies across various industries.

  Given the following industries, generate a list of example applications for each industry, using current news articles and studies to ensure the examples are realistic and up-to-date.

  Industries: {{#each industries}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Format each example as a concise sentence describing the application.

  Return the applications as a JSON array of strings.
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const generateIndustryApplicationsFlow = ai.defineFlow(
  {
    name: 'generateIndustryApplicationsFlow',
    inputSchema: GenerateIndustryApplicationsInputSchema,
    outputSchema: GenerateIndustryApplicationsOutputSchema,
  },
  async input => {
    const {output} = await generateIndustryApplicationsPrompt(input);
    return output!;
  }
);
