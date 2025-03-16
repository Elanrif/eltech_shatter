<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostQuestionRequest;
use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostQuestionRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource image.
     */
    public function index()
    {
         return Inertia::render('posts/image',[ 'error' => session('error'),]);
    }

        /**
     * Display a listing of the resource question.
     */
    public function index_question()
    {
         return Inertia::render('posts/question',[ 'error' => session('error'),]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        // Get validated data
        $validatedData = $request->validated();

        if ($request->hasFile('image')){
            $image = $request->file('image');
            $imageName = Str::random(20) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('images', $imageName, 'public');
            $imageUrl = Storage::url($imagePath);
        }


        $post = new Post();
        $post->theme = $validatedData['theme'];
        $post->title = $validatedData['title'];
        $post->image = $imageUrl;
        $post->user_id = Auth::id();
        $post->save();

        return Redirect::route('home')->with('success', 'Post created successfully');
    }

        public function store_question(StorePostQuestionRequest $request)
    {
        try {
            // Get validated data
        $validatedData = $request->validated();

        $post = new Post();
        $post->theme = $validatedData['theme'];
        $post->title = $validatedData['title'];
        $post->content = $validatedData['content'];
        $post->user_id = Auth::id();
        $post->save();

        // Log success
        Log::info('Post created successfully', ['post' => $post]);
        
        return Redirect::route('home')->with('success', 'Post created successfully');

        } catch (\Exception $e) {
            // Log error
            Log::error('Failed to crate post', ['error' => $e->getMessage()()]);

            // It doesn't return, i don't know hay
            return Redirect::route('home')->with('error', 'Something went wrong!');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('post/show',['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
       return Inertia::render('Posts/Edit', ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        Log::info('Post updated', ['post' => $post]);
        $post->title = $request->title;
        $post->content = $request->content;
        $post->save();
        Log::info('Post updated', ['post' => $post]);
        return Redirect::route('posts.index')->with('success', 'Post updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return Redirect::route('home')->with('deleted', 'Post deleted successfully.');
    }
}
