import React, { useState } from 'react';
import { TextInput, Text } from 'react-native';
import openai from 'openai';

const Gpt3Page = () => {
  const [input, setInput] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  // Authenticate with your OpenAI API key
  openai.apiKey = 'sk-...nkca';

  const handleInputChange = (text) => {
    setInput(text);
  };

  const generateText = async () => {
    const response = await openai.completions.create({
      prompt: input,
      model: 'text-davinci-002',
      max_tokens: 256,
      temperature: 0.5,
    });

    setGeneratedText(response.data.choices[0].text);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your input"
        value={input}
        onChangeText={handleInputChange}
      />
      <Button title="Generate text" onPress={generateText} />
      <Text>{generatedText}</Text>
    </View>
  );
};


export default Gpt3Page;