import{a as b}from"./chunk-33P42CIT.js";import{a as y}from"./chunk-7FMS4CUK.js";import{a as u,b as g,c as x}from"./chunk-6Y23LRM7.js";import"./chunk-NX7RKATO.js";import{c as f}from"./chunk-PK46AYFH.js";import"./chunk-OJBPGWD7.js";import{Ea as d,Ja as h,N as l,S as c,Ua as a,Ya as r,Za as o,_a as i,mb as e,za as m}from"./chunk-JA4FXS4Q.js";var p=class s{constructor(t){this.http=t}API_URL="https://ap-south-1.cdn.hygraph.com/content/cm8mryy5704dg07wamzm4virr/master";getPosts(){return this.http.post(this.API_URL,{query:`
      {
        posts(orderBy: createdAt_DESC, first: 3) {
          id
          postTitle
          postDesc
          postImage {
            url
          }
          postLink
        }
      }
    `})}getPodcasts(){return this.http.post(this.API_URL,{query:`
      {
        spotifyPodcasts(orderBy: createdAt_DESC, first: 3) {
          id
          embedLink
        }
      }
    `})}getVideos(){return this.http.post(this.API_URL,{query:`
      {
        youTubeVideos(orderBy: createdAt_DESC, first: 3) {
          id
          postTitle
          postDesc
          postImage {
            url
          }
          postLink
        }
      }
    `})}static \u0275fac=function(n){return new(n||s)(c(f))};static \u0275prov=l({token:s,factory:s.\u0275fac,providedIn:"root"})};var v=class s{constructor(t){this.blogs=t;this.getBlogPosts(),this.getYoutubeVideos(),this.getSpotifyPodcasts()}posts=[];podcasts=[];videos=[];isTileLoading=!0;getBlogPosts(){this.blogs.getPosts().subscribe(t=>{this.isTileLoading=!1,this.posts=t.data.posts})}getYoutubeVideos(){this.blogs.getVideos().subscribe(t=>{this.isTileLoading=!1,this.videos=t.data.youTubeVideos})}getSpotifyPodcasts(){this.blogs.getPodcasts().subscribe(t=>{this.isTileLoading=!1,this.podcasts=t.data.spotifyPodcasts})}static \u0275fac=function(n){return new(n||s)(d(p))};static \u0275cmp=h({type:s,selectors:[["app-leadership"]],decls:45,vars:3,consts:[[1,"hidden","md:block",3,"isDark"],[1,"md:hidden","mb-[3.5rem]",3,"isDark"],["externalClass","bg-(--white) sticky top-0 z-15",1,""],[1,"text-center"],[1,"trajan-pro","text-4xl","md:text-5xl","lg:text-[2.5rem]","text-(--text-grey)","font-[300]"],["externalClass","bg-[url('/assets/imgs/leadership/awakenings.png')] text-start justify-start mt-8"],["container","",1,"max-w-xs","md:max-w-7xl","md:ms-[15rem]","p-7","flex","flex-col"],["header","",1,"trajan-pro","text-[2.2rem]","md:text-[3rem]"],[1,"md:hidden"],["subheader","",1,"text-[1.1rem]","md:text-[1.2rem]"],[1,"my-10"],[1,"flex","justify-center","items-center","py-12","gap-[3rem]"],[1,"text-(--black)","space-y-6","w-[70%]","md:w-[50%]","text-[1.3rem]"],[1,"trajan-pro","text-(--text-grey)","text-[2.5rem]","font-bold","text-center"],[1,"text-justify","md:text-center"],[1,"hidden","md:block"],[1,"action-btns","flex","items-center","justify-center","gap-4"],["href","https://youtube.com/@luckyrerherha?si=BTtNAUEU46Uc5e0Z","target","_blank",1,"trajan-pro","cta-grey","text-[1rem]"],[3,"color"]],template:function(n,L){n&1&&(i(0,"app-navbar",0)(1,"app-nav-sm",1),r(2,"app-intersection",2)(3,"div",3)(4,"h1",4),e(5," The Arsenal of Knowledge "),o()()(),r(6,"app-header-bg",5)(7,"span",6)(8,"span",7),e(9,"These are awakenings, "),i(10,"br"),e(11," not mere "),i(12,"br",8),e(13," conversations."),o(),r(14,"span",9),e(15,"Every word is crafted to reveal, not to please, as I speak "),i(16,"br"),e(17," to your soul."),o()()(),r(18,"section",10)(19,"article",11)(20,"div",12)(21,"h2",13),e(22,"The battle cries"),o(),r(23,"p",14),e(24,"I do not take stages to "),i(25,"br",15),e(26," entertain. I rise to call the "),i(27,"br",15),e(28," forgotten home."),o(),r(29,"p",14),e(30,"Each speech is a cleansing fire, "),i(31,"br",15),e(32," soft enough to awaken, sharp "),i(33,"br",15),e(34," enough to cut chains."),o(),r(35,"p",14),e(36,"Download them. Share them. "),i(37,"br",15),e(38," Let the embers light fires in "),i(39,"br",15),e(40," every city, every soul."),o(),r(41,"div",16)(42,"a",17),e(43,"WATCH NOW"),o()()()()(),i(44,"app-footer",18)),n&2&&(a("isDark",!0),m(),a("isDark",!0),m(43),a("color",!0))},dependencies:[u,b,y,g,x],encapsulation:2})};export{v as LeadershipComponent};
