import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SharedData } from '@/types';
import { Post } from '@/types/models/user';
import { usePage } from '@inertiajs/react';
import dayjs from 'dayjs';
import 'dayjs/locale/fr'; // Import de la localisation française
import relativeTime from 'dayjs/plugin/relativeTime';
import { Bookmark, Heart, ImagePlus, MessageCircle, ShareIcon, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { DialogDeletePost } from './dialog-delete-post';
import { DialogEditPost } from './dialog-edit-post';
import { Textarea } from '../ui/input-textarea';
import { Label } from '../ui/label';
import { Input } from '@headlessui/react';
import { useState } from 'react';

dayjs.extend(relativeTime);
dayjs.locale('fr'); // Définir la langue en français
export default function CardPostUser({ post }: { post: Post }) {
    const [active, isActive] = useState<boolean>(false);
    const { auth } = usePage<SharedData>().props;
    const owner = auth.user?.email === post.user?.email;
    return (
        <div>
            <Card className="max-w-[45rem]">
                <div className="flex items-center justify-between">
                    <CardHeader className="flex flex-row items-center">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>{auth.user?.name}</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-sm font-thin">{post.user?.email}</CardTitle>
                        <CardDescription>{dayjs(post.created_at).fromNow()}</CardDescription>
                    </CardHeader>
                    <CardHeader className="flex flex-row items-center gap-5">
                        <Button size={'sm'} className="bg-blue-700 hover:cursor-pointer hover:bg-blue-600">
                            Nous rejoindre
                        </Button>
                        {owner && (
                            <div className="flex items-center gap-4">
                                <DialogEditPost post={post} />
                                <DialogDeletePost post={post} />
                            </div>
                        )}
                    </CardHeader>
                </div>
                <CardHeader>
                    <CardTitle className="text-sm font-medium text-slate-700">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{post.image ? <img src={`${post.image}`} alt={post.image} /> : post.content}</CardDescription>
                </CardContent>
                <CardFooter className="flex-col items-start">
                    <div className="flex flex-row items-center gap-10">
                        <div onClick={() => isActive(!active)} className="flex items-center justify-center space-x-2 hover:cursor-pointer">
                            <MessageCircle />
                            <span>2.3k</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 hover:cursor-pointer">
                            {' '}
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
                    </div>
                    <div className={`flex flex-col gap-3 py-4 ${active ? 'block' : 'hidden'}`}>
                        <p className="text-xs text-slate-500">
                            {' '}
                            Se rappeler de garder les commentaires respectueux et de suivre notre communauté{' '}
                            <a href="#" className="text-blue-500 hover:text-blue-600">
                                {' '}
                                Eletech Guidelines
                            </a>
                        </p>
                        <div className="flex items-start gap-2">
                            <User />
                            <Textarea id="content" name="content" rows={5} placeholder="Message..." required className="w-full" />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="image">
                                <ImagePlus className="hover:cursor-pointer" />
                            </Label>
                            <Input id="image" type="file" className={'hidden'} />
                            <div className="flex items-center gap-3">
                                <Button variant={'secondary'}> Annuler</Button>
                                <Button className="bg-green-400"> Publier</Button>
                            </div>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
