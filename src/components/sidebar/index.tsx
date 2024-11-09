import {
    Home, Users,
    Settings2, LeafyGreen, SquareMenu,
    ChartLine, HeartPulse, UtensilsCrossed, Megaphone,
    Volleyball, Mic, Search, Bell,
    Globe,
    HandHeart
} from "lucide-react";

import { DialogTitle, 
    DialogTrigger, 
    DialogContent, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader } from "@/components/ui/dialog"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Dialog } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import Link from "next/link";




export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40">

            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background
            sm:flex flex-col"
            >

                <nav className=" flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link
                            href="#"
                            className="flex h-9 w-9 shrink-0 items-center justify-center
                    bg-primary text-primary-foreground rounded-xl"
                        >
                            <LeafyGreen className="h-4 w-4" />
                            <span className="sr-only">Dashboard avatar</span>
                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-muted-foreground transition-colors hover:text-foreground "
                                >
                                    <Home className="h-5 w-5" />
                                    <span className="sr-only">Home</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Home</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-muted-foreground transition-colors hover:text-foreground ">
                                    <Megaphone className="h-5 w-5" />
                                    <span className="sr-only">Acontecimentos</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Acontencimentso</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-muted-foreground transition-colors hover:text-foreground" >
                                    <ChartLine className="h-5 w-5" />
                                    <span className="sr-only">Finanças</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Finanças</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-muted-foreground transition-colors hover:text-foreground ">
                                    <Volleyball className="h-5 w-5" />
                                    <span className="sr-only">Esporte</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Esporte</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-muted-foreground transition-colors hover:text-foreground ">
                                    <Users className="h-5 w-5" />
                                    <span className="sr-only">Famosos</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Famosos</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-muted-foreground transition-colors hover:text-foreground" >

                                    <HeartPulse className="h-5 w-5" />
                                    <span className="sr-only">Saúde</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Saúde</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-muted-foreground transition-colors hover:text-foreground ">
                                    <UtensilsCrossed className="h-5 w-5" />
                                    <span className="sr-only">Culinaria</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Culinaria</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-muted-foreground transition-colors hover:text-foreground ">
                                    <HandHeart className="h-5 w-5" />
                                    <span className="sr-only">Beleza e cuidados</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Beleza e cuidados</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 justify-center items-center 
                                    rounded-lg text-muted-foreground transition-colors hover:text-foreground ">
                                    <Globe className="h-5 w-5" />
                                    <span className="sr-only">Giro no mundo</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Giro no mundo</TooltipContent>
                        </Tooltip>

                    </TooltipProvider>
                </nav>


                <nav className="flex mt-auto flex-col items-center justify-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline"
                                            className="w-full hover:bg-slate-200 text-muted-foreground hover:text-foreground ">
                                            <Settings2 className="h-8 w-8 " />
                                            <span className="sr-only">Sair</span>
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Configurações</DialogTitle>
                                            <DialogDescription>
                                                Make changes to your profile here. Click save when you're done.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <Button type="submit">Salvar</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </TooltipTrigger>
                            <TooltipContent side="right">Sair</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>

            </aside>





            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 
                 border-b border-gray-300 bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent
                 sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size='icon' variant="outline" className="sm:hidden">
                                <SquareMenu className="w-5 h-5" />
                                <span className="sr-only">Sidebar menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side={"left"} className="sm:max-w-x">
                            <DialogTitle>
                                <VisuallyHidden>Blog news</VisuallyHidden>

                            </DialogTitle>
                            <nav className="grid gap-6 text-lg font-medium">

                                <div className="flex items-center  gap-4">
                                    <Link
                                        href="#"
                                        className="flex h-10 w-10 bg-primary rounded-xl text-lg 
                                        items-center justify-center text-primary-foreground md:text-base"
                                        prefetch={false} >
                                        <LeafyGreen className="h-5 w-5 transition-all" />
                                        <span className="sr-only">Logo</span>
                                    </Link>
                                    <h1>Blog News</h1>
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
                                    <Megaphone className="h-5 w-5 transition-all" />
                                    Acontecimentos
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <ChartLine className="h-5 w-5 transition-all" />
                                    Finanças
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <Users className="h-5 w-5 transition-all" />
                                    Famosos
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <Volleyball className="h-5 w-5 transition-all" />
                                    Esportes
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <HeartPulse className="h-5 w-5 transition-all" />
                                    Saude
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <UtensilsCrossed className="h-5 w-5 transition-all" />
                                    Culinaria
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <HandHeart className="h-5 w-5 transition-all" />
                                    Beleza e cuidados
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <Globe className="h-5 w-5 transition-all" />
                                    Giro no mundo
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>



                    <div className="flex items-center gap-3 w-full  justify-between">
                        <div className="flex items-center  justify-center  gap-3">

                            <Input
                                id="search"
                                type="search"
                                placeholder="Pesquisar..."
                                className="bg-gray-100 text-gray-900"
                            />

                            <Button type="submit">
                                <Search className="w-6 h-6" />
                            </Button>



                            <Button>
                                <Mic className="w-6 h-6" />
                            </Button>


                            <div className="flex items-center justify-center gap-4">
                                <div className="flex items-center justify-center gap-3">

                                    <Button className="bg-transparent hover:bg-transparent">
                                        <Bell className="text-gray-950 w-8 h-8" />
                                    </Button>

                                </div>
                            </div>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button  className="w-1/3 bg-muted hover:bg-gray-200">
                                        <Avatar className="flex items-center w-full text-gray-300 justify-center">
                                            <AvatarImage
                                                src="https://github.com/shadcn.png"
                                                alt="@shadcn"
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <AvatarFallback>PF</AvatarFallback>
                                        </Avatar>

                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Edit profile</DialogTitle>
                                        <DialogDescription>
                                            Make changes to your profile here. Click save when you're done.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <Button type="submit">Salvar</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>


                        </div>
                    </div>
                </header>
            </div>

        </div>
    );
}
