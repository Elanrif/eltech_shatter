<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::prefix('')->group(function () {
    Route::resource('posts', PostController::class);
});