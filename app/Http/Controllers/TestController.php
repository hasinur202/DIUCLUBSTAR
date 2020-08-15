<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
class TestController extends Controller
{


    public function store(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
            'roll'=>'required'
        ]);

        $data = new Test();
        $data->name = $request->name;
        $data->roll = $request->roll;
        $data->save();
        return response(['status'=>'Account Created Successfully.'],200);
    }
}
