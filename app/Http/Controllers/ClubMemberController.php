<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Models\Club;
use App\Models\ClubMember;
use Illuminate\Support\Facades\Auth;
use App\Events\ClubMemberEvent;

class ClubMemberController extends Controller
{
    public function index(){
        $all_members = ClubMember::latest()->with('user:id,first_name,department,batch','user.avatar')->get();
        // $count_member_request = ClubMember::where(['status'=>0])->count();
        return response()->json([
            'all_members'=>$all_members
        ]);
    }
    public function count_member_request($id){
        $count_request = ClubMember::where([
            'club_id'=>$id,
            'status'=>0
        ])->count();
        return response()->json([
            'count_request'=>$count_request
        ]);
    }
    public function check(){
        $data = ClubMember::latest()->where('user_id',Auth::user()->id)->get();
        return response()->json([
            "status"=>"pending",
            'data'=>$data
        ]);

    }
    public function store(Request $request){

        $club_member = new ClubMember();
        $club_member->user_id = Auth::user()->id;
        $club_member->club_id = $request->club_id;
        $club_member->status = $request->status;
        $club_member->save();
        broadcast(new ClubMemberEvent($club_member));
        return response()->json([
                'status'=>'Uploaded Successfull.',
                'club_member'=> $club_member
        ],200);
    }
    public function approve(Request $request,$id){
        $member = ClubMember::find($id);
        $member->author_id = Auth::user()->id;
        $member->user_id = $request->user_id;
        $member->club_id = $request->club_id;
        $member->status = $request->status;
        $member->save();
        return response()->json(
            ['status'=>'Uploaded Successfull.'
        ],200);
    }
    public function dismis(Request $request,$id){

        ClubMember::find($id)->delete();
        return response()->json([
            'message'=>'reject success',
            'status'=>200
        ],200);
    }
    public function count($id){
        $get = ClubMember::where([
            'club_id'=>$id,
            'status'=>1
        ])->count();

        return response()->json([
            'get'=>$get
        ]);


    }
    public function block($id){
        ClubMember::find($id)->delete();
        return response()->json([
            'message'=>'delete successfull'
        ],200);
    }
}
