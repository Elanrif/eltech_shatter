import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Post } from '@/types/models/user';
import { Bookmark, Ellipsis, Heart, MessageCircle, ShareIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default function CardPostUser({ post }: { post: Post }) {
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
                    <CardHeader className="flex flex-row items-center">
                        <CardDescription>Nous rejoindre</CardDescription>
                        <Ellipsis />
                    </CardHeader>
                </div>
                <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        {post.image ? <img src={`${post.image}`} alt={post.image} /> : post.content}
                    </CardDescription>
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
