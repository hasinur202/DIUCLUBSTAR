<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Models\Message;
use App\Events\SendMessage;

class MessageController extends Controller
{

    public function index(){
        $users = User::latest()->where('id','!=',Auth::user()->id)->with('avatar','friendship','friendship_requested')->get();
        return response()->json([
            'users'     => $users,
            'status_code' => 200
        ],200);
    }

    public function message($id=null){
        $user = User::findOrFail($id);
        $messages = Message::where(function($q) use($id){
            $q->where('from',Auth::user()->id);
            $q->where('to',$id);
            $q->where('type',0);
        })->orWhere(function($q) use($id){
            $q->where('from',$id);
            $q->where('to',Auth::user()->id);
            $q->where('type',1);

        })->with('user','avatar')->get();

        return response()->json([
            'messages'     => $messages,
            'user'         =>$user,
            'status_code' => 200
        ],200);

    }

    public function send(Request $request){

        $messages = Message::create([
            'from' => Auth::user()->id,
            'avatar_id' => $request->avatar_id,
            'to' => $request->user_id,
            'message' => $request->message,
            'type'=>0
        ]);
        $messages = Message::create([
            'from' => Auth::user()->id,
            'avatar_id' => $request->avatar_id,
            'to' => $request->user_id,
            'message' => $request->message,
            'type'=>1
        ]);
        broadcast(new SendMessage($messages));
        return response()->json([
            'messages'     => $messages,
            'status_code' => 200
        ],200);
    }
}
