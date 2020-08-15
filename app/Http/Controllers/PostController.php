<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Support\Str;
use Image;

class PostController extends Controller
{

    public function index(){

        $users = User::with('comments','posts')->get();
        $commentData = Comment::with('user','post')->get();
        $posts = Post::latest()->with([
            'user',
            'avatar:id,avatar',
            'comments.user:id,first_name',
            'comments.avatar:id,avatar',
            'comments.reply',
            'comments.reply.avatar:id,avatar',
            'comments.reply.user:id,first_name',
            'likes'
        ])->get();
        return response()->json([
            'commentData'=>$commentData,
            'posts'=>$posts,
            'users'=>$users
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

        if($post = new Post()){
            $post->user_id = Auth::user()->id;
            $post->avatar_id = $request->avatar_id;
            $post->text = $request->text;
            $post->status = $request->status;
            if($request->get('image1')){
                $post->image1 = $name1;
            }
            if($request->get('image2')){
                $post->image2 = $name2;
            }
            if($request->get('image3')){
                $post->image3 = $name3;
            }
            if($request->video){
                $post->video = $fileName;
            }
            $post->save();
        }

        return response()->json(
            ['status'=>'Uploaded Successfull.'
        ],200);


    }

    public function edit(Request $request,$id){
        $edit = Post::find($id);


            if($request->get('image1') !== $edit->image1){
                $image1 = $request->get('image1');
                $name1 = Str::random(5).'.' . explode('/', explode(':', substr($image1, 0, strpos($image1, ';')))[1])[1];
                $img1 = Image::make($request->image1);
                $upload_path1 = public_path()."/images/";
                $img1->save($upload_path1.$name1);
            }
            if($request->get('image2') !== $edit->image2){
                $image2 = $request->get('image2');
                $name2 = Str::random(5).'.' . explode('/', explode(':', substr($image2, 0, strpos($image2, ';')))[1])[1];
                $img2 = Image::make($request->image2);
                $upload_path2 = public_path()."/images/";
                $img2->save($upload_path2.$name2);
            }
            if($request->get('image3') !== $edit->image3){
                $image3 = $request->get('image3');
                $name3 = Str::random(5).'.' . explode('/', explode(':', substr($image3, 0, strpos($image3, ';')))[1])[1];
                $img3 = Image::make($request->image3);
                $upload_path3 = public_path()."/images/";
                $img3->save($upload_path3.$name3);
            }


        if($request->video !== $edit->video){
            $fileName = time().'.'.$request->video->getClientOriginalExtension();
            $upload_path = public_path()."/images/";
            $request->video->move($upload_path, $fileName);
        }


        $edit->user_id = Auth::user()->id;
        $edit->avatar_id = $request->avatar_id;
        $edit->text = $request->text;
        $edit->status = $request->status;
        if($request->get('image1') !== $edit->image1 ){
            $edit->image1 = $name1;
        }else{
            $edit->image1 = $request->image1;
        }
        if($request->get('image2') !== $edit->image2){
            $edit->image2 = $name2;
        }else{
            $edit->image2 = $request->image2;
        }
        if($request->get('image3') !== $edit->image3){
            $edit->image3 = $name3;
        }else{
            $edit->image3 = $request->image3;
        }
        if($request->video !== $edit->video){
            $edit->video = $fileName;
        }else{
            $edit->video = $request->video;
        }
        $edit->save();


        return response()->json(
            ['status'=>'Uploaded Successfull.'
        ],200);
}

    public function hide_post(Request $request,$id){
            $hide = Post::find($id);

            $hide->user_id = Auth::user()->id;
            $hide->avatar_id = $request->avatar_id;
            $hide->text = $request->text;
            $hide->status = $request->status;
            $hide->image1 = $request->image1;
            $hide->image2 = $request->image2;
            $hide->image3 = $request->image3;
            $hide->video = $request->video;
            $hide->save();

            return response()->json(
                ['status'=>'delete Successfull.'
            ],200);
    }
}
