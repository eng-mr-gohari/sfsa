<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAboutTranslationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('about_translations', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('about_id')->unsigned();
            $table->string('subject')->index();
            $table->text('context');
            $table->string('locale')->index();
            $table->unique(['about_id', 'locale']);
            $table->foreign('about_id')->references('id')->on('abouts')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('about_translations');
    }
}
