<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
class News extends Model implements HasMedia,TranslatableContract
{
    use HasFactory;
    use Translatable;
    use InteractsWithMedia;

    protected $table="news";
    public $translatedAttributes = ['subject', 'content', 'url'];
}
