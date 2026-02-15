
import { USER_INFO, PROJECTS, SKILLS } from "../constants";

const systemPrompt = `
You are the personal AI Assistant for ${USER_INFO.name}. 
Your goal is to answer questions from potential recruiters (Job seekers) and potential clients (Freelancers).

User Context:
- Name: ${USER_INFO.name}
- Title: ${USER_INFO.title}
- Bio: ${USER_INFO.bio}
- Projects: ${JSON.stringify(PROJECTS)}
- Skills: ${JSON.stringify(SKILLS)}

Tone: Professional, helpful, concise, and slightly enthusiastic. 
If someone asks about hiring, guide them to the contact section. 
If someone asks about rates, suggest they send an inquiry via the contact form for a custom quote.
Mention experience with Marathi/English as appropriate.
`;

export const getGeminiResponse = async (userInput: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'assistant', content: h.text })),
      { role: 'user', content: userInput }
    ];

    const response = await fetch(import.meta.env.VITE_GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: import.meta.env.VITE_GROQ_MODEL,
        messages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Groq API Error:", error);
    return "The AI assistant is currently resting. Please use the contact form to reach out directly!";
  }
};
