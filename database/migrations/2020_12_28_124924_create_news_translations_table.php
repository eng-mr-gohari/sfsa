<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsTranslationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news_translations', function (Blueprint $table) {
            $table->id();
            $table->integer('news_id')->unsigned();
            $table->string('locale')->index();
            $table->string('subject')->index();
            $table->text('content');
            $table->string('url')->unique()->index();
            $table->unique(['news_id', 'locale']);
            $table->foreign('news_id')->references('id')->on('news')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news_translations');
    }
}
