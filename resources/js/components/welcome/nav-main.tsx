'use client';

import { ChevronRight, type LucideIcon } from 'lucide-react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';

export function NavMain({
    items,
    title,
}: {
    items: {
        title: string;
        url: string;
        icon?: LucideIcon;
        isActive?: boolean;
        items?: {
            title: string;
            url: string;
        }[];
    }[];
    title: string;
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>{title.toUpperCase()}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton tooltip={item.title}>
                                    {item.icon && <item.icon />}
                                    <Link href={route(`${item.url}`)} className={`${!item.items && 'w-full'}`}>
                                        <span>{item.title}</span>
                                    </Link>
                                    {item.items && (
                                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                    )}
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            {item.items?.map((subItem,index) => (
                                <CollapsibleContent key={index}>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubItem key={subItem.title}>
                                            <SidebarMenuSubButton asChild>
                                                <Link href={route(`${subItem.url}`)}>
                                                    <span>{subItem.title}</span>
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            ))}
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
