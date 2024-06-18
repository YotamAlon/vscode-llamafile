import { ChatCompletionMessageParam, ChatCompletionSystemMessageParam, ChatCompletionUserMessageParam } from "openai/resources/chat/completions";
import { Settings } from "./extension";

export default (question: string, settings: Settings, selection?: string): Array<ChatCompletionMessageParam> => {
	let prompt = '';
	if (selection) {
		// If there is a selection, add the prompt and the selected text to the search prompt
		if (settings.selectedInsideCodeblock) {
			prompt = `${question}\n\`\`\`\n${selection}\n\`\`\``;
		} else {
			prompt = `${question}\n${selection}\n`;
		}
	} else {
		// Otherwise, just use the prompt if user typed it
		prompt = question;
	}

	const systemPrompt: ChatCompletionSystemMessageParam = { role: 'system', content: 'You are ASSISTANT helping the USER with coding. You are intelligent, helpful and an expert developer, who always gives the correct answer and only does what instructed. You always answer truthfully and don\'t make things up. (When responding to the following prompt, please make sure to properly style your response using Github Flavored Markdown. Use markdown syntax for things like headings, lists, colored text, code blocks, highlights etc. Make sure not to mention markdown or stying in your actual response. Try to write code inside a single code block if possible)' };
	const userPrompt: ChatCompletionUserMessageParam = { role: 'user', content: prompt };
	let messages = [
		systemPrompt,
		userPrompt
	];

	return messages;
};
