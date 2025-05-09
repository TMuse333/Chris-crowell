"use client";

import { useGeneralContext } from '@/context/context';
import React, { useEffect, useRef } from 'react';
import axios from 'axios';

interface Question {
    question: string;
    placeholder?: string;
    multipleChoices?: boolean;
    choices?: string[];
    isEmail?: boolean;
    isPhoneNumber?: boolean;
    required?: boolean;
    title: string;
}

interface InputFormProps {
    title?: string;
    description?: string;
    questions: Question[];
}

const InputForm: React.FC<InputFormProps> = ({ title, description, questions }) => {
    const { applicationFormState, setApplicationFormState } = useGeneralContext();
    const firstInputRef = useRef<HTMLInputElement | null>(null);

    const handleChange = (title: string, value: string) => {
        setApplicationFormState((prevState) => ({
            ...prevState,
            [title]: value
        }));
    };

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone: string) => /^\+?\d{10,15}$/.test(phone);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate required fields
        if (!applicationFormState.name) {
            alert('Please enter your name');
            return;
        }
        if (!applicationFormState.email || !isValidEmail(applicationFormState.email)) {
            alert('Please enter a valid email address');
            return;
        }
        if (!applicationFormState.phone || !isValidPhone(applicationFormState.phone)) {
            alert('Please enter a valid phone number (10–15 digits)');
            return;
        }
        // Check if at least one intent is selected
        const intentSelected = questions
            .find(q => q.title === 'intent')?.choices
            ?.some(choice => applicationFormState[`intent-${choice}`] === 'true');
        if (!intentSelected) {
            alert('Please select at least one intent (Buy, Sell, Both, Just browsing)');
            return;
        }

        try {
            const response = await axios.post('/api/sendEmail', {
                name: applicationFormState.name,
                email: applicationFormState.email,
                phone: applicationFormState.phone,
                intent: {
                    'intent-Buy': applicationFormState['intent-Buy'] || '',
                    'intent-Sell': applicationFormState['intent-Sell'] || '',
                    'intent-Both': applicationFormState['intent-Both'] || '',
                    'intent-Just browsing': applicationFormState['intent-Just browsing'] || ''
                },
                location: applicationFormState.location || '',
                timeline: applicationFormState.timeline || '',
                budget: applicationFormState.budget || '',
                message: applicationFormState.message || ''
            });

            alert('Form submitted successfully!');
            // Reset form state
            setApplicationFormState({
                name: '',
                email: '',
                phone: '',
                'intent-Buy': '',
                'intent-Sell': '',
                'intent-Both': '',
                'intent-Just browsing': '',
                location: '',
                timeline: '',
                budget: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form.');
        }
    };

    useEffect(() => {
        if (firstInputRef.current) {
            firstInputRef.current.focus();
        }
    }, []);

    return (
        <div className="text-white w-[80vw] lg:w-[50vw] md:max-w-[400px] p-6 rounded-lg ml-auto mr-auto flex justify-center items-center">
            {title && <h3 className="text-3xl mb-4 sm:text-4xl md:text-5xl">{title}</h3>}
            {description && <p className="text-lg mb-6 w-[100%] text-left md:text-2xl sm:text-xl">{description}</p>}
            <form onSubmit={handleSubmit}>
                <ul className="pt-5 text-black text-center w-screen mr-auto">
                    {questions.map((question, index) => (
                        <li key={index} className="mb-4 w-[80vw] md:max-w-[400px]">
                            <label className="block text-left mb-2 text-lg md:text-xl">
                                {question.question}
                            </label>
                            {question.multipleChoices ? (
                                <div className="flex flex-wrap">
                                    {question.choices?.map((choice, i) => (
                                        <div key={i} className="mr-4 mb-2">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="mr-2"
                                                    checked={applicationFormState[`${question.title}-${choice}`] === 'true'}
                                                    onChange={(e) => handleChange(`${question.title}-${choice}`, e.target.checked ? 'true' : '')}
                                                />
                                                <span className="text-lg md:text-xl">{choice}</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <input
                                    ref={index === 0 ? firstInputRef : null}
                                    type="text"
                                    placeholder={question.placeholder}
                                    value={applicationFormState[question.title] || ''}
                                    onChange={(e) => handleChange(question.title, e.target.value)}
                                    className="w-full p-2 rounded max-w-[1500px] mr-auto ml-auto text-lg md:text-xl bg-white"
                                />
                            )}
                        </li>
                    ))}
                </ul>
                <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default InputForm;