<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name',100);
            $table->string('last_name',100);
            $table->string('id_number',50);
            $table->string('email',150)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('birth_date',50);
            $table->string('gender',50);
            $table->string('department',50)->nullable();
            $table->string('batch',50)->nullable();
            $table->string('city',50);
            $table->string('country',50);
            $table->string('about_me')->nullable();
            $table->string('role')->default('admin');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }

// Encryption keys generated successfully.
// Personal access client created successfully.
// Client ID: 1
// Client secret: ywea3pDi3TCCpO7PifOtpcj1l9dcCr5qOK6xMhWA
// Password grant client created successfully.
// Client ID: 2
// Client secret: c3aEndFje3M43FF7YUcyPs7NdIcU6O79sBzpAClv

}
