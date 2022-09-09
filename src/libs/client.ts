import { createClient } from 'microcms-js-sdk'; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: 'specialist-association', // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: '1923504b6fd74620bd5dae3c8a19d0a5e497',
});
