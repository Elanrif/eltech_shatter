<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::prefix('')->group(function () {
    Route::apiResource('posts', PostController::class);
    Route::post('posts/storeQuestion', [PostController::class, 'storeQuestion'])->name('posts.storeQuestion');
});