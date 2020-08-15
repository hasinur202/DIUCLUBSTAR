<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClubPostLike;
use Illuminate\Support\Facades\Auth;
use App\User;

class ClubPostLikeController extends Controller
{
    public function store_like(Request $request){
        $liked = ClubPostLike::where(['author_id'=>Auth::user()->id,'club_post_id'=>$request->club_post_id])->first();
        if($liked){
            ClubPostLike::where(['author_id'=>Auth::user()->id,'club_post_id'=>$request->club_post_id])->delete();
            // $after_unlike = ClubPostLike::where(['user_id'=>Auth::user()->id,'post_id'=>$request->post_id])->first();
            // broadcast(new AfterUnlikeEvent($after_unlike));
            return response()->json([
                'status'=>'unlike',
                'code'=>200
            ],200);
        }else{
            $like = new ClubPostLike();
            $like->author_id = Auth::user()->id;
            $like->club_post_id = $request->club_post_id;
            $like->status = $request->status;
            $like->save();
            // broadcast(new LikeEvent($like));
            return response()->json([
                'status'=>'like',
                'code'=>200
            ],200);
        }
    }
}
