<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostQuestionRequest;
use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostQuestionRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Support\Carbon;
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
            $timestamp = Carbon::now()->format('Ymd_His'); // Format : AnnéeMoisJour_HeureMinuteSeconde
            $imageName = $timestamp . '_' . Str::random(5) . '.' . $image->getClientOriginalExtension();
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
       return Inertia::render('posts/edit', ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post) {
        $validatedData = $request->validated();
        $post->theme = $validatedData['theme'];
        $post->title = $validatedData['title'];

        if ($request->hasFile('image')) {
            if ($post->image) {
            //str_replace cauz, to delete image from storage Storage::disk want the relative path    
            $oldImagePath = str_replace('/storage', '', $post->image);
            Storage::disk('public')->delete($oldImagePath);
            }

            $image = $request->file('image');
            $timestamp = Carbon::now()->format('Ymd_His'); // Format : AnnéeMoisJour_HeureMinuteSeconde
            $imageName = $timestamp . '_' . Str::random(5) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('images', $imageName, 'public');
            $imageUrl = Storage::url($imagePath);

            $post->image = $imageUrl;
        }

        $post->save();
        return Redirect::route('home')->with('success', 'Post updated successfully.');
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
