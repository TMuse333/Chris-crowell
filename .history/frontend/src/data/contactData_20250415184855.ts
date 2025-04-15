export const applicationQuestions = [
  {
    title: 'name',
    question: 'Your full name',
    placeholder: 'Enter your name',
    required: true,
  },
  {
    title: 'email',
    question: 'Your email address',
    placeholder: 'Enter your email',
    isEmail: true,
    required: true,
  },
  {
    title: 'phone',
    question: 'Your phone number',
    placeholder: 'Enter your phone number',
    isPhoneNumber: true,
    required: true,
  },
  {
    title: 'intent',
    question: 'Are you looking to buy or sell?',
    multipleChoices: true,
    choices: ['Buy', 'Sell', 'Both', 'Just browsing'],
    required: true,
  },
  {
    title: 'location',
    question: 'Preferred area or neighborhood',
    placeholder: 'e.g., Bedford, Halifax, Dartmouth',
    required: false,
  },
  {
    title: 'timeline',
    question: 'What is your ideal timeline?',
    placeholder: 'e.g., ASAP, within 3 months, 6+ months',
    required: false,
  },
  {
    title: 'budget',
    question: 'Estimated budget or price range',
    placeholder: 'e.g., $400,000 - $600,000',
    required: false,
  },
  {
    title: 'message',
    question: 'Any other details you’d like to share?',
    placeholder: 'Let us know how we can help you best',
    required: false,
  },
];
