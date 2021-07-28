<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::apiresource('/user', UserController::class); 

Route::post('register', [UserController::class, 'register']);
Route::post('login', [LoginController::class, 'authenticate']);

Route::group(['middleware' => ['jwt.verify']], function(){
    Route::post('userid',[UserController::class, 'getAuthenticatedUser']);
});