<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClubPost;
// use App\Models\Avatar;
use App\Models\ClubPostComment;
use App\Models\ClubPostCommentReply;
// use App\Models\CommentReply;
use Illuminate\Support\Facades\Auth;
use App\Events\ClubPostCommentEvent;
use App\Events\ClubPostCommentReplyEvent;
use App\User;

class ClubPostCommentController extends Controller
{
    public function index(){
        $club_post_comments = ClubPostComment::with(
            'club_author:id,first_name',
            'club_author.avatar',
            'club_post:id',
            'club_post_comment_reply',
            'club_post_comment_reply.club_author',
            'club_post_comment_reply.avatar'

            )->get();
        $club_post_comment_reply = ClubPostCommentReply::with(
            'club_author:id,first_name',
            'club_author.avatar'
            )->get();
        return response()->json([
            'club_post_comments'=>$club_post_comments,
            'club_post_comment_reply'=>$club_post_comment_reply,
            'status'=>200
        ],200);
    }

    public function store(Request $request){
        $club_post_comment = new ClubPostComment();
        $club_post_comment->author_id = Auth::user()->id;
        $club_post_comment->club_post_id = $request->club_post_id;
        $club_post_comment->club_id = $request->club_id;
        $club_post_comment->comment = $request->comment;
        $club_post_comment->save();

        broadcast(new ClubPostCommentEvent($club_post_comment));

        return response()->json([
            'status'=>'comment successfull.',
            'code'=>200
        ],200);

    }

    public function store_club_post_comment_reply(Request $request){
        $club_post_comment_reply = new ClubPostCommentReply();
        $club_post_comment_reply->avatar_id = $request->avatar_id;
        $club_post_comment_reply->author_id = Auth::user()->id;
        $club_post_comment_reply->club_post_id = $request->club_post_id;
        $club_post_comment_reply->club_id = $request->club_id;
        $club_post_comment_reply->club_post_comment_id = $request->club_post_comment_id;
        $club_post_comment_reply->reply = $request->reply;
        $club_post_comment_reply->save();

        broadcast(new ClubPostCommentReplyEvent($club_post_comment_reply));

        return response()->json([
            'status'=>'comment successfull.',
            'code'=>200
        ],200);
    }
}
