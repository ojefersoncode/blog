"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label";
const CreateStore = () => {
    return (
        <div className="flex items-center min-h-screen justify-center content-center">
            <Card className="w-full max-w-md p-4">
                <CardHeader className="text-center">
                    <h2 className="text-2xl font-bold">Crie sua loja</h2>
                    <p className="text-sm text-slate-600">Alçance novos clientes e organize seus produtos..</p>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="nomedaloja" className="block text-sm mb-2 font-medium text-slate-800">
                                Nome da loja
                            </label>
                            <Input
                                id="nomedaloja"
                                type="text"
                                placeholder="Leptrum store"
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <label htmlFor="urldaloja" className="block text-sm mb-2 font-medium text-slate-800">
                                Url da loja
                            </label>
                            <Input
                                id="urldaloja"
                                type="text"
                                placeholder="leptrum.com/nome-da-sua-loja"
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <label htmlFor="categoria" className="block text-sm mb-2 font-medium text-slate-800">
                                Categoria
                            </label>
                            <Input
                                id="categoria"
                                type="text"
                                placeholder="Moda"
                                className="mt-1"
                            />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture">Logo da loja</Label>
                            <Input id="picture" type="file" />
                        </div>
                        <Button className="w-full bg-indigo-700 mt-4">Cadastrar loja</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default CreateStore;