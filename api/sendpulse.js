const CLIENT_ID = 'sp_id_cb7103ee1b39a4e7e6409a97c69c4e8b';
const CLIENT_SECRET = 'sp_sk_cee022063fb75ff1dd6a1e09bd959d39';

async function getToken() {
  const res = await fetch('https://api.sendpulse.com/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });
  const data = await res.json();
  return data.access_token;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, listId } = req.body;

  if (!email || !listId) {
    return res.status(400).json({ error: 'Missing email or listId' });
  }

  try {
    const token = await getToken();

    const response = await fetch(`https://api.sendpulse.com/addressbooks/${listId}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        emails: [{ email, variables: {} }],
      }),
    });

    const result = await response.json();
    return res.status(200).json({ ok: true, result });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
