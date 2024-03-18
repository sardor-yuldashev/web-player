import { useState } from "react";
import { supabase } from "~/supabase";

export default function LogIn() {
  const [email, setEmail] = useState<string | undefined>(undefined)
  const [password, setPassword] = useState<string | undefined>(undefined)

  // const handleGoogleSignup = () => {
  //   supabase.auth.signIn({ provider: "google" });
  // };

  const handleSignInWithEmail = () => {
    // supabase.auth.signIn({ provider: "google" });
    supabase.auth.signInWithPassword({
      email: email || "",
      password: password || ""
    })
  };

  return (
    <div>
      <p>Log in to your app</p>
      <input onChange={(e) => setEmail(e.currentTarget.value)} type="email" placeholder="Email" value={email} />
      <input onChange={(e) => setPassword(e.currentTarget.value)} type="password" placeholder="Password" value={password} />
      <button onClick={handleSignInWithEmail}>Log in with Google</button>
    </div>
  );
}
