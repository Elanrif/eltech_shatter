import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Post } from '@/types/models/user';
import { Bookmark, Heart, MessageCircle, ShareIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { DropdownMenuAuth } from './dropdown-menu-auth';
import { usePage } from '@inertiajs/react';
import { SharedData } from '@/types';
import { Button } from '../ui/button';

export default function CardPostUser({ post }: { post: Post }) {
    const { auth } = usePage<SharedData>().props;
    return (
        <div>
            <Card className="max-w-[45rem]">
                <div className="flex items-center justify-between">
                    <CardHeader className="flex flex-row items-center">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <CardTitle>{post.user?.email}</CardTitle>
                        <CardDescription>{post.updated_at}</CardDescription>
                    </CardHeader>
                    <CardHeader className="flex flex-row items-center gap-5">
                        <Button size={"sm"} className='bg-blue-700 hover:bg-blue-600 hover:cursor-pointer'>Nous rejoindre</Button>
                        {auth.user?.email === post.user?.email && <DropdownMenuAuth />}
                    </CardHeader>
                </div>
                <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{post.image ? <img src={`${post.image}`} alt={post.image} /> : post.content}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-row items-center gap-10">
                    <div className="flex items-center justify-center space-x-2 hover:cursor-pointer">
                        <MessageCircle />
                        <span>2.3k</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 hover:cursor-pointer">
                        <Heart />
                        <span>34.7k</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 hover:cursor-pointer">
                        <Bookmark />
                        <span>18.64k</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 hover:cursor-pointer">
                        <ShareIcon />
                        <span>20.9k</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
