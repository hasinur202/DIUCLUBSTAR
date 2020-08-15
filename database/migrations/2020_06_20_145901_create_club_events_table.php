<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClubEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('club_events', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('author_id');
            $table->unsignedBigInteger('club_id');
            $table->string('name');
            $table->string('photo')->nullable();
            $table->string('location',150)->nullable();
            $table->string('frequency',100)->nullable();
            $table->string('starting_date',100)->nullable();
            $table->string('starting_time',100)->nullable();
            $table->string('ending_date',100)->nullable();
            $table->string('ending_time',100)->nullable();
            $table->string('category',100)->nullable();
            $table->text('description')->nullable();
            $table->string('ticket_url')->nullable();
            $table->text('sponsor')->nullable();
            $table->text('guest')->nullable();
            $table->boolean('status')->default(0);
            $table->boolean('block')->default(0);
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
        Schema::dropIfExists('club_events');
    }
}
