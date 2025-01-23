"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Hook de redirecionamento
import { supabase } from "@/lib/supabaseClient";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

const Login = () => {
  const router = useRouter(); // Instância do useRouter, hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.push("/home"); // Redireciona para a home
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center min-h-screen justify-center content-center">
      <div className="w-full bg-slate-50 max-md:h-screen rounded md:max-w-md p-4">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">Login</h2>
          <p className="text-sm text-slate-700">Bem-vindo de volta! Faça login para continuar.</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm mb-2 font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seuemail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm mb-2 font-medium text-gray-700">
                Senha
              </label>
              <Input
                id="password"
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button type="submit" className="w-full bg-indigo-600 mt-4">Entrar</Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm text-slate-800">
            Não tem uma conta?{" "}
            <a href="/signin" className="text-indigo-600 hover:underline">
              Registre-se
            </a>
          </p>
        </CardFooter>
      </div>
    </div>
  );
};

export default Login;
