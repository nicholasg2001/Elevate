import { useState } from 'react';
import { useGetGPTResponseQuery } from '../../redux/services/GPTService';

const TrainerGPTTab = () => {
    const [inputValue, setInputValue] = useState('');
    const [conversation, setConversation] = useState([]);
    const { data: response } = useGetGPTResponseQuery(inputValue);

    const handleSendMessage = () => {
        if (inputValue.trim() === '') return; // Validate not empty string
        
        setConversation([...conversation, { prompt: inputValue, response }]);
        setInputValue('');
    };

    return (
        <div className="flex flex-col p-6 bg-gray-50 text-medium text-gray-500 rounded-lg w-1/2">
            <div className="w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <div className="bg-color7 dark:bg-slate-800 text-gray-700 dark:text-white text-center font-poppins p-4 text-2xl rounded-t-lg">
                    Elevate Fitness AI  
                </div>
                <div className="h-56 overflow-y-scroll">
                    <ul className="list-none m-0 p-2">
                        {conversation.map((message, index) => (
                            <li key={index}>
                                <strong>User:</strong> {message.prompt}<br />
                                <strong>AI:</strong> {message.response}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex border-t border-gray-300 p-4">
                    <input 
                        type="text"
                        className="text-gray-700 flex-1 border-none outline-none p-2 text-lg" 
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button 
                        className="bg-color7 dark:bg-slate-800 text-white text-md px-4 py-2 rounded cursor-pointer"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>      
        </div>
    );
};

export default TrainerGPTTab;
