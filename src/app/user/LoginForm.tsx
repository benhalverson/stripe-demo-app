"use client";

import React, { useState } from 'react';
import { supabase } from '../../../utils/supabaseClient';

function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    const randomEmail = Math.random().toString(36).substring(7) + '@example.com';
    const password = 'password42069';

    const { data, error } = await supabase.auth.signUp({
      email: randomEmail,
      password: password,
    });

    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('Success:', data);
    }

    setLoading(false);
  };

  return (
    <button onClick={handleSignup} disabled={loading}>{
      loading ? 'Loading...' : 'Sign up with Random Email'
    }</button>
  );
}

export default LoginForm;