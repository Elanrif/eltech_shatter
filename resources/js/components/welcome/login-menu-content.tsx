import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Link } from '@inertiajs/react';
import { LogIn, User2Icon } from 'lucide-react';

export function LoginMenuContent() {
    return (
        <>
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex text-slate-700 items-center gap-2 px-1 py-1.5 text-left text-sm">Partager vos publications</div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                    <Link className="block w-full" href={route('register')} as="button">
                        <User2Icon className="mr-2" />
                        S'inscrire
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
                <Link className="block w-full" href={route('login')} as="button">
                    <LogIn className="mr-2" />
                    Se connecter
                </Link>
            </DropdownMenuItem>
        </>
    );
}
