__NUXT_JSONP__("/blog/Good%20practices%20for%20Git", (function(a,b,c,d,e,f,g,h,i,j){return {data:[{blog:{slug:h,name:h,titleImage:"191020\u002Ftitle",briefdesc:j,postDate:"October 18, 2020",blogNumber:29,toc:[],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"\n  Git has become the most preferred Version Control System (VCS) by software\n  engineers. It adds great value to engineering teams, where several personnel\n  work together and is a need for integrating everyone’s code reliably.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Git is a powerful tool. “But with great power, comes great responsibility”. If\n  we do not follow certain conventions, it could end up as a bite in the back.\n  So, here are some best practices for Git.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"1. Make clean, single-purpose commits."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  There is a great chance for engineers to get sidetracked and do something else\n  when they are working on something. For example, you might be fixing a bug.\n  Then you find another bug. You probably cannot resist the urge to fix that as\n  well, and another and another. Soon, you will end up with so many changes\n  going in one commit.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Commits are better kept small and focused as possible for many reasons:"}]},{type:a,value:c},{type:b,tag:"ul",props:{style:"list-style-position: inside"},children:[{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"\n    It makes easier for anyone looking at your change, making code reviews more\n    efficient.\n  "}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"It is easier to roll back."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"\n    It is straightforward to track these changes with your ticketing system.\n  "}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"2. Commit early and often"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Git works best and, in our favor, when we commit our work often. It is better\n  to work in small chunks and keep committing our work rather than to wait for\n  making the perfect commit. It could help us mitigate conflicts when we are\n  working on a feature that might take a long time to finish. Git will only take\n  responsibility for the data we commit. It will help us from losing our work,\n  reverting changes and help trace what we did when.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"3. Write meaningful commit messages"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  This is the simplest of all. Descriptive and insightful commit messages that\n  concisely describe what changes are being made as part of a commit make life\n  easier for others as well as for our future self. If you are using a ticketing\n  system, you should also include the ticket id in the description.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"4. Don’t commit generated files"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  The files actually worth committing are the ones that was created with manual\n  effort and cannot be generated. Usually, the generated files can be\n  re-generated at will and normally do not work with line-based diff tracking as\n  well. We always need to make sure to add a .gitignore file in our repositories\n  to automatically tell git which files or paths we do not want to track.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"5. Don’t alter published history"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Once a commit has been merged to an upstream default branch, it is strongly\n  advised not to alter history. Git and other VCS tools do allow to rewrite\n  branch history, but doing so is problematic for everyone who has access to the\n  repository. git-rebase is a useful feature. But it should only be used on\n  branches that only one person is working with. Nevertheless, there would\n  inevitably be some situations where there is a need for a history rewrite on a\n  published branch. But do it with extreme care.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Disclaimer : The views and opinions expressed in the article belong solely to the\n  author, and not necessarily to the author's employer, organisation, committee\n  or other group or individual.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[]}]},dir:"\u002Fblogs",path:"\u002Fblogs\u002FGood practices for Git",extension:".md",createdAt:"2023-03-19T19:25:23.757Z",updatedAt:"2022-12-24T07:45:17.607Z"},title:h,description:j,ogImage:"\u002Fimg\u002Fblog\u002F191020\u002Ftitle.jpg",params:{slug:h}}],fetch:{},mutations:[["pageTitle\u002Fset","BLOG"]]}}("text","element","\n","br","p","\n  ","b","Good practices for Git","li","What are the good practices to make git work in our favor.")));