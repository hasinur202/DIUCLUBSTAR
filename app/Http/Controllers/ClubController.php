<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Models\Club;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Image;
use App\Events\ClubEvent;

class ClubController extends Controller
{

    public function index(){
        $clubs = Club::latest()->with('club_members','club_members.user')->get();

        return response()->json([
            'clubs'=>$clubs,
            'message'=>'success'
        ],200);
    }

    public function store(Request $request){

        $this->validate($request, [
            'cover'=>'required',
            'club_name'=>'required|unique:clubs'
        ]);

        if($request->get('cover')){
            $image1 = $request->get('cover');
            $name1 = Str::random(5).'.' . explode('/', explode(':', substr($image1, 0, strpos($image1, ';')))[1])[1];
            $img1 = Image::make($request->cover)->resize(820, 312);
            $upload_path1 = public_path()."/images/";
            $img1->save($upload_path1.$name1);
        }

        $club = new Club();
        $club->user_id = Auth::user()->id;
        $club->club_name = $request->club_name;
        $club->dept = $request->dept;
        $club->about = $request->about;
        $club->cover = $name1;
        $club->save();
        broadcast(new ClubEvent($club));
        return response()->json(
            ['status'=>'Uploaded Successfull.'
        ],200);
    }

    public function Update(Request $request,$id){
        $club = Club::find($id);
        if($request->get('cover') != $club->cover){
            $image1 = $request->get('cover');
            $name1 = Str::random(5).'.' . explode('/', explode(':', substr($image1, 0, strpos($image1, ';')))[1])[1];
            $img1 = Image::make($request->cover)->resize(820, 312);
            $upload_path1 = public_path()."/images/";
            $img1->save($upload_path1.$name1);
        }

        $club->user_id = Auth::user()->id;
        $club->club_name = $request->club_name;
        $club->dept = $request->dept;
        $club->about = $request->about;
        if($request->get('cover') != $club->cover){
            $club->cover = $name1;
        }elseif($request->get('cover') == $club->cover){
            $club->cover = $request->cover;
        }

        $club->save();
        broadcast(new ClubEvent($club));
        return response()->json(
            ['status'=>'Update Successfull.'
        ],200);
    }

    // public function club_show($id){

    //     $showClub = Club::find($id);
    //     return response()->json([
    //         'showClub'=>$showClub
    //     ],200);
    // }
}
