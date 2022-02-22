<template>
  <home
      title="Contributing to the research community"
      itOnlyTakesMinute="It only takes minutes to share your tools"
      pleaseTypeInYourEmailToStart="Please type in your email to start:"
      :emailEmptyProps="homeData.emailEmptyProps"
      :group19Props="homeData.group19Props"
      :group20Props="homeData.group20Props"
      :property1Group54Props="homeData.property1Group54Props"
  />
</template>

<script>
export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return { homeData };
  },
};

const emailEmptyData = {
  children: "Generate Retrieval Link for this Registry",
};

const group19Data = {
  children: "Register Your Tool",
};

const group20Data = {
  children: "Send Me Retrieval Link",
};

const group502Data = {
  className: "group-51",
};

const property1Group54Data = {
  whyWeNeedYourEmail: "Why we need your email?",
  whatIfIHaveAlrea: "What if I have already used this email before?",
  group50Props: group502Data,
};

const homeData = {
  title: "Contributing to the research community",
  itOnlyTakesMinute: "It only takes minutes to share your tools",
  pleaseTypeInYourEmailToStart: "Please type in your email to start:",
  emailEmptyProps: emailEmptyData,
  group19Props: group19Data,
  group20Props: group20Data,
  property1Group54Props: property1Group54Data,
};
</script>

/****************************************** * src/components/Home.vue ******************************************/

<template>
  <div class="container-center-horizontal">
    <div class="homescreen">
      <div class="flex-col">
        <icon />
        <h1 class="titlenotosans-semi-bold-blumine-32px">{{ title }}</h1>
        <p class="it-only-takes-minutenotosans-normal-blumine-13px">{{ itOnlyTakesMinute }}</p>
        <p class="please-type-in-your-email-to-startnotosans-bold-black-13px">{{ pleaseTypeInYourEmailToStart }}</p>
        <email-empty :children="emailEmptyProps.children" />
        <group19 :children="group19Props.children" />
        <group20 :children="group20Props.children" />
        <property1-group54
            :whyWeNeedYourEmail="property1Group54Props.whyWeNeedYourEmail"
            :whatIfIHaveAlrea="property1Group54Props.whatIfIHaveAlrea"
            :group50Props="property1Group54Props.group50Props"
        />
      </div>
      <img class="mask-group" src="mask-group.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Icon,
    EmailEmpty,
    Group19,
    Group20,
    Property1Group54,
  },
  props: [
    "title",
    "itOnlyTakesMinute",
    "pleaseTypeInYourEmailToStart",
    "emailEmptyProps",
    "group19Props",
    "group20Props",
    "property1Group54Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.home
  align-items: flex-start
  background-color: $
white
  display: flex
  width: 1024px

  .flex-col
    align-items: flex-start
    display: flex
    flex-direction: column
    margin-left: 111px
    margin-top: 100px
    min-height: 664px
    position: relative
    width: 380px

  .title
    letter-spacing: 0
    margin-top: 93px
    min-height: 88px
    width: 380px

  .it-only-takes-minute
    letter-spacing: 0
    margin-top: 13px
    min-height: 18px
    width: 366px

  .please-type-in-your-email-to-start
    letter-spacing: 0
    margin-top: 87px
    min-height: 18px
    width: 367px

  .mask-group
    height: 1024px
    margin-left: 111px
    width: 422px
</style>

/****************************************** * src/components/Icon.vue ******************************************/

<template>
  <div class="icon">
    <img class="earth-cube-newblue-icon-1" src="earthcube-newblue-icon-1.png" />
    <div class="earth-cube-resource-registry-ecrrnotosans-normal-blumine-13px">
      EarthCube <br />Resource Registry (ECRR)
    </div>
  </div>
</template>

<script>
export default {
  name: "Icon",
};
</script>

<style lang="sass">
.icon
  align-items: center
  display: flex
  min-width: 214px

.earth-cube-newblue-icon-1
  height: 42px
  object-fit: cover
  width: 41px

.earth-cube-resource-registry-ecrr
  letter-spacing: 0
  margin-left: 20px
  min-height: 36px
  min-width: 153px
</style>

/****************************************** * src/components/EmailEmpty.vue ******************************************/

<template>
  <div class="component-1">
    <div class="rectangle-35border-1px-gray-stoke"></div>
    <p class="generate-retrieval-lnotosans-normal-star-dust-13px">{{ children }}</p>
  </div>
</template>

<script>
export default {
  name: "EmailEmpty",
  props: ["children"],
};
</script>

<style lang="sass">
@import '../../variables'

.component-1
  align-items: flex-start
  background-color: $
white
  display: flex
  flex-direction: column
  height: 72px
  margin-top: 10px
  width: 380px

  .rectangle-35
    background-color: $gray-2
    border-radius: 4px
    height: 44px
    width: 380px

  .generate-retrieval-l
    letter-spacing: 0
    margin-top: 10px
    min-height: 18px
</style>

/****************************************** * src/components/Group19.vue ******************************************/

<template>
  <div class="group-19">
    <div class="frame-1">
      <div class="start-a-new-surveynotosans-medium-white-16px">{{ children }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group19",
  props: ["children"],
};
</script>

<style lang="sass">
@import '../../variables'

.group-19
  align-items: flex-start
  display: flex
  margin-top: 50px
  min-width: 380px

.frame-1
  align-items: center
  background-color: $title
  border-radius: 4px
  box-shadow: 0px 2px 4px
#70a5c999
  display: flex
  height: 44px
  min-width: 380px
  padding: 0 10px

  .start-a-new-survey
    letter-spacing: 0
    min-height: 22px
    text-align: center
    width: 360px
</style>

/****************************************** * src/components/Group20.vue ******************************************/

<template>
  <div class="group-20">
    <div class="send-me-retrieval-link">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "Group20",
  props: ["children"],
};
</script>

<style lang="sass">
@import '../../variables'

.group-20
  align-items: center
  background-color: $fill-2
  border-radius: 4px
  display: flex
  height: 44px
  margin-top: 20px
  min-width: 380px
  padding: 0 103px

.send-me-retrieval-link
  color: $title
  font-family: $font-family-noto_sans
  font-size: $font-size-l
  font-weight: 500
  letter-spacing: 0
  min-height: 22px
  min-width: 174px
  text-align: center
</style>

/****************************************** * src/components/Property1Group54.vue ******************************************/

<template>
  <div class="component-12">
    <div class="group-container">
      <group50 />
      <group50 :className="group50Props.className" />
    </div>
    <div class="flex-col-1notosans-normal-star-dust-13px">
      <p class="why-we-need-your-email">{{ whyWeNeedYourEmail }}</p>
      <p class="what-if-i-have-alrea">{{ whatIfIHaveAlrea }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Property1Group54",
  components: {
    Group50,
  },
  props: ["whyWeNeedYourEmail", "whatIfIHaveAlrea", "group50Props"],
};
</script>

<style lang="sass">
.component-12
  align-items: center
  display: flex
  height: 45px
  margin-top: 20px
  min-width: 379px

.group-container
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-top: 1.0px
  min-height: 42px
  position: relative
  width: 15px

.flex-col-1
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 10px
  min-height: 45px
  width: 354px

.why-we-need-your-email
  letter-spacing: 0
  min-height: 18px
  width: 354px

.what-if-i-have-alrea
  letter-spacing: 0
  margin-top: 9px
  min-height: 18px
  width: 354px
</style>

/****************************************** * src/components/Group50.vue ******************************************/

<template>
  <div :class="[`group-50 border-1px-confirmstrokeorillustration`, className || ``]">
    <div class="line-container">
      <img class="line-20" src="line-20.svg" />
      <img class="line-21" src="line-21.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Group50",
  props: ["className"],
};
</script>

<style lang="sass">
.group-50
  align-items: center
  border-radius: 7.5px
  display: flex
  height: 15px
  min-width: 15px
  padding: 0 4px

.line-container
  height: 7px
  position: relative
  width: 7px

.line-20
  height: 1px
  left: 0
  position: absolute
  top: 4px
  width: 7px

.line-21
  height: 7px
  left: 2px
  position: absolute
  top: 0
  width: 1px

.group-50.group-51
  margin-top: 12px
</style>

/****************************************** * src/main.js ******************************************/ import App from "./App.vue";import
"../styleguide.sass" import "../globals.sass" Vue.config.productionTip = false; new Vue({ render: h => h(App),}).$mount("#app");
