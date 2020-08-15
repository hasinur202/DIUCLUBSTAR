<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Models\Avatar;
use App\Models\AvatarGallery;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Image;

class AvatarController extends Controller
{

    public function avatar_store(Request $request)
    {

       if($request->get('avatar') && $request->get('cover_photo'))
       {
          $image1 = $request->get('avatar');
          $name1 = Str::random(5).'.' . explode('/', explode(':', substr($image1, 0, strpos($image1, ';')))[1])[1];
          $img1 = Image::make($request->avatar);
          $upload_path1 = public_path()."/images/";
          $img1->save($upload_path1.$name1);

          $img1->save($upload_path1.$name1);
            $image2 = $request->get('cover_photo');
            $name2 = Str::random(5).'.' . explode('/', explode(':', substr($image2, 0, strpos($image2, ';')))[1])[1];
            $img2 = Image::make($request->cover_photo);
            $upload_path2 = public_path()."/images/";
            $img2->save($upload_path2.$name2);

        }elseif($request->get('cover_photo')){
            $image2 = $request->get('cover_photo');
            $name2 = Str::random(5).'.' . explode('/', explode(':', substr($image2, 0, strpos($image2, ';')))[1])[1];
            $img2 = Image::make($request->cover_photo);
            $upload_path2 = public_path()."/images/";
            $img2->save($upload_path2.$name2);
        }elseif($request->get('avatar')){
            $image1 = $request->get('avatar');
            $name1 = Str::random(5).'.' . explode('/', explode(':', substr($image1, 0, strpos($image1, ';')))[1])[1];
            $img1 = Image::make($request->avatar);
            $upload_path1 = public_path()."/images/";

        }

        if($post = new Avatar() && $avatar = new AvatarGallery()){
            $post = new Avatar();
            $avatar = new AvatarGallery();
            $post->user_id = Auth::user()->id;
            $avatar->user_id = Auth::user()->id;

            if($request->get('avatar') && $request->get('cover_photo')){
                $post->avatar = $name1;
                $avatar->avatar = $name1;
                $avatar->cover_photo = $name2;
                $post->cover_photo = $name2;
            }elseif($request->get('avatar')){
                $post->avatar = $name1;
                $avatar->avatar = $name1;
            }
            $post->save();
            $avatar->save();
        }


        return response()->json(
            ['status'=>'Uploaded Successfull.'
        ],200);
    }

    public function avatar_update(Request $request,$id)
    {
        $avatar = Avatar::find($id);

       if($request->get('avatar') != $avatar->avatar){

          $image1 = $request->get('avatar');
          $name1 = Str::random(5).'.' . explode('/', explode(':', substr($image1, 0, strpos($image1, ';')))[1])[1];
          $img1 = Image::make($request->avatar);
          $upload_path1 = public_path()."/images/";
          $img1->save($upload_path1.$name1);

        }elseif($request->get('cover_photo') != $avatar->cover_photo){
            $image2 = $request->get('cover_photo');
            $name2 = Str::random(5).'.' . explode('/', explode(':', substr($image2, 0, strpos($image2, ';')))[1])[1];
            $img2 = Image::make($request->cover_photo);
            $upload_path2 = public_path()."/images/";
            $img2->save($upload_path2.$name2);
        }

        if($avatar && $post = new AvatarGallery()){
            $avatar->user_id = Auth::user()->id;
            $post->user_id = Auth::user()->id;

            if($avatar->avatar && $request->get('cover_photo') != $avatar->cover_photo){
                $avatar->avatar = $avatar->avatar;
                $post->avatar = $avatar->avatar;
                $avatar->cover_photo = $name2;
                $post->cover_photo = $name2;

            }elseif($avatar->cover_photo && $request->get('avatar') != $avatar->avatar){
                $avatar->cover_photo = $avatar->cover_photo;
                $post->cover_photo = $avatar->cover_photo;
                $avatar->avatar = $name1;
                $post->avatar = $name1;
            }
            $avatar->save();
            $post->save();
        }


        return response()->json(
            ['status'=>'Uploaded Successfull.'
        ],200);
    }

}
