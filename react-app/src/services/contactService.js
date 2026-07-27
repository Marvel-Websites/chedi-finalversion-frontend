import axios from 'axios';

export async function submitContactForm(payload) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 20000);

  try {
    const res = await axios.post('/api/contact', payload, {
      signal: controller.signal,
      validateStatus: () => true,
    });
    return res.data;
  } finally {
    clearTimeout(timeoutId);
  }
}
