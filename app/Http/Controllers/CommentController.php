<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Avatar;
use App\Models\Comment;
use App\Models\CommentReply;
use Illuminate\Support\Facades\Auth;
use App\Events\CommentEvent;
use App\Events\CommentReplyEvent;
use App\User;

class CommentController extends Controller
{
    public function index(){
        $comments = Comment::with('reply.user:id,first_name','reply.avatar:id,avatar')->get();
        return response()->json([
            'comments'=>$comments,
            'status'=>200
        ],200);
    }

    public function store(Request $request){
        $comment = new Comment();
        $comment->user_id = Auth::user()->id;
        $comment->post_id = $request->post_id;
        $comment->avatar_id = $request->avatar_id;
        $comment->comment = $request->comment;
        $comment->save();

        broadcast(new CommentEvent($comment));

        return response()->json([
            'status'=>'comment successfull.',
            'code'=>200
        ],200);

    }

    public function storeCommentReply(Request $request){
        $comment_reply = new CommentReply();
        $comment_reply->user_id = Auth::user()->id;
        $comment_reply->avatar_id = $request->avatar_id;
        $comment_reply->post_id = $request->post_id;
        $comment_reply->comment_id = $request->comment_id;
        $comment_reply->reply = $request->reply;
        $comment_reply->save();

        broadcast(new CommentReplyEvent($comment_reply));

        return response()->json([
            'status'=>'comment successfull.',
            'code'=>200
        ],200);
    }
}
