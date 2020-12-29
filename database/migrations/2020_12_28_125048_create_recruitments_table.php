<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecruitmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recruitments', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('father');   /// نام پدر
            $table->string('identity', 10);   /// شماره ملی
            $table->string('mobile', 11)->unique()->index();   // شماره موبایل
            $table->boolean('gender');  // جنسیت
            $table->string('your_address'); /// آدرس منزل
            $table->string('postal_code', 10);
            $table->string('email')->unique()->index();
            $table->string('birthday'); ///سال تولد
            $table->string('offer_earn_money')->index(); ///حقوق پیشنهادی
            $table->enum('graduation',
                ['zir_diplom','diplom','kardani','karshenasi','arshad','phd_upper']
            )->index(); ///مدرک تحصیلی
            $table->text('educational_courses'); ///دوره های آموزشی تخصصی

            $table->enum('military_service',
                ['done','exempt','not_include','undone'] /// exempt= معاف
            ); ///خدمت سربازی

            $table->string('reasons_exempt_military_service'); ///دلیل معافیت
            $table->string('reagents'); ///معرف
            $table->text('activities'); /// فعالیت های فرهنگی و سیاسی اجتماعی
            $table->text('close_friends'); ///سه نفر از دوستان صمیمی
            $table->string('criminal_background_status'); ///وضعیت پیشینه کیفری
            $table->string('knowledge_of_activity_our_company'); ///شناخت شما از فعالیت شرکت


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
        Schema::dropIfExists('recruitments');
    }
}
