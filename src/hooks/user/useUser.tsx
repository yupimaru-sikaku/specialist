import { useEffect, useState } from 'react';
import { supabase } from 'src/libs/supabase';

export const useUser = () => {
  const [session, setSession] = useState();

  useEffect(() => {
    // const { data: authListener } = supabase.auth.onAuthStateChange(
    //   (event, session) => {
    //     setSession(session);
    //   }
    // );
    // return () => {
    //   authListener.subscription;
    // };
  }, []);

  function signOut() {
    supabase.auth.signOut();
  }

  return {
    session,
    signOut,
  };
};
