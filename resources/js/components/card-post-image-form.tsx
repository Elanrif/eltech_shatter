import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from '@inertiajs/react';
import { ImageIcon, ImagePlusIcon } from 'lucide-react';

export function CardPostImageForm() {
    return (
        <Card className="w-[750px]">
            <div className="flex items-center justify-between">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ImageIcon />
                        Fichier image
                    </CardTitle>
                    <CardDescription>Publier une image.</CardDescription>
                </CardHeader>
                <CardHeader className="mt-3 text-slate-500 duration-300 ease-in-out hover:text-black">
                    <Link href={route('post.question')}>Postuer une question ?</Link>
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
                            <Label htmlFor="titre" className="after:ml-1 after:text-red-500 after:content-['*']">
                                Titre
                            </Label>
                            <Input id="titre" placeholder="Saisir une question" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Card className="flex items-center justify-center bg-black text-white">
                                <CardHeader>
                                    <CardTitle>Choisir une photo</CardTitle>
                                    <CardDescription>Veuillez selectionner une image JPEG,PNG,JPG</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Label htmlFor="picture">
                                        <ImagePlusIcon size={60} />
                                    </Label>
                                </CardContent>
                                <CardFooter>
                                    <Input id="picture" type="file" />
                                </CardFooter>
                            </Card>
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
