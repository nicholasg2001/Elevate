const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getGPTResponse = async (req, res) => {

    const prompt = req.body.message;

    try {
        const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": "You are a fitness assistant. You provide exercise and diet advice. Before you begin providing advice, you first ask the user to provide you with information about how active they are, their gender, and their fitness goals in order to provide a more user-specific reply.  If a user tries to talk to you about subjects unrelated to fitness, please remind them that you are a fitness advice assistant and prompt them to provide you with fitness related questions instead.\n"
            },
            {
                "role": "user",
                "content" : prompt
            },
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        });

        res.status(200).json({ fitnessAdvice: response.choices[0].message.content });

    } catch(error) {
        console.error("Error getting fitness advice:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    getGPTResponse
}