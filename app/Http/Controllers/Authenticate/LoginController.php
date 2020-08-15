<?php

namespace App\Http\Controllers\Authenticate;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Models\Avatar;
use App\Models\AvatarGallery;
use Carbon\Carbon;
use Hash;
use Session;
use Cache;
class LoginController extends Controller
{

    public function index(Request $request,$id=null){
        $search = $request->get('q');
        $user = User::where('first_name','LIKE','%'.$search.'%')->with(
        'avatar',
        'posts',
        'posts.comments',
        'posts.likes',
        'posts.comments.avatar',
        'posts.comments.user',
        'posts.comments.reply',
        'posts.comments.reply.user',
        'posts.comments.reply.avatar'
        )->get();
        $users = Auth::user();
        $dept = User::all()->unique('department');
        $allUser = User::all()->unique('batch');
        $all = User::all();
        $allUsr = User::latest()->with('avatar')->get();
        $avatars = Avatar::latest()->limit(1)->where(function($q) use($id){
            $q->where('user_id',Auth::user()->id);
        })->with('user')->get();
        $pf = Avatar::all();
        $photos = Avatar::latest()->where(function($q) use($id){
            $q->where('user_id',Auth::user()->id);
        })->with('user')->get();
        $gallery = AvatarGallery::latest()->where(function($q) use($id){
            $q->where('user_id',Auth::user()->id);
        })->get();
        return response()->json([
            'users'=>$users,
            'user'=>$user,
            'avatars'=>$avatars,
            'photos'=>$photos,
            'gallery'=>$gallery,
            'dept'=>$dept,
            'allUser'=>$allUser,
            'pf'=>$pf,
            'all'=>$all,
            'allUsr'=>$allUsr

        ],200);

    }

    public function isOnline($id){
        $d = User::find($id);
        $k =  Cache::has('user-is-online'.$d);
        return response()->json([
            'k'=>$k,
            'status'=>'k'
        ],200);

    }

    public function login(Request $request){
        $this->validate($request, [
            'email' => 'required',
            'password'=>'required|min:8'
        ]);

        if(Auth::attempt([
                'email' => $request->email,
                'password' => $request->password,
                'status'=>1
            ]))
        {

            $user = $request->user();

        	if($user->role == 'admin')
        	{
        		$tokenData = $user->createToken('Personal access token',['do_anything']);
        	}else{
        		$tokenData = $user->createToken('Personal access token',['can_create']);

        	}

        	$token = $tokenData->token;

            if($request->remember_me){
                $token->expires_at = Carbon::now()->addWeeks(1);
            }

        	if($token->save()){
        		return response()->json([

        			'user'=>$user,
        			'access_token'=>$tokenData->accessToken,
        			'token_type'=>'Bearer',
        			'token_scope'=>$tokenData->token->scopes[0],
        			'expires_at'=>Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
        			'status_code'=> 200
        		],200);
        	}else{
        		return response()->json([

        			'message'=>'Wrong token',
        			'status_code'=>500
        		],500);
        	}

            return response()->json('success');
        }
        else{
            return response()->json(['status'=>'notApprove'],401);
        }
    }

    public function edit(){
        $user = Auth::user();
        return response()->json([
            'user'=>$user,
            'status'=>'edit'
        ],200);
    }

    public function update(Request $request,$id){
        $data = User::find($id);

        $this->validate($request, [
            'first_name'=>'required',
            'last_name' => 'required',
            'id_number' =>'required',
            'email'     => 'required|email',
            'password'  =>'required|min:8',
            'birth_date'=> 'required',
            'gender'    => 'required',
            'city'      => 'required',
            'country'   => 'required'
        ]);

        if(Hash::check($request->password, Auth::user()->password)){

            $data->first_name = $request->first_name;
            $data->last_name  = $request->last_name;
            $data->id_number  = $request->id_number;
            $data->email      = $request->email;
            $data->password   = bcrypt($request->password);
            $data->birth_date = $request->birth_date;
            $data->gender     = $request->gender;
            $data->department     = $request->department;
            $data->batch     = $request->batch;
            $data->about_me     = $request->about_me;
            $data->city       = $request->city;
            $data->country    = $request->country;
            $data->save();
            return response()->json([
                'data'=>$data,
                'status'=>'update successfull'
            ],200);
        }else{
            return response()->json([
                'warning'=>'password not correct.',
                'status'=>500
            ],500);
        }


    }


    public function logout(Request $request){
        if(Auth::user()){
            Auth::user()->tokens()->delete();
            Auth::logout();
            // $request->session()->flush();
        }else{
            Auth::logout();
            // $request->session()->flush();
        }

        return response()->json([
            'message'    =>'Logout Successfull.',
            'status_code'=>200
        ]);
    }

}
