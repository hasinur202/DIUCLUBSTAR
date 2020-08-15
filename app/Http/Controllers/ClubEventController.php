<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Models\ClubEvent;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Image;
// use App\Events\ClubEvent;

class ClubEventController extends Controller
{
    public function index(){
        $events = ClubEvent::latest()->with('author:id,first_name','club:id,club_name','author.author')->get();
        $count_event = ClubEvent::all();
        return response()->json([
            'events'=>$events,
            'count_event'=>count($count_event),
            'message'=>'success'
        ],200);
    }
    public function store(Request $request){

        $this->validate($request, [
            'photo'=>'required',
            'name'=>'required|unique:club_events',
            'location'=>'required',
            'starting_date'=>'required',
            'starting_time'=>'required',
            'ending_date'=>'required',
            'ending_time'=>'required'
        ]);

        if($request->get('photo')){
            $image1 = $request->get('photo');
            $name1 = Str::random(5).'.' . explode('/', explode(':', substr($image1, 0, strpos($image1, ';')))[1])[1];
            $img1 = Image::make($request->photo)->resize(820, 312);
            $upload_path1 = public_path()."/images/";
            $img1->save($upload_path1.$name1);
        }

        $club_event = new ClubEvent();
        $club_event->author_id = $request->author_id;
        $club_event->club_id = $request->club_id;
        $club_event->name = $request->name;
        $club_event->location = $request->location;
        $club_event->frequency = $request->frequency;
        $club_event->starting_date = $request->starting_date;
        $club_event->starting_time = $request->starting_time;
        $club_event->ending_date = $request->ending_date;
        $club_event->ending_time = $request->ending_time;
        $club_event->category = $request->category;
        $club_event->description = $request->description;
        $club_event->ticket_url = $request->ticket_url;
        $club_event->sponsor = $request->sponsor;
        $club_event->guest = $request->guest;
        $club_event->status = $request->status;
        $club_event->photo = $name1;
        $club_event->save();
        // broadcast(new ClubEvent($club));
        return response()->json([
            'status'=>'Uploaded Successfull.'
        ],200);
    }
    public function update(Request $request,$id){
        $club_event = ClubEvent::find($id);

        if($request->get('photo') !== $club_event->photo){
            $image1 = $request->get('photo');
            $name1 = Str::random(5).'.' . explode('/', explode(':', substr($image1, 0, strpos($image1, ';')))[1])[1];
            $img1 = Image::make($request->photo)->resize(820, 312);
            $upload_path1 = public_path()."/images/";
            $img1->save($upload_path1.$name1);
            $club_event->photo = $name1;
        }else{
            $club_event->photo =  $request->photo;
        }


        $club_event->author_id = $request->author_id;
        $club_event->club_id = $request->club_id;
        $club_event->name = $request->name;
        $club_event->location = $request->location;
        $club_event->frequency = $request->frequency;
        $club_event->starting_date = $request->starting_date;
        $club_event->starting_time = $request->starting_time;
        $club_event->ending_date = $request->ending_date;
        $club_event->ending_time = $request->ending_time;
        $club_event->category = $request->category;
        $club_event->description = $request->description;
        $club_event->ticket_url = $request->ticket_url;
        $club_event->sponsor = $request->sponsor;
        $club_event->guest = $request->guest;
        $club_event->status = $request->status;

        $club_event->save();
        // broadcast(new ClubEvent($club));
        return response()->json([
            'status'=>'Update Successfull.'
        ],200);
    }
    public function delete($id){
        $del = ClubEvent::find($id);
        $del->delete();
        return response()->json([
            'status'=>'Delete Successfull.'
        ],200);
    }
}
