<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\WordController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//word routes
Route::get('words/{searchTerm}/find', [WordController::class,'findWordByTerm']);
Route::get('words/{character}/starts', [WordController::class,'findWordStartWith']);
Route::get('random/word', [WordController::class,'getRandomWord']);
