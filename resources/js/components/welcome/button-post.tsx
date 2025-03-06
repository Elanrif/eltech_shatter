import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';
import { PencilIcon } from 'lucide-react';
export function ButtonPost() {
    return (
        <SidebarGroup className={`group-data-[collapsible=icon]:p-0`}>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Link
                            href={route('post.image')}
                            className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 inline-flex w-full items-center justify-center gap-2 rounded-md px-3 py-4 text-sm font-medium whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none hover:text-slate-400 hover:duration-300 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-300 dark:hover:text-neutral-100 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                        >
                            <PencilIcon />
                            <span>Ajouté un Post</span>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
