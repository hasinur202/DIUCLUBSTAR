<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Setting;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Support\Str;
use Image;

class SettingController extends Controller
{
    public function index(){
        $settings = Setting::latest()->with('user')->get();

        return response()->json([
            'settings'=>$settings,
            'message'=>'success'
        ],200);
    }

    public function store(Request $request){

        $this->validate($request, [
            'logo'=>'required',
            'email'=>'required|unique:settings',
            'phn_number'=>'required',
            'location'=>'required'
        ]);

        if($request->get('logo')){
            $image1 = $request->get('logo');
            $name1 = Str::random(5).'.' . explode('/', explode(':', substr($image1, 0, strpos($image1, ';')))[1])[1];
            $img1 = Image::make($request->logo)->resize(131, 40);
            $upload_path1 = public_path()."/images/";
            $img1->save($upload_path1.$name1);
        }

        $setting = new Setting();
        $setting->user_id = Auth::user()->id;
        $setting->email = $request->email;
        $setting->phn_number = $request->phn_number;
        $setting->location = $request->location;
        $setting->logo = $name1;
        $setting->save();
        return response()->json([
            'setting'=> $setting,
            'status'=>'Uploaded Successfull.'
        ],200);
    }

    public function Update(Request $request,$id){
        $setting = Setting::find($id);
        if($request->get('logo')){
            $image1 = $request->get('logo');
            $name1 = Str::random(5).'.' . explode('/', explode(':', substr($image1, 0, strpos($image1, ';')))[1])[1];
            $img1 = Image::make($request->logo)->resize(131, 40);
            $upload_path1 = public_path()."/images/";
            $img1->save($upload_path1.$name1);
        }

        $setting->user_id = Auth::user()->id;
        $setting->email = $request->email;
        $setting->phn_number = $request->phn_number;
        $setting->location = $request->location;
        if($request->get('logo') != $setting->logo){
            $setting->logo = $name1;
        }elseif($request->get('logo') == $setting->logo){
            $setting->logo = $request->logo;
        }

        $setting->save();
        return response()->json([
            'setting'=> $setting,
            'status'=>'Update Successfull.'
        ],200);
    }
}
