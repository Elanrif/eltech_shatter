import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from '@inertiajs/react';
import { MessageCircleQuestionIcon } from 'lucide-react';
import { Textarea } from './ui/input-textarea';

export function CardPostQuestionForm() {
    return (
        <Card className="w-[750px]">
            <div className='flex justify-between items-center'>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MessageCircleQuestionIcon />
                        Question
                    </CardTitle>
                    <CardDescription>Publier une question.</CardDescription>
                </CardHeader>
                <CardHeader className="mt-3 hover:text-black duration-300 ease-in-out text-slate-500">
                    <Link href={route('post.image')}>Postuler une image ?</Link>
                </CardHeader>
            </div>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div>
                            <Label htmlFor="interest" className="after:ml-1 after:text-red-500 after:content-['*']">
                                Interest
                            </Label>
                            <Select>
                                <SelectTrigger className="w-[280px]" id="interest">
                                    <SelectValue placeholder="Sélectionner un Interest" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Interest</SelectLabel>
                                        <SelectItem value="apple">Foot</SelectItem>
                                        <SelectItem value="banana">Managa</SelectItem>
                                        <SelectItem value="blueberry">Même</SelectItem>
                                        <SelectItem value="grapes">Poème</SelectItem>
                                        <SelectItem value="pineapple">Art</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="question" className="after:ml-1 after:text-red-500 after:content-['*']">
                                Question?
                            </Label>
                            <Input id="question" placeholder="Saisir une question" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework" className="after:ml-1 after:text-red-500 after:content-['*']">
                                Description
                            </Label>
                            <Textarea id="content" rows={3} placeholder="Text..." aria-rowspan={5} />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Annuler</Button>
                <Button>Publier</Button>
            </CardFooter>
        </Card>
    );
}
