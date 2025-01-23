"use client"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Home,
    LeafyGreen, Mic, Search,
    Store,
    Heart,
    ShoppingBag,
    Menu,
    TicketPercent,
    Settings,
    HeartOff,
    Pin,
    MapPin,
} from "lucide-react";

import {
    DialogTitle,
    DialogTrigger,
    DialogContent,
    DialogHeader
} from "@/components/ui/dialog"
import { Input } from "../ui/input";



export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-indigo-950">

            <div className="flex w-full flex-col sm:gap-4 sm:py-4">
                <header className="sticky top-0 z-30 flex h-16 px-4 items-center 
                 gap-4 sm:static sm:h-auto sm:border-0 bg-transparent">

                    <div className="flex w-full items-center bg-transparent gap-3">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="bg-indigo-950 text-slate-50">
                                    <Menu />
                                    <span className="sr-only">Menu</span>
                                </button>
                            </SheetTrigger>

                            <SheetContent side={"left"} className="sm:max-w-x bg-indigo-950">
                                <DialogTitle>
                                    <VisuallyHidden>Leptrum</VisuallyHidden>

                                </DialogTitle>
                                <nav className="grid gap-6 text-lg bg-indigo-950 font-medium">

                                    <div className="flex items-center gap-4">
                                        <Link
                                            href="#"
                                            className="flex h-10 w-10 bg-primary rounded-xl text-lg 
                                        items-center justify-center text-primary-foreground md:text-base"
                                            prefetch={false} >
                                            <ShoppingBag className="h-5 w-5 transition-all" />
                                            <span className="sr-only">Logo</span>
                                        </Link>
                                        <h1 className="text-slate-200">Menu</h1>
                                    </div>

                                    <Link
                                        href="#"
                                        className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                        prefetch={false} >
                                        <Home className="h-5 w-5 transition-all" />
                                        Home
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-4 px-2.5
                                     text-muted-foreground hover:text-foreground"
                                        prefetch={false} >
                                        <TicketPercent className="h-5 w-5 transition-all" />
                                        Destaques
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                        prefetch={false} >
                                        <Store className="h-5 w-5 transition-all" />
                                        Lojas
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                        prefetch={false} >
                                        <ShoppingBag className="h-5 w-5 transition-all" />
                                        Quero vender
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                        prefetch={false} >
                                        <Settings className="h-5 w-5 transition-all" />
                                        Configurações
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="flex items-center justify-center">
                        <h1 className="text-xl font-bold text-slate-50">Leptrum</h1>
                    </div>


                    <div className="flex w-full items-center justify-end gap-2">
                        <div className="flex items-center justify-center text-slate-200 gap-2 whitespace-nowrap flex-shrink-0">
                            <MapPin className="h-4 w-4" />
                            <span className="font-semibold text-sm">Ponte Nova</span>
                        </div>

                        {/* Dialog search*/}
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="p-4 bg-transparent hover:bg-transparent px-2">
                                    <Search className="w-7 h-7 text-white" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] bg-indigo-950 text-white">
                                <DialogHeader>
                                    <DialogTitle className="text-lg font-bold">
                                        Buscar lojas
                                    </DialogTitle>
                                </DialogHeader>
                                <div className="flex flex-col gap-4 mt-4">
                                    <Input
                                        type="search"
                                        placeholder="buscar..."
                                        className="w-full px-4 py-2 rounded-md border border-nonefocus:outline-none"
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>

                    </div>



                </header>


            </div>

        </div>
    );
}
