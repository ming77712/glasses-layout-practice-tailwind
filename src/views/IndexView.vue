<script setup>
</script>

<template>
  <main>
    <section
      class="bg-[url('@/assets/images/home-header-sm.png')] bg-cover md:bg-[url('@/assets/images/home-header.png')]"
    >
      <div class="container h-[396px] md:h-[787px]">
        <div class="flex flex-col justify-center items-end h-full">
          <p class="text-secondary md:text-4xl">Promise-Desert 2020 早春系列</p>
          <p class="text-2xl text-secondary font-bold mb-2 md:text-[64px] md:leading-[6rem] md:mb-1">看得清，才能看得遠</p>
          <button class="bg-primary text-xl text-white px-3 py-[6px]">立即購買</button>
        </div>
      </div>
    </section>
    <section class="bg-pink py-10 md:py-20">
      <div class="container">
        <h2 class="text-center text-2xl text-secondary font-bold mb-6 md:text-5xl">用專業的心，做專業的事</h2>
        <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <li>
            <span class="material-icons-outlined block text-center text-[100px] text-secondary mb-4">
              monetization_on
            </span>
            <h3 class="text-center text-2xl text-secondary font-bold mb-2">單一價格</h3>
            <p>無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。</p>
          </li>
          <li>
            <span class="material-icons-outlined block text-center text-[100px] text-secondary mb-4"> schedule </span>
            <h3 class="
            text-center text-2xl text-secondary font-bold
            mb-2">20 分鐘即可取件</h3>
            <p>
              為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快
              20 分鐘即可完成。
            </p>
          </li>
          <li>
            <span class="material-icons-outlined block text-center text-[100px] text-secondary mb-4">
              favorite_border
            </span>
            <h3 class="
            text-center text-2xl text-secondary font-bold
            mb-2">安心售後服務</h3>
            <p>
              我們提供長達 120
              天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。
            </p>
          </li>
          <li>
            <span class="material-icons-outlined block text-center text-[100px] text-secondary mb-4"> voicemail </span>
            <h3 class="
            text-center text-2xl text-secondary font-bold
            mb-2">關於鏡片</h3>
            <p>使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="py-10 md:py-20">
      <div class="container">
        <h2 class="text-center text-2xl text-secondary font-bold mb-12 md:text-5xl">經典系列鏡框</h2>
        <ul class="grid grid-cols-12 gap-6">
          <li class="col-start-1 col-span-12 md:col-start-4 md:col-span-6 lg:col-start-1 lg:col-span-4">
            <a href="#">
              <img
                class="mb-2"
                src="@/assets/images/home-section3-1.png"
                alt="optical"
              >
              <h3 class="text-5xl text-primary font-black italic text-center">OPTICAL</h3>
            </a>
          </li>
          <li class="col-start-1 col-span-12 md:col-start-4 md:col-span-6 lg:col-start-5 lg:col-span-4">
            <a href="#">
              <img
                class="mb-2"
                src="@/assets/images/home-section3-2.png"
                alt="sunglasses"
              >
              <h3 class="text-5xl text-primary font-black italic text-center">SUNGLASSES</h3>
            </a>
          </li>
          <li class="col-start-1 col-span-12 md:col-start-4 md:col-span-6 lg:col-start-9 lg:col-span-4">
            <a href="#">
              <img
                class="mb-2"
                src="@/assets/images/home-section3-3.png"
                alt="functional"
              >
              <h3 class="text-5xl text-primary font-black italic text-center">FUNCTIONAL</h3>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section
      class="py-10 bg-[url('@/assets/images/index-bg-md.png')] bg-center bg-cover md:py-20 lg:bg-[url('@/assets/images/index-bg.png')]"
    >
      <div class="container">
        <h2 class="text-center text-2xl text-white font-bold mb-6 md:text-5xl md:mb-12">聯名設計鏡框</h2>
        <ul class="grid gap-6 grid-cols-1 lg:grid-cols-2 lg:gap-0">
          <li>
            <div
              class="bg-[url('@/assets/images/home-section4-1-sm.png')] md:bg-[url('@/assets/images/home-section4-1.png')] bg-center bg-cover h-[240px]"
            ></div>
            <h3 class="bg-white text-5xl text-primary font-black italic text-center py-2">DOUBLE A+</h3>
          </li>
          <li>
            <div
              class="bg-[url('@/assets/images/home-section4-2-sm.png')] md:bg-[url('@/assets/images/home-section4-2.png')] bg-center bg-cover h-[240px]"
            ></div>
            <h3 class="bg-white text-5xl text-primary font-black italic text-center py-2">YOUTH</h3>
          </li>
        </ul>
      </div>
    </section>
    <section class="py-10 md:py-20">
      <div class="container">
        <h2 class="text-center text-2xl text-secondary font-bold mb-6 md:text-5xl md:mb-12">顧客推薦</h2>
        <ul class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <li class="border rounded shadow-[0_2px_6px_0_rgba(0,0,0,0.16)]">
            <img
              class="rounded-t"
              src="@/assets/images/home-section5-1.png"
              alt=""
            >
            <div class="rounded-b p-4">
              <p class="font-medium mb-2">Jessy</p>
              <div class="flex flex-col justify-between h-[141px]">
                <p>眼鏡品質優良，下次還會想來這邊購買！</p>
                <time class="text-sm text-[#707070]">2021/06/20</time>
              </div>
            </div>
          </li>
          <li class="border rounded shadow-[0_2px_6px_0_rgba(0,0,0,0.16)]">
            <img
              class="rounded-t"
              src="@/assets/images/home-section5-2.png"
              alt=""
            >
            <div class="rounded-b p-4">
              <p class="font-medium mb-2">凱倫</p>
              <div class="flex flex-col justify-between h-[141px]">
                <p>做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！</p>
                <time class="text-sm text-[#707070]">2021/04/18</time>
              </div>
            </div>
          </li>
          <li class="border rounded shadow-[0_2px_6px_0_rgba(0,0,0,0.16)]">
            <img
              class="rounded-t"
              src="@/assets/images/home-section5-3.png"
              alt=""
            >
            <div class="rounded-b p-4">
              <p class="font-medium mb-2">悠悠</p>
              <div class="flex flex-col justify-between h-[141px]">
                <p>謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！</p>
                <time class="text-sm text-[#707070]">2020/12/25</time>
              </div>
            </div>
          </li>
          <li class="border rounded shadow-[0_2px_6px_0_rgba(0,0,0,0.16)]">
            <img
              class="rounded-t"
              src="@/assets/images/home-section5-4.png"
              alt=""
            >
            <div class="rounded-b p-4">
              <p class="font-medium mb-2">Kyuan</p>
              <div class="flex flex-col justify-between h-[141px]">
                <p>服務很好，品質沒有任何問題，非常喜歡。</p>
                <time class="text-sm text-[#707070]">2020/10/31</time>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="bg-pink py-10 md:py-20">
      <div class="container">
        <div class="mx-auto md:w-[calc(83.333%-12px)] lg:w-[calc(50%-12px)]">
          <h2 class="text-center text-2xl text-secondary font-bold mb-6 md:text-5xl lg:mb-12">聯絡我們</h2>
          <p class="mb-6 lg:text-xl">我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。</p>
          <form>
            <label
              class="block mb-2"
              for="name"
            >姓名</label>
            <input
              type="text"
              id="name"
              placeholder="陳小明"
              class="form-input w-full border-black bg-transparent mb-4"
            >
            <label
              class="block mb-2"
              for="phone"
            >聯絡電話</label>
            <input
              type="tel"
              id="phone"
              placeholder="0912-345-678"
              class="form-input w-full border-black bg-transparent mb-4"
            >
            <label
              class="block mb-2"
              for="email"
            >電子郵件</label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              class="form-input w-full border-black bg-transparent mb-4"
            >
            <label
              class="block mb-2"
              for="feedback"
            >意見反應</label>
            <textarea
              rows="7"
              id="feedback"
              placeholder="請輸入您的意見"
              class="form-textarea w-full border-black bg-transparent mb-4"
              style="resize: none;"
            ></textarea>
            <div class="flex mb-12 md:items-center">
              <input
                type="checkbox"
                id="agree"
                class="form-checkbox border-black bg-transparent mr-1"
              />
              <label for="agree">我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。</label>
            </div>
            <button class="block bg-primary text-white mx-auto px-[142px] py-4 md:px-34 lg:px-44">確認送出</button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
