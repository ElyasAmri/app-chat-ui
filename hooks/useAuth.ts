import {useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useAuth() {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    (async () => {
      const result = await AsyncStorage.getItem('@logged');
      setLogged(result === 'true');
    })();
  });
  return logged;
}
