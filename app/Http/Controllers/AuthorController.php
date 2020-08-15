<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Models\Author;
use App\Models\Club;
use Illuminate\Support\Facades\Auth;
use App\Events\AuthorEvent;

class AuthorController extends Controller
{
    public function index(){
        $authors = Author::with('author:id,first_name','club','author.avatar')->get();
        $authorsdt = Author::where('author_id',Auth::user()->id)->with('author:id,first_name','club','author.avatar')->get();
        return response()->json([
            'authors'=>$authors,
            'authorsdt'=>$authorsdt,
            'message'=>'success'
        ],200);
    }
    public function store(Request $request){

        $author = new Author();
        $author->user_id = Auth::user()->id;
        $author->author_id = $request->author_id;
        $author->club_id = $request->club_id;
        $author->designation = $request->designation;
        $author->save();
        broadcast(new AuthorEvent($author));
        return response()->json(
            ['status'=>'Uploaded Successfull.'
        ],200);
    }
}
