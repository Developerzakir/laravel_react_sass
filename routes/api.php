<?php

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\WordController;


Route::middleware('auth:sanctum')->group(function() {
    //user routes
    Route::get('user', function (Request $request) {
        return [
            'user' => UserResource::make($request->user()),
            'access_token' => $request->bearerToken()
        ];
    });
    Route::post('user/logout', [UserController::class,'logout']);

});

//word routes
Route::get('words/{searchTerm}/find', [WordController::class,'findWordByTerm']);
Route::get('words/{character}/starts', [WordController::class,'findWordStartWith']);
Route::get('random/word', [WordController::class,'getRandomWord']);
