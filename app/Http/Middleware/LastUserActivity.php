<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use Carbon\Carbon;
use Cache;
class LastUserActivity
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Closure $next
     * @return mixed
     */
    public function handle($request,Closure $next)
    {
        if (Auth::check()) {
            $expiresAt = Carbon::now()->addMinutes(2);
            Cache::put('user-is-online'. Auth::user()->id, true, $expiresAt);

        }
        return $next($request);
    }
}
