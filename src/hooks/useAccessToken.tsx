import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const useAccessToken = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        setAccessToken(token);
      } catch (error) {
        console.log('Error fetching access token:', error);
      }
    };

    fetchAccessToken();
  }, [getAccessTokenSilently]);

  return accessToken;
};

export default useAccessToken;