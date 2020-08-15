<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Models\Friendship;
use App\Events\AddFriendEvent;
// use App\Events\AcceptFriendEvent;
class FriendshipController extends Controller
{

    public function send_request(Request $request){
        $frinedship = new Friendship();

        $frinedship->requester_id = Auth::user()->id;
        $frinedship->requested_id = $request->requested_id;
        $frinedship->save();

        broadcast(new AddFriendEvent($frinedship));
        return response()->json([
            'status'=> 'send friend request successfull.',
            'code'=>200
        ],200);
    }

    public function get_request(){
        $frinedships = Friendship::where(function($q){
            $q->where('requested_id',Auth::user()->id);
        })->orWhere(function($q){
            $q->where('requester_id',Auth::user()->id);
        })->with('user','requested_user','user.avatar','requested_user.avatar')->get();

        // broadcast(new AcceptFriendEvent($frinedships));

        return response()->json([
            'frinedships'     => $frinedships,
            'status_code' => 200
        ],200);

    }
    public function accept(Request $request,$id){
        $accept = Friendship::find($id);
        $accept->requester_id = $request->requester_id;
        $accept->requested_id = $request->requested_id;
        $accept->status = $request->status;
        $accept->save();
        return response()->json([
            'accept'     => $accept,
            'status_code' => 200
        ],200);
    }
    public function reject(Request $request,$id){
        Friendship::find($id)->delete();
        return response()->json([
            'message'=>'reject success',
            'status'=>200
        ],200);
    }
}
