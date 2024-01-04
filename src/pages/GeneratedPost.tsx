import React, {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import Card from '../Components/Card'
import axios from "axios"
import env from "react-dotenv"

const OPENAI_API_KEY = env.API_KEY; // Replace with your actual API key

export default function GeneratedPost() {

  const [generatedImage, setGeneratedImage] = useState<string>("");
  const [generatedText, setGeneratedText] = useState<string>("");
  const [imageLoading, setImageLoading] = useState(false);
  const [textLoading, setTextLoading] = useState(false)
  const [searchParams] = useSearchParams();

  const titleParam = searchParams.get('title');
  const adTypeParam = searchParams.get('adtype');

  let width = 500;
  let height = 500;

  if(adTypeParam === 'twitter'){
    width = 1500;
    height = 500;
  } else if (adTypeParam === 'story'){
    width = 1080;
    height = 1920;
  }

  useEffect(() => {
    generateImage()
    generateText()
  }, [])

  async function generateImage() {
    setImageLoading(true);

    try {
      const requestData = {
        model: "dall-e-3",
        prompt: titleParam,
        n: 1,
        size: `1024x1024`, // Set the desired image size here
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      };

      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        requestData,
        {
          headers: headers,
        }
      );

      setGeneratedImage(response.data.data[0].url);
    } catch (error) {
      console.error("Error generating images:", error);
    } finally {
      setImageLoading(false);
    }
  }

  async function generateText(){
    setTextLoading(true);

    try {
      const requestData = {
        model: "gpt-3.5-turbo",
        messages: [{
          role: "system",
          content: `Give me a short description about this product: ${titleParam}`
        }],
        max_tokens: 30
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      };

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        requestData,
        {
          headers: headers,
        }
      );

      setGeneratedText(response.data.choices[0].message.content);
    } catch (error) {
      console.error("Error generating text:", error);
    } finally {
      setTextLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <Card title={titleParam} description={ textLoading ? "Text is loading..." : generatedText} w={width} h={height} img={imageLoading? <p className="px-4 pt-4 text-gray-600">Loading image...</p> : <div className='w-full h-3/5'><img className='object-cover h-full w-full' src={generatedImage} alt="Generated image"/></div>}/>
    </div>
  )
}
