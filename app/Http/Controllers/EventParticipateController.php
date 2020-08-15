<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EventParticipate;
use App\Models\Notification;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Support\Str;
use Image;
use App\Events\ParticipateRequestApprovalEvent;
// use App\Events\ParticipateRequestApprovalNotiEvent;

class EventParticipateController extends Controller
{

    public function index(){

        // $users = User::with('comments','posts')->get();
        // $commentData = Comment::with('user','post')->get();
        $skill = EventParticipate::latest()->with([
            'user:id,first_name,department,batch',
            'user.avatar',
            'club:id,club_name',
            'club_event'
        ])->get();
        $count_skill = EventParticipate::where(['status'=>0])->get();
        return response()->json([
            // 'commentData'=>$commentData,
            'skill'=>$skill,
            'count_skill'=>count($count_skill)
        ],200);

    }
    public function noti(){
        $noti = Notification::latest()
        ->where([
            'user_id'=>Auth::user()->id
            ])->get();
        $notiCount = Notification::latest()
            ->where([
                'user_id'=>Auth::user()->id,
                'status'=>0
                ])->count();
        // broadcast(new ParticipateRequestApprovalNotiEvent($noti));

        return response()->json([
            'noti'=>$noti,
            'notiCount'=>$notiCount,
            'message'=> 'success'
        ],200);
    }

    public function store(Request $request){

        if($request->get('image1')){
            $image1 = $request->get('image1');
            $name1 = Str::random(5).'.' . explode('/', explode(':', substr($image1, 0, strpos($image1, ';')))[1])[1];
            $img1 = Image::make($request->image1)->resize(300, 300);
            $upload_path1 = public_path()."/images/";
            $img1->save($upload_path1.$name1);
        }elseif($request->get('image2')){
            $image2 = $request->get('image2');
            $name2 = Str::random(5).'.' . explode('/', explode(':', substr($image2, 0, strpos($image2, ';')))[1])[1];
            $img2 = Image::make($request->image2)->resize(500, 1000);
            $upload_path2 = public_path()."/images/";
            $img2->save($upload_path2.$name2);
        }elseif($request->get('image3')){
            $image3 = $request->get('image3');
            $name3 = Str::random(5).'.' . explode('/', explode(':', substr($image3, 0, strpos($image3, ';')))[1])[1];
            $img3 = Image::make($request->image3)->resize(500, 1000);
            $upload_path3 = public_path()."/images/";
            $img3->save($upload_path3.$name3);
        }
        if($request->video){
            $fileName = time().'.'.$request->video->getClientOriginalExtension();
            $upload_path = public_path()."/images/";
            $request->video->move($upload_path, $fileName);
        }

        if($eve_participate = new EventParticipate()){
            $eve_participate->user_id = Auth::user()->id;
            $eve_participate->club_id = $request->club_id;
            $eve_participate->event_id = $request->event_id;
            if($request->get('image1')){
                $eve_participate->image1 = $name1;
            }elseif($request->get('image2')){
                $eve_participate->image2 = $name2;
            }elseif($request->get('image3')){
                $eve_participate->image3 = $name3;
            }elseif($request->video){
                $eve_participate->video = $fileName;
            }
            $eve_participate->save();
        }

        return response()->json(
            ['status'=>'Uploaded Successfull.'
        ],200);


    }

    public function approve(Request $request,$id){
        $approve_skill = EventParticipate::find($id);
        $approve_skill->user_id = $request->user_id;
        $approve_skill->club_id = $request->club_id;
        $approve_skill->event_id = $request->event_id;
        $approve_skill->image1 = $request->image1;
        $approve_skill->image2 = $request->image2;
        $approve_skill->image3 = $request->image3;
        $approve_skill->video = $request->video;
        $approve_skill->status = $request->status;
        $approve_skill->save();
        $noti = new Notification();
        $noti->user_id = $request->user_id;
        $noti->club_id = $request->club_id;
        $noti->event_id = $request->event_id;
        $noti->noti = $request->noti;
        $noti->save();
        broadcast(new ParticipateRequestApprovalEvent($approve_skill));

        return response()->json(
            ['status'=>'Update Successfull.'
        ],200);


    }

    public function update(Request $request,$id){
        $notiUpdate = Notification::find($id);
        $notiUpdate->user_id = $request->user_id;
        $notiUpdate->club_id = $request->club_id;
        $notiUpdate->event_id = $request->event_id;
        $notiUpdate->noti = $request->noti;
        $notiUpdate->status = $request->status;
        $notiUpdate->save();

        return response()->json(
            ['status'=>'Update Successfull.'
        ],200);
    }
    public function reject($id){
        $reject = EventParticipate::find($id)->delete();

        return response()->json(
            ['status'=>'reject Successfull.'
        ],200);


    }
}
