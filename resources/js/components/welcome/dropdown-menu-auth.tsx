import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Post } from '@/types/models/user';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { ClipboardList, Pencil, Trash } from 'lucide-react';
import 'dayjs/locale/fr'; // Import de la localisation française

dayjs.extend(LocalizedFormat);
dayjs.locale('fr'); // Définir la langue en français
export function DropdownMenuAuth({ post }: { post: Post }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size={'sm'}>
                    <ClipboardList />
                    <span>option</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Publié le : {dayjs(post.created_at).format('LLL')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Modifier
                        <DropdownMenuShortcut>
                            <Pencil />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500">
                        Supprimer
                        <DropdownMenuShortcut>
                            <Trash className="text-red-500" />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Autre...
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
