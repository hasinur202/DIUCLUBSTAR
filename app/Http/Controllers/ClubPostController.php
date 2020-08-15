<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Models\ClubPost;
use App\Models\ClubPostComment;
use Illuminate\Support\Str;
use Image;

class ClubPostController extends Controller
{
    public function index(){

        // $users = User::with('comments','posts')->get();
        $commentData = ClubPostComment::with('club_author','club_post')->get();
        $club_posts = ClubPost::latest()->with([
            'author',
            'author.author',
            'author.avatar',
            'club',
            // 'avatar:id,avatar',
            'club_post_comments.club_author:id,first_name',
            // 'comments.avatar:id,avatar',
            'club_post_comments.club_post_comment_reply',
            // 'comments.reply.avatar:id,avatar',
            'club_post_comments.club_post_comment_reply.club_author:id,first_name',
            'club_post_likes'
        ])->get();
        return response()->json([
            'commentData'=>$commentData,
            'club_posts'=>$club_posts
            // 'users'=>$users
        ],200);

    }

    public function store(Request $request){

        if($request->get('image1') || $request->get('image2') || $request->get('image3')){
            if($request->get('image1')){
                $image1 = $request->get('image1');
                $name1 = Str::random(5).'.' . explode('/', explode(':', substr($image1, 0, strpos($image1, ';')))[1])[1];
                $img1 = Image::make($request->image1);
                $upload_path1 = public_path()."/images/";
                $img1->save($upload_path1.$name1);
            }
            if($request->get('image2')){
                $image2 = $request->get('image2');
                $name2 = Str::random(5).'.' . explode('/', explode(':', substr($image2, 0, strpos($image2, ';')))[1])[1];
                $img2 = Image::make($request->image2);
                $upload_path2 = public_path()."/images/";
                $img2->save($upload_path2.$name2);
            }
            if($request->get('image3')){
                $image3 = $request->get('image3');
                $name3 = Str::random(5).'.' . explode('/', explode(':', substr($image3, 0, strpos($image3, ';')))[1])[1];
                $img3 = Image::make($request->image3);
                $upload_path3 = public_path()."/images/";
                $img3->save($upload_path3.$name3);
            }

        }
        if($request->video){
            $fileName = time().'.'.$request->video->getClientOriginalExtension();
            $upload_path = public_path()."/images/";
            $request->video->move($upload_path, $fileName);
        }

        if($club_post = new ClubPost()){
            $club_post->author_id = Auth::user()->id;
            $club_post->club_id = $request->club_id;
            $club_post->text = $request->text;
            $club_post->status = $request->status;
            if($request->get('image1')){
                $club_post->image1 = $name1;
            }
            if($request->get('image2')){
                $club_post->image2 = $name2;
            }
            if($request->get('image3')){
                $club_post->image3 = $name3;
            }
            if($request->video){
                $club_post->video = $fileName;
            }
            $club_post->save();
        }

        return response()->json(
            ['status'=>'Uploaded Successfull.'
        ],200);


    }
}
