import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Post } from '@/types/models/user';
import { router } from '@inertiajs/react';
import { Trash } from 'lucide-react';
import { useState } from 'react';
import { Bounce, toast } from 'react-toastify';

export function DialogDeletePost({ post }: { post: Post }) {
    const [open, setOpen] = useState<boolean>(false);

    const handleDelete = () => {
        setOpen(true);
        router.delete(route('posts.destroy', post.id), {
            onBefore: () => {},
        });
        toast.success(`Publication supprimé avec succès!`, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
        });
        setOpen(false);
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size={'sm'} variant={'outline'}>
                    <Trash className="text-red-500" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{post.title}</DialogTitle>
                    <DialogDescription>
                        Êtes-vous sûr de vouloir supprimer ce post? <br />
                        La suppression est irréversible, veuillez confirmer en bas.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Annuler
                        </Button>
                    </DialogClose>
                    <Button
                        type="button"
                        variant="outline"
                        className="bg-red-600 text-white duration-400 ease-in-out hover:bg-red-500 hover:text-white"
                        onClick={handleDelete}
                    >
                        <Trash />
                        <span>supprimer</span>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
