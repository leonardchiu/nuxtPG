<template>
<!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->
<div class="relative bg-white">
  <div class="lg:absolute lg:inset-0">
    <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
      <img class="h-56 w-full object-cover lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" alt="">
    </div>
  </div>
  <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
    <div class="lg:col-start-2 lg:pl-8">
      <div class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
        <p class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">What is this site about?</p>
        <h1 class="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">My Purpose</h1>
        <!-- <p class="text-lg leading-7 text-gray-500 mb-5">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p> -->
        <div class="prose text-gray-500">
          <p>On this website, I share information about how digitalisation is
            affecting Small Medium Enterprises in Singapore. Many of the
            challenges they faced and what are the available solutions in the
            market. I also talked about my experiences and discuss valuable
            information on how to go about your company's digitalisation
            process.</p>
          <p class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Digitalisation challenges faced by Small Medium Enterprises (SME) in
            Singapore</p>
          <p>In Singapore SMEs are companies that have an annual turnover of less
            than S$100 million or employed less than 200 employees. I further
            breakdown by classifying S$10 ~ S$50 million as small enterprises
            and less than S$10 million as micro enterprises. Some of these small
            and micro enterprises are in niche markets that are extremely
            profitable and many run by family members. These companies typically
            find it difficult to embark into digitalisation due the challenge to
            employ in house software trained staff to manage their
            digitalisation process. These days, professional software engineers
            are spoilt for choices as they are in high demand. Both the big tech
            companies and government agencies are snapping up these
            professionals due to the demand in technology advancement. Most of
            these small and micro companies have to get off the shelf products
            and unwilling to move forward to more advanced technologies as they
            do not have the expertise to evaluate and justify the cost of
            digitalisation. These companies are losing out in the race to
            advance their businesses due to this hurdle.</p>
           <p class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Purpose and Mission</p>  
          <p>In my course of work, I find many SMEs trapped in the above vicious
            cycle of knowing the importance of digitalisation but hindered by
            many obstacles that prevented them to move ahead. Some more daring
            SME bosses tried, a few succeeded and benefitted greatly however
            many tripped and halt their digitalisation processes with the
            impression that digitalisation are only for the medium or big
            organisations. I hope I can share more here and help these companies
            progress.</p>
          <!-- <ul>
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
          <h2>How we’re different</h2>
          <p>Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.</p>
          <p>Mauris ullamcorper imperdiet nec egestas mi quis quam ante vulputate. Vel faucibus adipiscing lacus, eget. Nunc fermentum id tellus donec. Ut metus odio sit sit varius non nunc orci. Eu, mi neque, ornare suspendisse amet, nibh. Facilisi volutpat lectus id sapien dis mauris rhoncus. Est rhoncus, interdum imperdiet ac eros, diam mauris, tortor. Risus id sit molestie magna.</p> -->
        </div>
      </div>
    </div>
  </div>
</div>

  <!-- <v-sheet color="#e8e8e8">
    <v-container class="pa-8">
      <v-row class="my-2" justify="center">
        <v-col cols="10">
          <h2>What is low code? Why it matters to SME?</h2>
          <p>
            It really takes a lot of time to develop a custom business
            application from scratch. The cost are way too high and it takes too
            long to develop a custom business application. With talent pool ever
            in demand, it has become a steep uphill task to embark into any
            meaningful digitalization.
          </p>
          <p>
            In recent years, there are many low code technologies that allows
            rapid development application. Over time, these technologies has now
            mature enough to be adopted by business operations. Learn how much
            faster and lower cost of development compared to conventional
            development cycle.
          </p>
          <h2>What is RPA?</h2>
          <p>
            RPA stands for Robotic Process Automation. In short, it is a
            technology that make computers do repetitive administrative works to
            increase productivity and to reduce human errors. Combine with RPA
            scriptings and integrations of APIs, SME can develop a suite of
            automation tasks that execute continuously and efficiently. In
            return, reduce work load for staffs and increase profits
          </p>
          <h2>What is this site about?</h2>
          <p>
            On this website, I share information about how digitalisation is
            affecting Small Medium Enterprises in Singapore. Many of the
            challenges they faced and what are the available solutions in the
            market. I also talked about my experiences and discuss valuable
            information on how to go about your company's digitalisation
            process.
          </p>
          <h2>
            Digitalisation challenges faced by Small Medium Enterprises (SME) in
            Singapore
          </h2>
          <p>
            In Singapore SMEs are companies that have an annual turnover of less
            than S$100 million or employed less than 200 employees. I further
            breakdown by classifying S$10 ~ S$50 million as small enterprises
            and less than S$10 million as micro enterprises. Some of these small
            and micro enterprises are in niche markets that are extremely
            profitable and many run by family members. These companies typically
            find it difficult to embark into digitalisation due the challenge to
            employ in house software trained staff to manage their
            digitalisation process. These days, professional software engineers
            are spoilt for choices as they are in high demand. Both the big tech
            companies and government agencies are snapping up these
            professionals due to the demand in technology advancement. Most of
            these small and micro companies have to get off the shelf products
            and unwilling to move forward to more advanced technologies as they
            do not have the expertise to evaluate and justify the cost of
            digitalisation. These companies are losing out in the race to
            advance their businesses due to this hurdle.
          </p>
          <h2>Purpose and Mission</h2>
          <p>
            In my course of work, I find many SMEs trapped in the above vicious
            cycle of knowing the importance of digitalisation but hindered by
            many obstacles that prevented them to move ahead. Some more daring
            SME bosses tried, a few succeeded and benefitted greatly however
            many tripped and halt their digitalisation processes with the
            impression that digitalisation are only for the medium or big
            organisations. I hope I can share more here and help these companies
            progress.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet> -->
</template>

<script>
export default {};
</script>
