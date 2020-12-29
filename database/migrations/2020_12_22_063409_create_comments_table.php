<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->boolean('checked')->index(); // for visible item
            $table->boolean('read')->index(); // read by admin
            $table->bigInteger('user_id')->index(); // send user id
            $table->bigInteger('product_id')->index();
            $table->string('title');
            $table->string('context')->nullable();
            $table->ipAddress('user_ip')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('details');
    }
}
