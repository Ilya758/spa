import Typesense from 'typesense';

export const client = new Typesense.Client({
  nodes: [
    {
      host: process.env.NEXT_PUBLIC_TYPESENSE_HOST,
      port: 443,
      protocol: 'https',
    },
  ],
  apiKey: process.env.NEXT_PUBLIC_TYPESENSE_API_KEY,
});
