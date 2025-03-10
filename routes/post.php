<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('posts', [PostController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('posts.index');
    
Route::apiResource('posts', PostController::class)->except(['index']);

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('posts/question', [PostController::class, 'index_question'])->name('posts.index_question');
    Route::post('posts/question', [PostController::class, 'store_question'])->name('posts.store_question');

});

