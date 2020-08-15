<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\PostLike;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Events\LikeEvent;
use App\Events\AfterUnlikeEvent;

class PostLikeController extends Controller
{
    public function storeLike(Request $request){
        $liked = PostLike::where(['user_id'=>Auth::user()->id,'post_id'=>$request->post_id])->first();
        if($liked){
            PostLike::where(['user_id'=>Auth::user()->id,'post_id'=>$request->post_id])->delete();
            $after_unlike = PostLike::where(['user_id'=>Auth::user()->id,'post_id'=>$request->post_id])->first();
            broadcast(new AfterUnlikeEvent($after_unlike));
            return response()->json([
                'status'=>'unlike',
                'code'=>200
            ],200);
        }else{
            $like = new PostLike();
            $like->user_id = Auth::user()->id;
            $like->post_id = $request->post_id;
            $like->status = $request->status;
            $like->save();
            broadcast(new LikeEvent($like));
            return response()->json([
                'status'=>'like',
                'code'=>200
            ],200);
        }


    }

    // public function updateLike(Request $request,$id){
    //     $like = PostLike::find($id);
    //     $like->user_id = Auth::user()->id;
    //     $like->post_id = $request->post_id;
    //     $like->status = $request->status;
    //     $like->save();

    //     broadcast(new LikeEvent($like));

    //     return response()->json([
    //         'status'=>'Update successfull.',
    //         'code'=>200
    //     ],200);

    // }
}
