"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Importa o roteador do Next.js
import { supabase } from "@/lib/supabaseClient";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle2, AlertCircle } from "lucide-react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter(); // Inicializa o roteador do Next.js

  const handleSignup = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      setSuccess(true);
      setDialogOpen(true);

      // Redirecionar para a página de login após 3 segundos
      setTimeout(() => {
        setDialogOpen(false);
        router.push("/login");
      }, 3000);
    } catch (err) {
      setError(err.message);
      setSuccess(false);
      setDialogOpen(true);
    }
  };

  return (
    <div className="flex items-center min-h-screen justify-center content-center">
      <div className="w-full bg-slate-50 max-md:h-screen rounded md:max-w-md p-4">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">Cadastre-se</h2>
          <p className="text-sm text-gray-500">Cadastre-se para usar nossos serviços.</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label htmlFor="email" className="block text-sm mb-2 font-medium text-slate-600">
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
              <label htmlFor="password" className="block text-sm mb-2 font-medium text-slate-600">
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
            <Button type="submit" className="w-full bg-indigo-700 mt-4">
              Criar conta
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm text-slate-800">
            Já tem uma conta?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Fazer login
            </a>
          </p>
        </CardFooter>
      </div>

      {/* Dialog para feedback */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            {success ? (
              <>
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                <DialogTitle>Conta criada com sucesso!</DialogTitle>
                <DialogDescription>
                  Verifique seu email para confirmar o cadastro. Você será redirecionado para o login em instantes.
                </DialogDescription>
              </>
            ) : (
              <>
                <AlertCircle className="h-6 w-6 text-red-600" />
                <DialogTitle>Erro ao criar conta</DialogTitle>
                <DialogDescription>
                  {error || "Ocorreu um erro ao tentar criar sua conta. Tente novamente."}
                </DialogDescription>
              </>
            )}
          </DialogHeader>
          {!success && (
            <Button onClick={() => setDialogOpen(false)} className="mt-4 w-full">
              Fechar
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Signin;
