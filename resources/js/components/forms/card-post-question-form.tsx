import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link, useForm } from '@inertiajs/react';
import { MessageCircleQuestionIcon } from 'lucide-react';
import { Textarea } from '../ui/input-textarea';

type FormData = {
    theme: string;
    title: string;
    content: string;
};
const themes: string[] = ['foot', 'manga', 'même', 'poeme', 'art'];
export function CardPostQuestionForm() {
    const { data, setData, post, processing, errors, setError, reset } = useForm<FormData>({
        theme: '',
        title: '',
        content: '',
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const target = e.target;
        const name = target.name as keyof FormData;
        const value = target.value;
        setData(name, value);

        // Effacer l'erreur de validation lorsque l'utilisateur commence à saisir
        if (errors[name]) {
            setError(name, ''); // Efface l'erreur pour ce champ
        }
    }
    function handleSelectChange(value: string) {
        setData('theme', value);
        // Effacer l'erreur de validation lorsque l'utilisateur sélectionne une valeur
        if (errors.theme) {
            setError('theme', '');
        }
    }

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("auth: ", auth)
        return;
        const errors: Partial<Record<keyof typeof data, string>> = {};
        if (!data.theme) errors.theme = 'Sélectionner un thème';
        if (!data.title) errors.title = 'Veuillez saisir une question';

        if (Object.keys(errors).length > 0) {
            (Object.entries(errors) as [keyof typeof data, string][]).forEach(([key, message]) => {
                setError(key, message);
            });
            return;
        }
        post(route('posts.store'));
        console.log('data: ', data);
    }
    return (
        <form onSubmit={submit}>
            <Card className="w-[750px]">
                <div className="flex items-center justify-between">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MessageCircleQuestionIcon />
                            Question
                        </CardTitle>
                        <CardDescription>Publier une question.</CardDescription>
                    </CardHeader>
                    <CardHeader className="mt-3 text-slate-500 duration-300 ease-in-out hover:text-black">
                        <Link href={route('post.image')}>Postuler une image ?</Link>
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
                                        {themes.map((theme, index) => {
                                            return (
                                                <SelectItem key={index} value={theme} className="capitalize">
                                                    {theme}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {errors.theme && <p className="mt-2 text-sm text-red-500">{errors.theme}</p>}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="title" className="after:ml-1 after:text-red-500 after:content-['*']">
                                Question?
                            </Label>
                            <Input id="title" type="text" name="title" value={data.title} onChange={handleChange} placeholder="Saisir une question" />
                            {errors.title && <p className="mt-2 text-sm text-red-500">{errors.title}</p>}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework" className="after:ml-1 after:text-red-500 after:content-['*']">
                                Description
                            </Label>
                            <Textarea
                                id="content"
                                name="content"
                                value={data.content}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Contenu..."
                                required
                            />
                            {errors.title && <p className="mt-2 text-sm text-red-500">{errors.content}</p>}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button type="reset" variant="outline" onClick={() => reset()}>
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
