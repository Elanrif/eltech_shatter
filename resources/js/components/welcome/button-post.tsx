import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';
import { PencilIcon } from 'lucide-react';
import { Button } from '../ui/button';

export function ButtonPost() {
    return (
        <SidebarGroup className={`group-data-[collapsible=icon]:p-0`}>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Button asChild size={'lg'} className="w-full hover:text-slate-200 dark:text-neutral-300 dark:hover:text-neutral-100">
                            <span className="hover:cursor-pointer">
                                <PencilIcon />
                                <span>Ajouté un Post</span>
                            </span>
                        </Button>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
