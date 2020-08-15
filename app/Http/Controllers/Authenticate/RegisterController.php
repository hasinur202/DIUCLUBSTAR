<?php

namespace App\Http\Controllers\Authenticate;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Support\Str;
use Image;
class RegisterController extends Controller
{

    public function register(Request $request)
    {
        $this->validate($request, [
            'first_name'=>'required',
            'last_name' => 'required',
            'id_number' =>'required|unique:users',
            'email'     => 'required|email',
            'password'  =>'required|min:8',
            'birth_date'=> 'required',
            'gender'    => 'required',
            'city'      => 'required',
            'country'   => 'required',
            'image1'   => 'required',
            'image2'   => 'required'
        ]);

          $image1 = $request->get('image1');
          $name1 = Str::random(5).'.' . explode('/', explode(':', substr($image1, 0, strpos($image1, ';')))[1])[1];
          $img1 = Image::make($request->image1);
          $upload_path1 = public_path()."/images/";
          $img1->save($upload_path1.$name1);

          $image2 = $request->get('image2');
          $name2 = Str::random(5).'.' . explode('/', explode(':', substr($image2, 0, strpos($image2, ';')))[1])[1];
          $img2 = Image::make($request->image2);
          $upload_path2 = public_path()."/images/";
          $img2->save($upload_path2.$name2);

        $data = new User();
        $data->first_name = $request->first_name;
        $data->last_name  = $request->last_name;
        $data->id_number  = $request->id_number;
        $data->email      = $request->email;
        $data->password   = bcrypt($request->password);
        $data->birth_date = $request->birth_date;
        $data->gender     = $request->gender;
        $data->city       = $request->city;
        $data->country    = $request->country;
        $data->image1    = $name1;
        $data->image2    = $name2;

        if($data->save()){
            // Auth::login($data);
            return response()->json(['status'=>'Account Created Successfully.'],200);

        }else{
            return response()->json(['status'=>'wrong.'],500);
        }

    }

    public function approve_register_user(Request $request,$id){
        $ap = User::find($id);

        $ap->first_name = $request->first_name;
        $ap->last_name  = $request->last_name;
        $ap->id_number  = $request->id_number;
        $ap->email      = $request->email;
        $ap->password   = bcrypt($request->password);
        $ap->birth_date = $request->birth_date;
        $ap->gender     = $request->gender;
        $ap->city       = $request->city;
        $ap->country    = $request->country;
        $ap->image1    = $request->image1;
        $ap->image2    = $request->image2;
        $ap->status    = $request->status;
        $ap->save();
        return response()->json([
            'status'=>'success.',
            'ap'=>$ap
        ],200);

    }

    public function reject_register_user($id){
        $rej = User::find($id)->delete();

        return response()->json([
            'status'=>'rejected',
            'rej'=>$rej
        ],200);

    }

    public function delete_register_user($id){
        $del = User::find($id)->delete();

        return response()->json([
            'status'=>'delete.',
            'del'=>$del
        ],200);

    }
}
