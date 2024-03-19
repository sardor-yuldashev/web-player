import { useState } from "react";
import { supabase } from "~/supabase";

export default function LogIn() {
  const [email, setEmail] = useState<string | undefined>(undefined)
  const [password, setPassword] = useState<string | undefined>(undefined)

  // const handleGoogleSignIn = () => {
  //   supabase.auth.signIn({ provider: "google" });
  // };

  const handleEmailLogin = async () => {
    // supabase.auth.signIn({ provider: "google" });
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email || "",
      password: password || ""
    })
    // else handle error
  };

  const handleGitHubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    })
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <>
      <input onChange={(e) => setEmail(e.currentTarget.value)} type="email" placeholder="Email" value={email} />
      <input onChange={(e) => setPassword(e.currentTarget.value)} type="password" placeholder="Password" value={password} />
      <button onClick={handleEmailLogin}>Login</button>
      {/* <button onClick={handleGitHubLogin}>GitHub Login</button> */}
    </>
  )
}
