<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostController;

Route::prefix('api')->group(function () {
    Route::apiResource('posts', PostController::class);
});