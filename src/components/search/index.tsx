import { Input } from "@/components/ui/input"
import { Bell, Mic, Search } from 'lucide-react';
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


export default function SearchInput() {
    return (
        <nav className="fixed flex w-full bg-gray-950 gap-4 justify-between items-center content-center
         max-md:hidden max-sm:hidden ">
            <div className="flex items-center mt-4 mb-4 ml-16 justify-center w-2/3 gap-4">

                <h1
                    className="w-full ml-2 text-gray-200 font-bold text-xl">
                    Blog News
                </h1>

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

            </div>

            <div className="flex items-center justify-center mt-4 mb-4 gap-10">
                <div className="mr-4">
                    <Avatar className="flex items-center text-gray-300 justify-center gap-4">
                        <Bell />
                        <h2 className="font-semibold text-sm">Jeferson Vidal</h2>
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                            className="w-8 h-8 rounded-full"
                        />
                        <AvatarFallback>PF</AvatarFallback>
                    </Avatar>
                </div>

            </div>
        </nav>

    )
}



