import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Post } from '@/types/models/user';
import { useForm } from '@inertiajs/react';
import { ImageIcon, ImagePlusIcon } from 'lucide-react';
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';

type FormData = {
    theme: string;
    title: string;
    image: File | null; // Ajoutez un champ pour l'image
};

const themes: string[] = ['foot', 'manga', 'même', 'poeme', 'art'];

export function CardPostImageEditForm({ post__, handleOpen }: { post__: Post; handleOpen: Dispatch<SetStateAction<boolean>> }) {
    //const { posts } = usePage<{ posts: Post[] }>().props; when we want to take form session
    const { data, setData, post, processing, errors, setError, reset } = useForm<FormData>({
        theme: '',
        title: '',
        image: null, // Initialisez l'image à null
    });

    useEffect(() => {
        if (post__) {
            setData('theme', post__.theme as string);
            setData('title', post__.title as string);
        }
    }, [setData, post__]);

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const target = e.target;
        const name = target.name as keyof FormData;
        const value = target.value;
        setData(name, value);

        if (errors[name]) {
            setError(name, '');
        }
    }

    function handleSelectChange(value: string) {
        setData('theme', value);

        if (errors.theme) {
            setError('theme', '');
        }
    }

    function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] || null;
        setData('image', file);

        if (errors.image) {
            setError('image', '');
        }
    }

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const errors: Partial<Record<keyof typeof data, string>> = {};
        if (!data.theme) errors.theme = 'Sélectionner un thème';
        if (!data.title) errors.title = 'Veuillez saisir un titre';

        if (Object.keys(errors).length > 0) {
            (Object.entries(errors) as [keyof typeof data, string][]).forEach(([key, message]) => {
                setError(key, message);
            });
            return;
        }

        // Créer un objet FormData pour envoyer l'image
        const formData = new FormData();
        formData.append('theme', data.theme);
        formData.append('title', data.title);
        if (data.image) {
            formData.append('image', data.image);
        }
        const formDataObject: Record<string, string | File> = {};
        for (const [key, value] of formData.entries()) {
            formDataObject[key] = value;
        }
        console.log('formData: ', formDataObject);

        post(route('posts.store'), {
            onFinish: () => reset(),
        });
    }

    return (
        <form onSubmit={submit}>
            <Card className="md:w-[750px]">
                <div className="flex items-center justify-between">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ImageIcon />
                            Fichier image
                        </CardTitle>
                        <CardDescription>Publier une image.</CardDescription>
                    </CardHeader>
                </div>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div>
                            <Label htmlFor="theme" className="after:ml-1 after:text-red-500 after:content-['*']">
                                Thème
                            </Label>
                            <Select onValueChange={handleSelectChange} value={data.theme} required>
                                <SelectTrigger className="w-[280px]" id="interest">
                                    <SelectValue id="theme" placeholder="Sélectionner un Interest" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {themes.map((theme, index) => (
                                            <SelectItem key={index} value={theme} className="capitalize">
                                                {theme}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {errors.theme && <p className="mt-2 text-sm text-red-500">{errors.theme}</p>}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="title" className="after:ml-1 after:text-red-500 after:content-['*']">
                                Titre
                            </Label>
                            <Input id="title" type="text" name="title" value={data.title} onChange={handleChange} placeholder="Saisir une question" />
                            {errors.title && <p className="mt-2 text-sm text-red-500">{errors.title}</p>}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Card className="flex items-center justify-center bg-black text-white">
                                <CardHeader>
                                    <CardTitle>Choisir une photo</CardTitle>
                                    <CardDescription>Veuillez selectionner une image JPEG,PNG,JPG</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Label htmlFor="image">
                                        <ImagePlusIcon size={60} />
                                    </Label>
                                </CardContent>
                                <CardFooter>
                                    <Input id="image" type="file" accept="image/*" onChange={handleImageChange} required />
                                </CardFooter>
                            </Card>
                            {errors.image && <p className="mt-2 text-sm text-red-500">{errors.image}</p>}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button type="reset" variant="outline" onClick={() => handleOpen(false)}>
                        Annuler
                    </Button>
                    <Button type="submit" disabled={processing}>
                        Publier
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
}
