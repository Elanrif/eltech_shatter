import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Post } from '@/types/models/user';
import { Edit } from 'lucide-react';
import { useState } from 'react';
import { CardPostImageEditForm } from '../forms/card-post-image-edit-form';
import { CardPostQuestionEditForm } from '../forms/card-post-question-edit-form';

export function DialogEditPost({ post }: { post: Post }) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size={'sm'} variant={'outline'}>
                    <Edit className="text-blue-500" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl">
                {post.image ? (
                    <CardPostImageEditForm post__={post} handleOpen={setOpen} />
                ) : (
                    <CardPostQuestionEditForm post__={post} handleOpen={setOpen} />
                )}
            </DialogContent>
        </Dialog>
    );
}
