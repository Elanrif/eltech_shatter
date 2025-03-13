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
import { ClipboardList, Pencil, Trash } from 'lucide-react';
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
                <DropdownMenuLabel>Publié le : {post.created_at}</DropdownMenuLabel>
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
