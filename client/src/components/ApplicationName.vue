<script setup lang="ts">
    const baiddySubtitles: Array<string> = [
        "Your Ally in Medical Data Revolution",
        "Empowering Practitioners with Intelligent Data Analysis",
        "Driving Medical Breakthroughs through Innovative AI",
        "Revolutionizing Healthcare with Cutting-Edge Technology",
        "Transforming Diagnostics with Data-Driven Insights",
        "Maximizing Medical Data for Better Patient Outcomes",
        "Enhancing Precision Medicine with Baiddy's AI",
        "Leading the Way in AI-Enabled Medical Discoveries",
        "Pioneering Data-Driven Healthcare Solutions",
        "Accelerating Medical Insights with Baiddy",
        "Unlocking the Potential of Medical Data Science",
        "Precision Medicine: Where Data Meets Intelligence",
        "Innovative AI for Enhanced Medical Diagnostics",
        "Elevating Healthcare with Baiddy's Advanced Analytics",
        "Advancing Medical Research through Intelligent Analysis",
        "Unleashing AI for Smarter Healthcare Decisions",
        "Empowering Healthcare Professionals with Baiddy",
        "Shaping the Future of Medical Data Interpretation",
        "Revitalizing Healthcare through Buddy-Powered AI",
        "Your Partner in Transforming Medical Analysis",
        "Buddy-Backed Innovation for Next-Gen Diagnostics",
        "Buddy-Enhanced Intelligence for Better Patient Care",
        "Elevate Your Medical Practice with Baiddy",
        "Revolutionary AI for Personalized Healthcare Solutions",
        "Innovate, Analyze, Revolutionize with Baiddy",
        "Buddy: Your Gateway to Advanced Medical Insights",
        "Reimagine Healthcare with Baiddy's Data-Driven Approach",
        "Pioneering a New Era in Medical Data Science",
        "Empowering Healthcare Professionals with Intelligent Tools",
        "Buddy-Driven Diagnostics for Superior Patient Outcomes",
        "Transforming Medical Data into Actionable Insights"
        ];
</script>

<template>
    <div class="mb-3">
        <div class="flex w-fit m-auto">
            <img src="/images/baiddy_logo.svg" class="h-[60px] mt-[16px]"/>
            <p class="main_title text-[60px] ml-3">BAIDDY</p>
        </div>
        <VueTyper class="w-fit m-auto center block" :text='baiddySubtitles' :shuffle='true' :pre-erase-delay='3000' erase-style='backspace' :erase-delay='35'></VueTyper>
    </div>
</template>

<style scoped>
.main_title {
    font-family: 'pixel';
    color: #6EC3C2;
}

@font-face {
    font-family: "pixel";
    src: url("/fonts/pixel_font.ttf");
}


</style>